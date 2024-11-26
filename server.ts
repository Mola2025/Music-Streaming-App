import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());

app.post('/api/spotify-token', async (req, res) => {
    try {
        const response = await axios.post('https://accounts.spotify.com/api/token',
            new URLSearchParams({
                grant_type: 'client_credentials',
                client_id: process.env.VITE_SPOTIFY_CLIENT_ID!,
                client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );

        res.json(response.data);
    } catch (error) {
        console.error('Error obtaining Spotify token:', error);
        res.status(500).json({ error: 'Failed to obtain Spotify token' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});