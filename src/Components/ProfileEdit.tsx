import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config.ts";
import { updateProfile, User } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";// Import useNavigate for navigation
import "/src/index.css";

const ProfileEdit: React.FC = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [user, setUser] = useState<User | null>(null);
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [status, setStatus] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [profilePic, setProfilePic] = useState<File | null>(null);
    const [profilePicUrl, setProfilePicUrl] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            const currentUser = auth.currentUser;
            if (currentUser) {
                setUser(currentUser);
                setDisplayName(currentUser.displayName || "");
                setEmail(currentUser.email || "");

                const userDocRef = doc(db, "users", currentUser.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    const data = userDoc.data();
                    setBio(data.bio || "");
                    setStatus(data.status || "");
                    setBirthdate(data.birthdate || "");
                    setGender(data.gender || "");
                    setProfilePicUrl(data.profilePicUrl || "");
                }
            }
            setLoading(false);
        };

        fetchUserData();
    }, []);


    const handleImageUpload = async () => {
        if (user && profilePic) {
            const storage = getStorage();
            const storageRef = ref(storage, `profilePics/${user.uid}`);

            await uploadBytes(storageRef, profilePic);
            const downloadURL = await getDownloadURL(storageRef);
            setProfilePicUrl(downloadURL);

            await updateProfile(user, { photoURL: downloadURL });

            return downloadURL;
        }
        return null;
    };

    const handleSave = async () => {
        if (user) {
            try {
                const profilePicUrl = await handleImageUpload();
                await updateProfile(user, { displayName });

                const userDocRef = doc(db, "users", user.uid);
                await setDoc(userDocRef, {
                    displayName,
                    email,
                    bio,
                    status,
                    birthdate,
                    gender,
                    profilePicUrl: profilePicUrl || user.photoURL,
                }, { merge: true }); // 'merge: true' asegura que solo se agreguen campos sin borrar otros

                alert("Profile updated successfully.");
                navigate("/spotify-container");
            } catch (error) {
                console.error("Error updating profile:", error);
                alert("Error updating profile.");
            }
        }
    };


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setProfilePic(e.target.files[0]);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="profile-edit-container">
            <h2>Edit Profile</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        disabled
                    />
                    <div className="forgot">
                        <span onClick={() => navigate('/change-email')}>Cambiar Email</span>
                    </div>
                </div>
                <div>
                    <label>Biography:</label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    ></textarea>
                </ div>
                <div>
                    <label>Status:</label>
                    <input
                        type="text"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    />
                </div>
                <div>
                    <label>Birthdate:</label>
                    <input
                        type="date"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                    />
                </div>
                <div>
                    <label>Gender:</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer_not_to_say">Prefer not to say</option>
                    </select>
                </div>
                <div>
                    <label>Profile Picture:</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                    {profilePicUrl && (
                        <div>
                            <p>Current Picture:</p>
                            <img src={profilePicUrl} alt="Foto de perfil" width={100} />
                        </div>
                    )}
                </div>
                <button type="button" onClick={handleSave}>
                    Guardar cambios
                </button>
            </form>
        </div>
    );
};

export default ProfileEdit;