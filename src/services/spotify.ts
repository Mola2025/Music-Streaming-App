import axios from 'axios';

interface SpotifyToken {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export async function getSpotifyToken(): Promise<string> {
    try {
        const response = await axios.post<SpotifyToken>('/api/spotify-token');
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting Spotify token:', error);
        throw error;
    }
}

export async function searchSpotify(query: string, token: string) {
    try {
        const response = await axios.get(`https://api.spotify.com/v1/search`, {
            params: { q: query, type: 'track,artist,album,playlist' },
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error searching Spotify:', error);
        throw error;
    }
}