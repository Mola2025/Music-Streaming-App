import axios from 'axios';

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

export async function getSpotifyToken(): Promise<string> {
    try {
        const response = await axios.post<SpotifyToken>('/api/spotify-token');
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting Spotify token:', error);
        throw error;
    }
}

export async function searchSpotify(query: string, token: string): Promise<SpotifySearchResults> {
    try {
        const [searchResponse, categoriesResponse] = await Promise.all([
            axios.get<SpotifySearchResults>(`https://api.spotify.com/v1/search`, {
                params: { q: query, type: 'track,artist,album,playlist' },
                headers: { 'Authorization': `Bearer ${token}` }
            }),
            axios.get<{ categories: { items: any[] } }>(`https://api.spotify.com/v1/browse/categories`, {
                params: { limit: 50 },
                headers: { 'Authorization': `Bearer ${token}` }
            })
        ]);

        // Filtrar categorías basadas en la consulta
        const filteredCategories = categoriesResponse.data.categories.items.filter(
            (category: any) => category.name.toLowerCase().includes(query.toLowerCase())
        );

        return {
            ...searchResponse.data,
            categories: { items: filteredCategories }
        };
    } catch (error) {
        console.error('Error searching Spotify:', error);
        throw error;
    }
}

export { SpotifySearchResults };