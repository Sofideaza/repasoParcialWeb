import SongCard from './SongCard'


export default function LikedSongs({ items, onDelete }) {
return (
<section className="section">
<h2>Liked Songs</h2>
{items.length === 0 ? (
<div className="empty">Aún no has dado like a ninguna canción.</div>
) : (
<div className="grid">
{items.map((s) => (
<SongCard key={s.trackId} song={s} inLiked onDelete={onDelete} />
))}
</div>
)}
</section>
)
}