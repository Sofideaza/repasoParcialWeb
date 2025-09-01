export default function UserCard({ user, onEdit, onDelete }) {
    return (
    <div className="card center">
        <h3 style={{margin:0}}>{user.name}</h3>
        <p style={{margin:'6px 0'}}>{user.email}</p>
        <p className="small">Role: <span className="badge">{user.role}</span></p>
        <div className="row" style={{justifyContent:'center', marginTop:10}}>
        <button className="btn secondary" onClick={() => onEdit(user.id)}>Editar</button>
        <button className="btn danger" onClick={() => onDelete(user.id)}>Eliminar</button>
        </div>
    </div>
    )
}