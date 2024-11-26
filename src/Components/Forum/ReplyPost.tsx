import React, { useState, ChangeEvent, FormEvent } from "react";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

interface ReplyPostProps {
    threadId: string; // Ajusta el tipo según tu threadId
}

const ReplyPost: React.FC<ReplyPostProps> = ({ threadId }) => {
    const [content, setContent] = useState<string>("");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            // Guarda la respuesta en Firestore
            const repliesCollection = collection(db, `threads/${threadId}/replies`);
            await addDoc(repliesCollection, {
                content,
                createdAt: new Date(),
            });

            alert("Reply posted successfully");
            setContent(""); // Limpiar el campo de texto
        } catch (error) {
            alert("An error occurred");
            console.error(error);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    return (
        <div className="ReplyForm">
            <form onSubmit={handleSubmit}>
                <label className="text-black">
                    Your Reply:
                    <textarea
                        value={content}
                        onChange={handleChange}
                        placeholder="Write your reply here..."
                        className="border-black top-4 ml-3"
                    />
                </label>
                <button type="submit" value="Post Reply" className="text-black">Post Reply</button>
            </form>
        </div>
    );
}

export default ReplyPost;