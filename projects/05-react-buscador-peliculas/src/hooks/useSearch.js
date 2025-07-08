import { useState, useEffect } from 'react'
export function useSearch(){
  const [query, setQuery] = useState('')
  const [error , setError] = useState(null);
  
  useEffect(() => {
    if (query === '') {
      setError('El campo de búsqueda no puede estar vacío')
      return
    }
    if (query.match(/^\d+$/)) {
      setError('El campo de búsqueda no puede contener solo espacios en blanco')
      return
    }
    if (query.length < 3) {
      setError('El campo de búsqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  },[query])

  return {query, setQuery, error}


}