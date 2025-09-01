import WorkoutItem from './WorkoutItem'


export default function WorkoutList({ items, onEdit, onRemove }) {
if (items.length === 0) return <div className="empty">Aún no hay rutinas. Agrega la primera ✨</div>
return (
<div className="grid">
{items.map((it) => (
<WorkoutItem key={it.id} item={it} onEdit={onEdit} onRemove={onRemove} />
))}
</div>
)
}