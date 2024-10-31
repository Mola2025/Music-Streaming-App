import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase-config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const CreateThreadPage: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid);
            }
        });
        return () => unsubscribe(); // Limpia el listener al desmontar el componente
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!userId) {
            alert("No user ID found.");
            return;
        }

        try {
            // Guardar en la subcolección del usuario
            await addDoc(collection(db, `users/${userId}/threads`), {
                title,
                content,
                createdAt: Timestamp.fromDate(new Date()),
                userId, // Incluye el userId
            });

            // Guardar en la colección global
            await addDoc(collection(db, "threads"), {
                title,
                content,
                createdAt: Timestamp.fromDate(new Date()),
                userId, // Incluye el userId
            });

            alert("Thread created successfully");
            setTitle("");
            setContent("");
        } catch (error) {
            console.error("Error creating thread:", error);
            alert("An error occurred");
        }
    };

    return (
        <div className="CreateThreadPage">
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        className="Title ml-3"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Content:
                    <textarea
                        className="text-black ml-3 top-4"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </label>
                <br />
                <input className="cursor-pointer" type="submit" value="Create Thread" />
            </form>
        </div>
    );
};

export default CreateThreadPage;