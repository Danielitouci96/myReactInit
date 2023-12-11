
const REACT_APP_API_KEY = `7bbc587`
export const searchMovies = async ({ search }) => {
    if (search === null) return null
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&s=${search}`)
        const json = await response.json()

        const movies = json.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            poster: movie.Poster,
            year: movie.Year,
            type: movie.Type,
        }
        ))

    } catch (error) {
        throw new Error('ocurrio un error')
    }

}