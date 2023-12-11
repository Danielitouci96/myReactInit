
import { Movies } from './components/Movies.jsx';
import { useMovies } from "./hooks/useMovies.js";
import { useSearch } from "./hooks/useSearch.js";

import './App.css'
import { useState } from 'react';



function App() {
  const [sort, setSort] = useState(false)
  const {search, updateSearch, error} = useSearch()
  const { movies, loading, getMovies } = useMovies({search, sort})


  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies()
    /* const {search} = Object.fromEntries(new window.FormData(event.target))//  ojooo
    console.log(search); */
  }

  const handlerSort = () =>{
    setSort(!sort)
  }
  //TODO: HACER DEBOUNCE DEL SEARCH
  const handlerChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    getMovies({search: newSearch})
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit} className='form'>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            onChange={handlerChange} value={search} name='search' placeholder="Avenger, Star Wars, Cars..." />
          <button type='button' onClick={handlerSort}>{ sort ? 'Ordenado': 'Desordenado' }</button>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>Cargando...</p> :<Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
