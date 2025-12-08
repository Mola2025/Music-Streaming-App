[README.md](https://github.com/user-attachments/files/24023366/README.md)

# 🎵 Music Streaming App

### _Spotify-Inspired Clone_

This project is a music streaming application that allows users to
discover music, create their personal library, and connect with other
music lovers through a forum system.

## 📌 Description

Music Streaming App is a streaming platform that provides a complete and
social music experience.

## 🛠️ Technologies Used

- **Frontend:** React
- **Backend:** TypeScript
- **Database:** Firebase
- **API:** Spotify Web API

## 🧭 Backlog (Summary of Main Stories / Tasks)

- Authentication (Google, email)
- Spotify Web API integration (search, playback)
- Music player (play, pause, next, previous, queue)
- User library (save/unsave songs)
- Song lyrics (fetch and display)
- Genre-based forums (CRUD for threads and replies)
- User profile (view and edit)
- Pages: Home, Browse, Search, Library, Forum, Profile, Now Playing
- Basic tests (UI and critical endpoints)

---

## 🚀 Installation & Setup (Detailed)

### Prerequisites

- Node.js (\>= 16) and npm or yarn
- Firebase account (Firestore, Auth, Storage)
- Spotify Developer app registration to get client ID/secret

### 1. Clone the repository

```bash
git clone https://github.com/Mola2025/Music-Streaming-App.git
cd Music-Streaming-App
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Variables

Create a `.env` or `.env.local` file in the project root with:

    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_app_id

    VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
    VITE_SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
    VITE_SPOTIFY_REDIRECT_URI=http://localhost:5173/callback

> Make sure to configure your Firebase credentials and redirect URIs
> properly inside Spotify Developer Dashboard.

### 4. Initialize Firebase (optional)

If initialization scripts are provided:

```bash
npm run firebase:init
```

### 5. Run in development mode

```bash
npm run dev
```

Then open: `http://localhost:5173/`

---

## 🧩 Suggested Project Structure

    /src
      /assets
      /components
      /pages
      /services      # API calls, spotify, firebase
      /context       # global state (auth, player, user)
      /hooks
      /utils
      /styles
    /docs
      /diagrams

---

## 🛠️ Basic Usage

- Register or log in (Google or email)
- Browse recommended lists and genres on the home page
- Use the search feature to find songs or artists
- Save songs to your library and add them to your queue
- Visit the Forum section to participate in genre-based discussions

---

## 🔗 GitHub

https://github.com/Mola2025/Music-Streaming-App
