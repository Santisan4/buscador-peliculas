import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const firstInputRef = useRef(true)

  useEffect(() => {
    // Validamos que sea el primer intento de busqueda
    if (firstInputRef.current) {
      firstInputRef.current = search === ''
      return
    }

    // Validar que la busqueda no este vacia
    if (search === '') {
      setError('Debes ingresar un texto')
      return
    }

    if (search.length < 3) {
      setError('Debes ingresar al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}
