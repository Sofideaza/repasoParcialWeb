import { useEffect, useState } from 'react'


export default function UserForm({ onSubmit, editing }) {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [role, setRole] = useState('user')
const [error, setError] = useState(null)


useEffect(() => {
if (editing) {
setName(editing.name)
setEmail(editing.email)
setRole(editing.role)
}
}, [editing])


const reset = () => { setName(''); setEmail(''); setRole('user'); setError(null) }


const handleSubmit = (e) => {
e.preventDefault()
// Validaciones simples
if (!name.trim()) return setError('Ingresa un nombre')
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError('Email inválido')


onSubmit({ name: name.trim(), email: email.trim(), role })
if (!editing) reset()
}


return (
<form className="row" onSubmit={handleSubmit} style={{gap:8}}>
<div className="field">
<label>Nombre</label>
<input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Jane Smith" />
</div>
<div className="field">
<label>Email</label>
<input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="jane@example.com" />
</div>
<div style={{width:180}}>
<label>Rol</label>
<select value={role} onChange={(e)=>setRole(e.target.value)}>
<option value="user">Usuario</option>
<option value="admin">Admin</option>
</select>
</div>
<div style={{alignSelf:'end'}}>
<button className="btn primary" type="submit">{editing ? 'Guardar' : 'Agregar Usuario'}</button>
</div>
{editing && (
<div style={{alignSelf:'end'}}>
<button className="btn secondary" type="button" onClick={reset}>Reset</button>
</div>
)}
{error && <div className="error" style={{flexBasis:'100%'}}>{error}</div>}
</form>
)
}