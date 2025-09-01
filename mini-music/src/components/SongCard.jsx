export default function SongCard({ song, onLike, onDelete, inLiked }) {
const {
trackId,
artworkUrl100,
trackName,
artistName,
} = song


return (
<div className="card">
<img src={artworkUrl100} alt={trackName} />
<div className="content">
<h4 title={trackName}>{trackName}</h4>
<p title={artistName}>{artistName}</p>
{inLiked ? (
<button className="btn like" onClick={() => onDelete(trackId)}>Eliminar</button>
) : (
<button className="btn like" onClick={() => onLike(song)}>Like</button>
)}
</div>
</div>
)
}