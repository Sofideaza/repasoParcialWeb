import UserCard from './UserCard'


export default function UserList({ users, onEdit, onDelete }) {
if (users.length === 0) return <div className="card center">No hay usuarios aún.</div>
return (
<div className="grid">
{users.map(u => (
<UserCard key={u.id} user={u} onEdit={onEdit} onDelete={onDelete} />
))}
</div>
)
}