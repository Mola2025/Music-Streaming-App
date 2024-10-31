import React, { useEffect, useState } from 'react';
import { db } from "../../firebase-config";
import { collection, getDoc, doc } from "firebase/firestore";
import './RecentThreads.css';

interface Thread {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    userId: string;
}

interface HighlightedThreadsProps {
    threadIds: string[];
}

const HighlightedThreads: React.FC<HighlightedThreadsProps> = ({ threadIds }) => {
    const [highlightedThreads, setHighlightedThreads] = useState<Thread[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHighlightedThreads = async () => {
            try {
                const threadsData: Thread[] = [];

                for (const threadId of threadIds) {
                    const threadDoc = await getDoc(doc(db, "threads", threadId));
                    if (threadDoc.exists()) {
                        threadsData.push({
                            id: threadDoc.id,
                            ...(threadDoc.data() as Omit<Thread, 'id'>),
                        });
                    }
                }

                setHighlightedThreads(threadsData);
            } catch (error) {
                console.error("Error fetching highlighted threads:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHighlightedThreads();
    }, [threadIds]);

    if (loading) {
        return <div>Loading highlighted threads...</div>;
    }

    return (
        <div className="RecentThreads">
            <h2>Highlighted Threads</h2>
            <ul>
                {highlightedThreads.map((thread) => (
                    <li key={thread.id} className="thread-item">
                        <h3>{thread.title}</h3>
                        <p>{thread.content}</p>
                        <small>Posted by User ID: {thread.userId}</small>
                        <span className="highlight-star">
                            <img src="/src/assets/frontend-assets/star-yellow.png" alt="Star" />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HighlightedThreads;
