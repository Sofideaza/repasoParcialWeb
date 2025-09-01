import { useState } from 'react'


export default function SearchBar({ onSearch, disabled }) {
const [text, setText] = useState('')


const handleSubmit = (e) => {
e.preventDefault()
onSearch?.(text)
}


return (
<form onSubmit={handleSubmit} className="row" style={{ gap: 12, width:'100%' }}>
<input
className="input"
placeholder="Busca canciones o artistas..."
value={text}
onChange={(e) => setText(e.target.value)}
disabled={disabled}
/>
<button className="btn" disabled={disabled}>Buscar</button>
</form>
)
}