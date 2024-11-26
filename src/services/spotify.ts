import axios from 'axios';
import { auth } from '../firebase-config'; // Asegúrate de que la ruta sea correcta
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Configuración de Spotify
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID; // Asegúrate de que estas variables de entorno estén definidas
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI; // Debe ser igual al que configuraste en el dashboard de Spotify

interface SpotifyToken {
    access_token: string;
    token_type: string;
    expires_in: number;
}

interface SpotifySearchResults {
    tracks?: { items: any[] };
    artists?: { items: any[] };
    albums?: { items: any[] };
    playlists?: { items: any[] };
    categories?: { items: any[] };
}

// let accessToken: string | null = null;
// let refreshToken: string | null = null;

// // Función para obtener el token de acceso
// const getAccessToken = async () => {
//     if (accessToken) return accessToken;

//     const authCode = await getSpotifyAuthCode(); // Implementa esta función para obtener el código de autorización
//     const response = await axios.post('https://accounts.spotify.com/api/token', null, {
//         params: {
//             grant_type: 'authorization_code',
//             code: authCode,
//             redirect_uri: REDIRECT_URI,
//             client_id: CLIENT_ID,
//             client_secret: CLIENT_SECRET,
//         },
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//     });

//     accessToken = response.data.access_token;
//     refreshToken = response.data.refresh_token;

//     // Configurar un temporizador para renovar el token antes de que expire
//     setTimeout(refreshAccessToken, (response.data.expires_in - 60) * 1000); // Renueva 60 segundos antes de que expire
//     return accessToken;
// };

// // Función para refrescar el token
// const refreshAccessToken = async () => {
//     if (!refreshToken) return;

//     const response = await axios.post('https://accounts.spotify.com/api/token', null, {
//         params: {
//             grant_type: 'refresh_token',
//             refresh_token: refreshToken,
//             client_id: CLIENT_ID,
//             client_secret: CLIENT_SECRET,
//         },
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//     });

//     accessToken = response.data.access_token;

//  // Configurar un temporizador para renovar el token antes de que expire
//     setTimeout(refreshAccessToken, (response.data.expires_in - 60) * 1000);
// };

// // Implementa esta función para obtener el código de autorización de Spotify
// const getSpotifyAuthCode = () => {
//     const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
//     const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
//     const SCOPES = 'user-read-private user-read-email user-modify-playback-state streaming'; // Asegúrate de incluir todos los alcances necesarios
//     const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPES)}`;
//     window.location.href = authUrl; // Redirige al usuario a la página de inicio de sesión de Spotify
// };

// // Función para obtener el token
// export const getSpotifyToken = async () => {
//     return await getAccessToken();
// };


// Obtener el token de Spotify
export async function getSpotifyToken(): Promise<string> {
    try {
        // Assuming you're fetching the token from your server
        const response = await axios.post<SpotifyToken>('/api/spotify-token');
        return response.data.access_token; // This should be the user token
    } catch (error) {
        console.error('Error getting Spotify token:', error);
        throw error;
    }
}

// Buscar contenido en Spotify
export async function searchSpotify(query: string, token: string): Promise<SpotifySearchResults> {
    try {
        const [searchResponse, categoriesResponse] = await Promise.all([
            axios.get<SpotifySearchResults>(`https://api.spotify.com/v1/search`, {
                params: { q: query, type: 'track,artist,album,playlist' },
                headers: { Authorization: `Bearer ${token}` },
            }),
            axios.get<{ categories: { items: any[] } }>(`https://api.spotify.com/v1/browse/categories`, {
                params: { limit: 50 },
                headers: { Authorization: `Bearer ${token}` },
            }),
        ]);

        // Filtrar categorías basadas en la consulta
        const filteredCategories = categoriesResponse.data.categories.items.filter(
            (category: any) => category.name.toLowerCase().includes(query.toLowerCase())
        );

        return {
            ...searchResponse.data,
            categories: { items: filteredCategories },
        };
    } catch (error) {
        console.error('Error searching Spotify:', error);
        throw error;
    }
}

// Función para reproducir una pista
// export const playSpotifyTrack = async (token: string, trackUri: string) => {
//     await axios.put('https://api.spotify.com/v1/me/player/play', {
//         uris: [trackUri],
//     }, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
// };

// Función para pausar la reproducción
// export const pauseSpotifyTrack = async (token: string) => {
//     await axios.put('https://api.spotify.com/v1/me/player/pause', {}, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
// };

// Función para saltar a la siguiente pista
// export const skipToNextTrack = async (token: string) => {
//     await axios.post('https://api.spotify.com/v1/me/player/next', {}, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
// };

// Función para saltar a la pista anterior
// export const skipToPreviousTrack = async (token: string) => {
//     await axios.post('https://api.spotify.com/v1/me/player/previous', {}, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
// };

export { SpotifySearchResults };
