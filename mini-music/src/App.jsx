import { useMemo, useState } from 'react'
import SearchBar from './components/SearchBar'
import SongCard from './components/SongCard'
import LikedSongs from './components/LikedSongs'
import { useFetchSongs } from './hooks/useFetchSongs'


export default function App() {
const { loading, error, results, searchSongs } = useFetchSongs()
const [liked, setLiked] = useState([])


const likedIds = useMemo(() => new Set(liked.map(s => s.trackId)), [liked])


const handleLike = (song) => {
if (!song || likedIds.has(song.trackId)) return
setLiked((prev) => [...prev, song])
}


const handleDelete = (id) => {
setLiked((prev) => prev.filter(s => s.trackId !== id))
}


return (
<div className="container">
<header>
<h1 className="brand">MiniMusic</h1>
<SearchBar onSearch={searchSongs} disabled={loading} />
</header>


{error && <div className="error">{error}</div>}


<section className="section">
<h2>Resultados</h2>
{loading ? (
<div className="empty">Cargando…</div>
) : results.length === 0 ? (
<div className="empty">Sin resultados. Prueba otra búsqueda.</div>
) : (
<div className="grid">
{results.map((song) => (
<SongCard
key={song.trackId}
song={song}
onLike={handleLike}
inLiked={likedIds.has(song.trackId)}
/>
))}
</div>
)}
</section>


<LikedSongs items={liked} onDelete={handleDelete} />


<footer>Datos: iTunes Search API</footer>
</div>
)
}