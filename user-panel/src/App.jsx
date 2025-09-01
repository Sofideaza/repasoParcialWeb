import { useMemo, useState } from 'react'
import Stats from './components/Stats'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import { useLocalStorage } from './hooks/useLocalStorage'


export default function App() {
  const [users, setUsers] = useLocalStorage('users', [
    { id: crypto.randomUUID(), name: 'John Doe', email: 'john@example.com', role: 'admin' },
    { id: crypto.randomUUID(), name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
  ])
  
  const [editingId, setEditingId] = useState(null)
  const editing = useMemo(() => users.find(u => u.id === editingId) || null, [users, editingId])
  
  const upsertUser = (payload) => {
    if (editing) {
      setUsers(prev => prev.map(u => u.id === editing.id ? { ...u, ...payload } : u))
      setEditingId(null)
    } else {

  const exists = users.some(u => u.email.toLowerCase() === payload.email.toLowerCase())
  if (exists) {
    alert('El email ya existe en la lista')
    return
  }
  
  const user = { id: crypto.randomUUID(), ...payload }
  setUsers(prev => [user, ...prev])
  }
}

const handleEdit = (id) => setEditingId(id)
const handleDelete = (id) => setUsers(prev => prev.filter(u => u.id !== id))

return (
  <div className="container">
    <Stats users={users} />
    
    <UserForm onSubmit={upsertUser} editing={editing} />
    
    <div className="sep" />
    
    <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
  </div>
  )
}