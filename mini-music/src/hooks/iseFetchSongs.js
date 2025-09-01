import { useState } from 'react'


export function useFetchSongs() {
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)
const [results, setResults] = useState([])


async function searchSongs(query) {
const q = String(query || '').trim()
if (!q) {
setResults([])
setError(null)
return
}
try {
setLoading(true)
setError(null)
setResults([])
const url = `https://itunes.apple.com/search?term=${encodeURIComponent(q)}&entity=song&limit=12`
const res = await fetch(url)
if (!res.ok) throw new Error(`HTTP ${res.status}`)
const data = await res.json()
setResults(Array.isArray(data.results) ? data.results : [])
} catch (err) {
setError(err.message || 'Error al buscar canciones')
} finally {
setLoading(false)
}
}


return { loading, error, results, searchSongs }
}