export default function Stats({ users }) {
    const total = users.length
    const admins = users.filter(u => u.role === 'admin').length
    return (
    <div className="center" style={{marginBottom:18}}>
        <h1 className="title">Panel de Control</h1>
        <p className="sub">Total Usuarios</p>
        <h2 style={{marginTop:0}}>{total}</h2>
        <p className="sub">Administradores</p>
        <h3 style={{marginTop:0}}>{admins}</h3>
    </div>
    )
}