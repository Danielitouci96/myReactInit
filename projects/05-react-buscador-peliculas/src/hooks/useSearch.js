import { useEffect, useState, useRef } from 'react';

export function useSearch() {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)


    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = search === ''
            return
        }
        if (search === '') {
            setError('el campo busqueda esta vacio')
            return
        }
        if (search.match(/^\d+$/)) {
            setError('no se puede buscar una pelicula de solo numeros')
        }

        setError(null)
    }, [search])

    return { search, updateSearch, error }

}