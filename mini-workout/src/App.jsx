import { useMemo, useState } from 'react'
import WorkoutForm from './components/WorkoutForm'
import WorkoutList from './components/WorkoutList'


export default function App() {
const [workouts, setWorkouts] = useState([])
const [editingId, setEditingId] = useState(null)


const editingItem = useMemo(() => workouts.find(w => w.id === editingId) || null, [workouts, editingId])


const addOrUpdate = (payload) => {
if (editingItem) {
setWorkouts(prev => prev.map(w => w.id === editingItem.id ? { ...w, ...payload } : w))
setEditingId(null)
} else {
const id = crypto.randomUUID()
setWorkouts(prev => [...prev, { id, ...payload }])
}
}


const handleEdit = (id) => setEditingId(id)
const handleCancelEdit = () => setEditingId(null)
const handleRemove = (id) => setWorkouts(prev => prev.filter(w => w.id !== id))


return (
<div className="container">
<h1>Mini Workout Planner</h1>


<WorkoutForm onSubmit={addOrUpdate} editingItem={editingItem} onCancelEdit={handleCancelEdit} />


<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:16}}>
<h2>Rutinas</h2>
<div>Total: <strong>{workouts.length}</strong></div>
</div>


<WorkoutList items={workouts} onEdit={handleEdit} onRemove={handleRemove} />
</div>
)
}