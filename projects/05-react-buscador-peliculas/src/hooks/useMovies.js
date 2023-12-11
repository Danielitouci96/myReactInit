import { useMemo, useRef, useState } from "react";
import { searchMovies } from '../services/movies'

//tODO: HACER EL USECALLBACK
export function useMovies({ search, sort }) {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [Error, setError] = useState(false)
    const previewSearch = useRef(search)

    const getMovies = async () => {
        if (search === previewSearch.current) return
        try {
            setLoading(true)
            setError(false)
            const newMovies = await searchMovies({ search })
            previewSearch.current = search
            setMovies(newMovies)
        } catch (error) {
            setError(true)
            throw new Error(error.message)
        } finally {
            setLoading(false)
        }
    }

    const sortMovies = useMemo(() => {
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies
    }, [sort, movies])

    return { movies: sortMovies, loading, getMovies }
}