/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

function RenderMovies({ movies }) {
    return (
        <ul className="movies">
            {
                movies.map(({id, poster, year, title} = movie) => (
                    <li className="movie" key={id}>
                        <img src={poster} alt={title} className="image" />
                        <h3>{title}</h3>
                        <p>{year}</p>
                    </li>
                ))
            }
        </ul>
    )
}

function RenderError() {

    return (
        <div>
            <h3>No se encontraron resultados</h3>
        </div>)
}

export function Movies({ movies }) {
    const hasMovies = movies?.length > 0;

    return (
        hasMovies
            ? <RenderMovies movies={movies} />
            : <RenderError />

    )
}