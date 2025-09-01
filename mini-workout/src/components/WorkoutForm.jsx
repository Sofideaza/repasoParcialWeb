import { useEffect, useState } from 'react'


const DAYS = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo']


export default function WorkoutForm({ onSubmit, editingItem, onCancelEdit }) {
const [exercise, setExercise] = useState('')
const [sets, setSets] = useState(3)
const [reps, setReps] = useState(10)
const [day, setDay] = useState(DAYS[0])
const [error, setError] = useState(null)


useEffect(() => {
if (editingItem) {
setExercise(editingItem.exercise)
setSets(editingItem.sets)
setReps(editingItem.reps)
setDay(editingItem.day)
}
}, [editingItem])


const reset = () => {
setExercise('')
setSets(3)
setReps(10)
setDay(DAYS[0])
setError(null)
}


const handleSubmit = (e) => {
e.preventDefault()
// Validaciones mínimas
if (!exercise.trim()) return setError('Ingresa un nombre de ejercicio.')
if (Number(sets) < 1) return setError('Los sets deben ser >= 1.')
if (Number(reps) < 1) return setError('Las repeticiones deben ser >= 1.')


onSubmit({ exercise: exercise.trim(), sets: Number(sets), reps: Number(reps), day })
reset()
}


return (
<form className="card" onSubmit={handleSubmit}>
<h2>{editingItem ? 'Editar rutina' : 'Agregar rutina'}</h2>
{error && <div className="error">{error}</div>}
<div className="row">
<div style={{flex:1}}>
<label>Ejercicio</label>
<input value={exercise} onChange={(e)=>setExercise(e.target.value)} placeholder="p. ej. Sentadillas" />
</div>
<div>
<label>Sets</label>
<input type="number" value={sets} onChange={(e)=>setSets(e.target.value)} min={1} />
</div>
<div>
<label>Reps</label>
<input type="number" value={reps} onChange={(e)=>setReps(e.target.value)} min={1} />
</div>
<div style={{width:180}}>
<label>Día</label>
<select value={day} onChange={(e)=>setDay(e.target.value)}>
{DAYS.map(d => <option key={d} value={d}>{d}</option>)}
</select>
</div>
</div>
<div className="row" style={{marginTop:12}}>
    <button className="btn" type="submit">{editingItem ? 'Guardar cambios' : 'Añadir'}</button>
<button className="btn secondary" type="button" onClick={() => {
if (editingItem) onCancelEdit?.()
else reset()
}}>
{editingItem ? 'Cancelar edición' : 'Reset' }
</button>
</div>
<p className="small">Usa inputs controlados y valida campos antes de añadir.</p>
</form>
)
}