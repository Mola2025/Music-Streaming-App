import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import './RecentThreads.css';
import ReplyPost from './ReplyPost';

interface Thread {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    userId: string;
}

interface Reply {
    id: string;
    content: string;
    threadId: string;
    userId: string;
}

interface RecentThreadsProps {
    onHighlightChange: (highlightedIds: string[]) => void;
}

const RecentThreads: React.FC<RecentThreadsProps> = ({ onHighlightChange }) => {
    const [threads, setThreads] = useState<Thread[]>([]);
    const [highlightedThreads, setHighlightedThreads] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [replyingTo, setReplyingTo] = useState<string | null>(null);
    const [visibleReplies, setVisibleReplies] = useState<{ [key: string]: boolean }>({});
    const [replies, setReplies] = useState<{ [key: string]: Reply[] }>({});

    useEffect(() => {
        const fetchThreads = async () => {
            try {
                const threadsCollection = collection(db, "threads");
                const threadsQuery = query(threadsCollection, orderBy("createdAt", "desc"));
                const threadDocs = await getDocs(threadsQuery);

                const threadsData = threadDocs.docs.map((doc) => ({
                    id: doc.id,
                    ...(doc.data() as Omit<Thread, 'id'>),
                }));

                setThreads(threadsData);

                const repliesData: { [key: string]: Reply[] } = {};
                for (const thread of threadsData) {
                    const repliesCollection = collection(db, `threads/${thread.id}/replies`);
                    const repliesQuery = query(repliesCollection, orderBy("createdAt", "desc"));
                    const replyDocs = await getDocs(repliesQuery);
                    const threadReplies = replyDocs.docs.map((doc) => ({
                        id: doc.id,
                        ...(doc.data() as Omit<Reply, 'id'>),
                    }));

                    repliesData[thread.id] = threadReplies;
                }
                setReplies(repliesData);
            } catch (error) {
                console.error("Error fetching threads:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchThreads();
    }, []);

    useEffect(() => {
        onHighlightChange(highlightedThreads); // Llama a la función del padre cuando highlightedThreads cambia
    }, [highlightedThreads, onHighlightChange]);

    const handleReplyClick = (threadId: string) => {
        setReplyingTo(threadId);
    };

    const toggleReplies = (threadId: string) => {
        setVisibleReplies(prev => ({ ...prev, [threadId]: !prev[threadId] }));
    };

    const toggleHighlight = (threadId: string) => {
        setHighlightedThreads(prev =>
            prev.includes(threadId) ? prev.filter(id => id !== threadId) : [...prev, threadId]
        );
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="RecentThreads">
            <h2>Recent Threads</h2>
            <ul>
                {threads.map((thread) => (
                    <li key={thread.id}>
                        <h3>{thread.title}</h3>
                        <p>{thread.content}</p>
                        <small>Posted by User ID: {thread.userId}</small>
                        <span className="reply-post" onClick={() => handleReplyClick(thread.id)}>Reply</span>
                        <span className="reply-post-l" onClick={() => toggleReplies(thread.id)}>
                            {visibleReplies[thread.id] ? "Hide Replies" : "Replies"}
                        </span>
                        <span className="highlight-star" onClick={() => toggleHighlight(thread.id)}>
                            {highlightedThreads.includes(thread.id) ? (
                                <img src="/src/assets/frontend-assets/star-yellow.png" alt="Star" />
                            ) : (
                                <img src="/src/assets/frontend-assets/star-trasparent.png" alt="Star" />
                            )}
                        </span>
                        {replyingTo === thread.id && <ReplyPost threadId={thread.id} />}
                        {visibleReplies[thread.id] && replies[thread.id] && (
                            <ul className="replies">
                                {replies[thread.id].map(reply => (
                                    <li key={reply.id}>
                                        <p>{reply.content}</p>
                                        <small>Posted by User ID: {reply.userId}</small>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentThreads;
