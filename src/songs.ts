// Define el tipo Song
export interface Song {
    id: number;
    name: string;
    artist: string[]; // Es un arreglo de artistas
    path: string; // Ruta local de la canción
    image: string; // Ruta de la imagen de la portada
    lyrics?: string; // Ruta opcional para las letras de la canción
}

// Lista de canciones usando el tipo Song
export const songList: Song[] = [
    {
        id: 1,
        name: "+57",
        artist: ["Karol G, Feid, Maluma, Blessd, Ryan Castro, Ovy On The Drums, DFZM"],
        path: "/local_music/+57.mp3",
        image: "/local_music/cover/+57.jpg",
        lyrics: "/local_music/lyrics/+57.lrc",
    },
    {
        id: 2,
        name: "A POCA LUZ",
        artist: ["Ryan Castro, Hamilton"],
        path: "/local_music/A POCA LUZ.mp3",
        image: "/local_music/cover/A POCA LUZ.jpg",
        lyrics: "/local_music/lyrics/A POCA LUZ.lrc",
    },
    {
        id: 3,
        name: "Amor De Una Noche",
        artist: ["Ryan Castro"],
        path: "/local_music/Amor De Una Noche.mp3",
        image: "/local_music/cover/Amor De Una Noche.jpg",
        lyrics: "/local_music/lyrics/Amor De Una Noche.lrc",
    },
    {
        id: 4,
        name: "Animals",
        artist: ["Maroon 5"],
        path: "/local_music/Animals.mp3",
        image: "/local_music/cover/Animals.jpg",
        lyrics: "/local_music/lyrics/Animals.lrc",
    },
    {
        id: 5,
        name: "Attention",
        artist: ["Charlie Puth"],
        path: "/local_music/Attention.mp3",
        image: "/local_music/cover/Attention.jpg",
        lyrics: "/local_music/lyrics/Attention.lrc",
    },
    {
        id: 6,
        name: "Avemaría",
        artist: ["Ryan Castro"],
        path: "/local_music/Avemaría.mp3",
        image: "/local_music/cover/Avemaría.jpg",
        lyrics: "/local_music/lyrics/Avemaría.lrc",
    },
    {
        id: 7,
        name: "Believer",
        artist: ["Imagine Dragons"],
        path: "/local_music/Believer.mp3",
        image: "/local_music/cover/Believer.jpg",
        lyrics: "/local_music/lyrics/Believer.lrc",
    },
    {
        id: 8,
        name: "Bichiyal",
        artist: ["Bad Bunny"],
        path: "/local_music/Bichiyal.mp3",
        image: "/local_music/cover/Bichiyal.jpg",
        lyrics: "/local_music/lyrics/Bichiyal.lrc",
    },
    {
        id: 9,
        name: "CASI ALGO",
        artist: ["Blessd, Ovy On The Drums"],
        path: "/local_music/CASI ALGO.mp3",
        image: "/local_music/cover/CASI ALGO.jpg",
        lyrics: "/local_music/lyrics/CASI ALGO.lrc",
    },
    {
        id: 10,
        name: "Chorrito Pa Las Animas",
        artist: ["Feid"],
        path: "/local_music/CHORRITO PA LAS ANIMAS.mp3",
        image: "/local_music/cover/CHORRITO PA LAS ANIMAS.jpg",
        lyrics: "/local_music/lyrics/CHORRITO PA LAS ANIMAS.lrc",
    },
    {
        id: 11,
        name: "Contigo",
        artist: ["Kevin Roldan"],
        path: "/local_music/Contigo.mp3",
        image: "/local_music/cover/Contigo.jpg",
        lyrics: "/local_music/lyrics/Contigo.lrc",
    },
    {
        id: 12,
        name: "Corazón Roto - Remix",
        artist: ["Brray, Jhayco, Ryan Castro"],
        path: "/local_music/Corazón Roto - Remix.mp3",
        image: "/local_music/cover/Corazón Roto - Remix.jpg",
        lyrics: "/local_music/lyrics/Corazón Roto - Remix.lrc",
    },
    {
        id: 13,
        name: "CRUSH",
        artist: ["Dei V, Sky Rompiendo"],
        path: "/local_music/CRUSH.mp3",
        image: "/local_music/cover/CRUSH.jpg",
        lyrics: "/local_music/lyrics/CRUSH.lrc",
    },
    {
        id: 14,
        name: "CUAL ES ESA",
        artist: ["Feid, Pirlo"],
        path: "/local_music/CUAL ES ESA.mp3",
        image: "/local_music/cover/CUAL ES ESA.jpg",
        lyrics: "/local_music/lyrics/CUAL ES ESA.lrc",
    },
    {
        id: 15,
        name: "Cuerpecito",
        artist: ["Jhayco"],
        path: "/local_music/Cuerpecito.mp3",
        image: "/local_music/cover/Cuerpecito.jpg",
        lyrics: "/local_music/lyrics/Cuerpecito.lrc",
    },
    {
        id: 16,
        name: "Doblexxó",
        artist: ["Feid, J Balvin"],
        path: "/local_music/Doblexxó.mp3",
        image: "/local_music/cover/Doblexxó.jpg",
        lyrics: "/local_music/lyrics/Doblexxó.lrc",
    },
    {
        id: 17,
        name: "EL CANTANTE DEL GHETTO",
        artist: ["Ryan Castro"],
        path: "/local_music/EL CANTANTE DEL GHETTO.mp3",
        image: "/local_music/cover/EL CANTANTE DEL GHETTO.jpg",
        lyrics: "/local_music/lyrics/EL CANTANTE DEL GHETTO.lrc",
    },
    {
        id: 18,
        name: "El Pichón",
        artist: ["Ryan Castro"],
        path: "/local_music/El Pichón.mp3",
        image: "/local_music/cover/El Pichón.jpg",
        lyrics: "/local_music/lyrics/El Pichón.lrc",
    },
    {
        id: 19,
        name: "Empelotica",
        artist: ["Lenny Tavarez, Feid"],
        path: "/local_music/EMPELOTICA.mp3",
        image: "/local_music/cover/EMPELOTICA.jpg",
        lyrics: "/local_music/lyrics/EMPELOTICA.lrc",
    },
    {
        id: 20,
        name: "ENVIGADO",
        artist: ["Ryan Castro"],
        path: "/local_music/ENVIGADO.mp3",
        image: "/local_music/cover/ENVIGADO.jpg",
        lyrics: "/local_music/lyrics/ENVIGADO.lrc",
    },
    {
        id: 21,
        name: "Everyday",
        artist: ["Logic, Marshmello"],
        path: "/local_music/Everyday.mp3",
        image: "/local_music/cover/Everyday.jpg",
        lyrics: "/local_music/lyrics/Everyday.lrc",
    },
    {
        id: 22,
        name: "FDSR",
        artist: ["Ryan Castro, Maisak"],
        path: "/local_music/FDSR.mp3",
        image: "/local_music/cover/FDSR.jpg",
        lyrics: "/local_music/lyrics/FDSR.lrc",
    },
    {
        id: 23,
        name: "Fecha",
        artist: ["Feid, Yandel"],
        path: "/local_music/Fecha.mp3",
        image: "/local_music/cover/Fecha.jpg",
        lyrics: "/local_music/lyrics/Fecha.lrc",
    },
    {
        id: 24,
        name: "Feels",
        artist: ["Ed Sheeran, Young Thug, J Hus"],
        path: "/local_music/Feels (feat. Young Thug & J Hus).mp3",
        image: "/local_music/cover/Feels (feat. Young Thug & J Hus).jpg",
        lyrics: "/local_music/lyrics/Feels (feat. Young Thug & J Hus).lrc",
    },
    {
        id: 25,
        name: "Ferxxo 151",
        artist: ["Feid"],
        path: "/local_music/FERXXO 151.mp3",
        image: "/local_music/cover/FERXXO 151.jpg",
        lyrics: "/local_music/lyrics/FERXXO 151.lrc",
    },
    {
        id: 26,
        name: "Ferxxoko",
        artist: ["Feid"],
        path: "/local_music/Ferxxoko.mp3",
        image: "/local_music/cover/Ferxxoko.jpg",
        lyrics: "/local_music/lyrics/Ferxxoko.lrc",
    },
    {
        id: 27,
        name: "FRESKI",
        artist: ["Ryan Castro"],
        path: "/local_music/FRESKI.mp3",
        image: "/local_music/cover/FRESKI.jpg",
        lyrics: "/local_music/lyrics/FRESKI.lrc",
    },
    {
        id: 28,
        name: "GATA G",
        artist: ["Ryan Castro"],
        path: "/local_music/GATA G.mp3",
        image: "/local_music/cover/GATA G.jpg",
        lyrics: "/local_music/lyrics/GATA G.lrc",
    },
    {
        id: 29,
        name: "Girls Like You (feat. Cardi B)",
        artist: ["Maroon 5, Cardi B"],
        path: "/local_music/Girls Like You (feat. Cardi B) - Cardi B Version.mp3",
        image: "/local_music/cover/Girls Like You (feat. Cardi B) - Cardi B Version.jpg",
        lyrics: "/local_music/lyrics/Girls Like You (feat. Cardi B) - Cardi B Version.lrc",
    },
    {
        id: 30,
        name: "Godiva",
        artist: ["Myke Towers, Blessd, Ryan Castro"],
        path: "/local_music/GODIVA.mp3",
        image: "/local_music/cover/GODIVA.jpg",
        lyrics: "/local_music/lyrics/GODIVA.lrc",
    },
    {
        id: 31,
        name: "Kyoto",
        artist: ["Jhayco, De La Rose, Haze"],
        path: "/local_music/Kyoto.mp3",
        image: "/local_music/cover/Kyoto.jpg",
        lyrics: "/local_music/lyrics/Kyoto.lrc",
    },
    {
        id: 32,
        name: "Lokera",
        artist: ["Rauw Alejandro, Brray, Lyanno"],
        path: "/local_music/LOKERA.mp3",
        image: "/local_music/cover/LOKERA.jpg",
        lyrics: "/local_music/lyrics/LOKERA.lrc",
    },
    {
        id: 33,
        name: "Luna Llena",
        artist: ["Paulo Londra"],
        path: "/local_music/Luna Llena.mp3",
        image: "/local_music/cover/Luna Llena.jpg",
        lyrics: "/local_music/lyrics/Luna Llena.lrc",
    },
    {
        id: 34,
        name: "Mionca",
        artist: ["Maluma, Pirlo"],
        path: "/local_music/MIONCA.mp3",
        image: "/local_music/cover/MIONCA.jpg",
        lyrics: "/local_music/lyrics/MIONCA.lrc",
    },
    {
        id: 35,
        name: "Mirala",
        artist: ["Ovy On The Drums"],
        path: "/local_music/MIRALA.mp3",
        image: "/local_music/cover/MIRALA.jpg",
        lyrics: "/local_music/lyrics/MIRALA.lrc",
    },
    {
        id: 36,
        name: "NO ME QUIERO CASAR",
        artist: ["Bad Bunny"],
        path: "/local_music/NO ME QUIERO CASAR.mp3",
        image: "/local_music/cover/NO ME QUIERO CASAR.png",
        lyrics: "/local_music/lyrics/NO ME QUIERO CASAR.lrc",
    },
    {
        id: 37,
        name: "Nothing On You (feat. Paulo Londra & Dave)",
        artist: ["Ed Sheeran, Paulo Londra & Dave"],
        path: "/local_music/Nothing On You (feat. Paulo Londra & Dave).mp3",
        image: "/local_music/cover/Nothing On You (feat. Paulo Londra & Dave).jpg",
        lyrics: "/local_music/lyrics/Nothing On You (feat. Paulo Londra & Dave).lrc",
    },
    {
        id: 38,
        name: "Numb",
        artist: ["Likin Park"],
        path: "/local_music/Numb.mp3",
        image: "/local_music/cover/Numb.jpg",
        lyrics: "/local_music/lyrics/Numb.lrc",
    },
    {
        id: 39,
        name: "Oe Bebe",
        artist: ["Maluma, Blessd"],
        path: "/local_music/Oe Bebé.mp3",
        image: "/local_music/cover/Oe Bebé.jpg",
        lyrics: "/local_music/lyrics/Oe Bebé.lrc",
    },
    {
        id: 40,
        name: "PERRO NEGRO",
        artist: ["Bad Bunny, Feid"],
        path: "/local_music/PERRO NEGRO.mp3",
        image: "/local_music/cover/PERRO NEGRO.jpg",
        lyrics: "/local_music/lyrics/PERRO NEGRO.lrc",
    },
    {
        id: 41,
        name: "PUEBLO DE MEDALLO",
        artist: ["Ryan Castro, Arcangel"],
        path: "/local_music/PUEBLO DE MEDALLO.mp3",
        image: "/local_music/cover/PUEBLO DE MEDALLO.jpg",
        lyrics: "/local_music/lyrics/PUEBLO DE MEDALLO.lrc",
    },
    {
        id: 42,
        name: "Q U E V A S H A C E R H O Y",
        artist: ["Omar Courtz, De La Rose, Haze"],
        path: "/local_music/Q U E V A S H A C E R H O Y _.mp3",
        image: "/local_music/cover/Q U E V A S H A C E R H O Y _.jpg",
        lyrics: "/local_music/lyrics/Q U E V A S H A C E R H O Y _.lrc",
    },
    {
        id: 43,
        name: "qué le pasa conmigo",
        artist: ["Rels B, Nicki Nicole"],
        path: "/local_music/qué le pasa conmigo_.mp3",
        image: "/local_music/cover/qué le pasa conmigo_.jpg",
        lyrics: "/local_music/lyrics/qué le pasa conmigo_.lrc",
    },
    {
        id: 44,
        name: "Que Malo",
        artist: ["Bad Bunny, Ñengo Flow"],
        path: "/local_music/Que Malo.mp3",
        image: "/local_music/cover/Que Malo.jpg",
        lyrics: "/local_music/lyrics/Que Malo.lrc",
    },
    {
        id: 45,
        name: "Radioactive",
        artist: ["Imagine Dragons"],
        path: "/local_music/Radioactive.mp3",
        image: "/local_music/cover/Radioactive.jpg",
        lyrics: "/local_music/lyrics/Radioactive.lrc",
    },
    {
        id: 46,
        name: "Rara Vez",
        artist: ["Milo J"],
        path: "/local_music/Rara Vez.mp3",
        image: "/local_music/cover/Rara Vez.jpg",
        lyrics: "/local_music/lyrics/Rara Vez.lrc",
    },
    {
        id: 47,
        name: "Remember The Name (feat. Eminem & 50 Cent)",
        artist: ["Ed Sheeran, Eminem & 50 Cent"],
        path: "/local_music/Remember The Name (feat. Eminem & 50 Cent).mp3",
        image: "/local_music/cover/Remember The Name (feat. Eminem & 50 Cent).jpg",
        lyrics: "/local_music/lyrics/Remember The Name (feat. Eminem & 50 Cent).lrc",
    },
    {
        id: 48,
        name: "REMIX EXCLUSIVO",
        artist: ["Feid"],
        path: "/local_music/REMIX EXCLUSIVO.mp3",
        image: "/local_music/cover/REMIX EXCLUSIVO.jpg",
        lyrics: "/local_music/lyrics/REMIX EXCLUSIVO.lrc",
    },
    {
        id: 49,
        name: "RITMO DE MEDALLO",
        artist: ["Ryan Castro, Feid"],
        path: "/local_music/RITMO DE MEDALLO.mp3",
        image: "/local_music/cover/RITMO DE MEDALLO.jpg",
        lyrics: "/local_music/lyrics/RITMO DE MEDALLO.lrc",
    },
    {
        id: 50,
        name: "SE ME OLVIDA",
        artist: ["Feid, Maisak"],
        path: "/local_music/SE ME OLVIDA.mp3",
        image: "/local_music/cover/SE ME OLVIDA.jpg",
        lyrics: "/local_music/lyrics/SE ME OLVIDA.lrc",
    },
    {
        id: 51,
        name: "SIN PODERES",
        artist: ["Alvaro Diaz"],
        path: "/local_music/SIN PODERES.mp3",
        image: "/local_music/cover/SIN PODERES.jpg",
        lyrics: "/local_music/lyrics/SIN PODERES.lrc",
    },
    {
        id: 52,
        name: "Soltera",
        artist: ["W Sound, Blessd, Ovy On The Drums"],
        path: "/local_music/Soltera - W Sound 01.mp3",
        image: "/local_music/cover/Soltera - W Sound 01.jpg",
        lyrics: "/local_music/lyrics/Soltera.lrc",
    },
    {
        id: 53,
        name: "SORRY 4 THAT MUCH",
        artist: ["Feid"],
        path: "/local_music/SORRY 4 THAT MUCH.mp3",
        image: "/local_music/cover/SORRY 4 THAT MUCH.jpg",
        lyrics: "/local_music/lyrics/SORRY 4 THAT MUCH.lrc",
    },
    {
        id: 54,
        name: "South of the Border (feat. Camila Cabello & Cardi B)",
        artist: ["Ed Sheeran, Camila Cabello & Cardi B"],
        path: "/local_music/South of the Border (feat. Camila Cabello & Cardi B).mp3",
        image: "/local_music/cover/South of the Border (feat. Camila Cabello & Cardi B).jpg",
        lyrics: "/local_music/lyrics/South of the Border (feat. Camila Cabello & Cardi B).lrc",
    },
    {
        id: 55,
        name: "Stitches",
        artist: ["Shawn Mendes"],
        path: "/local_music/Stitches.mp3",
        image: "/local_music/cover/Stitches.jpg",
        lyrics: "/local_music/lyrics/Stitches.lrc",
    },
    {
        id: 56,
        name: "Sucker for Pain (with Wiz Khalifa, Imagine Dragons, Logic & Ty Dolla $ign feat. X Ambassadors)",
        artist: ["Imagine Dragons, Wiz Khalifa, Logic & Ty Dolla $ign"],
        path: "/local_music/Sucker for Pain (with Wiz Khalifa, Imagine Dragons, Logic & Ty Dolla $ign feat. X Ambassadors).mp3",
        image: "/local_music/cover/Sucker for Pain (with Wiz Khalifa, Imagine Dragons, Logic & Ty Dolla $ign feat. X Ambassadors).png",
        lyrics: "/local_music/lyrics/Sucker for Pain (with Wiz Khalifa, Imagine Dragons, Logic & Ty Dolla $ign feat. X Ambassadors).lrc",
    },
    {
        id: 57,
        name: "Take Me Back to London (feat. Stormzy)",
        artist: ["Ed Sheeran, Stormzy"],
        path: "/local_music/Take Me Back to London (feat. Stormzy).mp3",
        image: "/local_music/cover/Take Me Back to London (feat. Stormzy).jpg",
        lyrics: "/local_music/lyrics/Take Me Back to London (feat. Stormzy).lrc",
    },
    {
        id: 58,
        name: "Tarot",
        artist: ["Bad Bunny, Jhayco"],
        path: "/local_music/Tarot.mp3",
        image: "/local_music/cover/Tarot.jpg",
        lyrics: "/local_music/lyrics/Tarot.lrc",
    },
    {
        id: 59,
        name: "Te Colaboro",
        artist: ["Feid, Brray"],
        path: "/local_music/Te Colaboro.mp3",
        image: "/local_music/cover/Te Colaboro.jpg",
        lyrics: "/local_music/lyrics/Te Colaboro.lrc",
    },
    {
        id: 60,
        name: "That's What I Like",
        artist: ["Bruno Mars"],
        path: "/local_music/That's What I Like.mp3",
        image: "/local_music/cover/That's What I Like.jpg",
        lyrics: "/local_music/lyrics/That's What I Like.lrc",
    },
    {
        id: 61,
        name: "Tokyo",
        artist: ["Jhayco"],
        path: "/local_music/Tokyo.mp3",
        image: "/local_music/cover/Tokyo.jpg",
        lyrics: "/local_music/lyrics/Tokyo.lrc",
    },
    {
        id: 62,
        name: "Treat You Better",
        artist: ["Shawn Mendes"],
        path: "/local_music/Treat You Better.mp3",
        image: "/local_music/cover/Treat You Better.jpg",
        lyrics: "/local_music/lyrics/Treat You Better.lrc",
    },
    {
        id: 63,
        name: "UN PREVIEW",
        artist: ["Bad Bunny"],
        path: "/local_music/UN PREVIEW.mp3",
        image: "/local_music/cover/UN PREVIEW.jpg",
        lyrics: "/local_music/lyrics/UN PREVIEW.lrc",
    },
    {
        id: 64,
        name: "Un Ratito",
        artist: ["Bad Bunny"],
        path: "/local_music/Un Ratito.mp3",
        image: "/local_music/cover/Un Ratito.jpg",
        lyrics: "/local_music/lyrics/Un Ratito.lrc",
    },
    {
        id: 65,
        name: "We Don't Talk Anymore (feat. Selena Gomez)",
        artist: ["Charlie Puth, Selena Gomez"],
        path: "/local_music/We Don't Talk Anymore (feat. Selena Gomez).mp3",
        image: "/local_music/cover/We Don't Talk Anymore (feat. Selena Gomez).jpg",
        lyrics: "/local_music/lyrics/We Don't Talk Anymore (feat. Selena Gomez).lrc",
    },
    {
        id: 66,
        name: "Wolf in Sheep's Clothing (feat. William Beckett)",
        artist: ["Set it Off"],
        path: "/local_music/Wolf in Sheep's Clothing (feat. William Beckett).mp3",
        image: "/local_music/cover/Wolf in Sheep's Clothing (feat. William Beckett).jpg",
        lyrics: "/local_music/lyrics/Wolf in Sheep's Clothing (feat. William Beckett).lrc",
    },
    {
        id: 67,
        name: "WYA REMIX RED",
        artist: ["J Abdiel, De La Rose, Yan Block, iZaak, Jay Wheeler"],
        path: "/local_music/WYA REMIX RED.mp3",
        image: "/local_music/cover/WYA REMIX RED.jpg",
        lyrics: "/local_music/lyrics/WYA REMIX RED.lrc",
    },
    {
        id: 68,
        name: "WYA",
        artist: ["J Abdiel, iZaak"],
        path: "/local_music/WYA.mp3",
        image: "/local_music/cover/WYA.jpg",
        lyrics: "/local_music/lyrics/WYA.lrc",
    },
];




