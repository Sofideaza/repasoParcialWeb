export default function WorkoutItem({ item, onEdit, onRemove }) {
return (
<div className="card">
<h3 style={{marginTop:0}}>{item.exercise}</h3>
<p><strong>Sets:</strong> {item.sets} · <strong>Reps:</strong> {item.reps} · <strong>Día:</strong> {item.day}</p>
<div className="row">
<button className="btn" onClick={() => onEdit(item.id)}>Editar</button>
<button className="btn danger" onClick={() => onRemove(item.id)}>Eliminar</button>
</div>
</div>
)
}