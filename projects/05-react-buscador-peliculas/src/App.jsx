import './App.css'
import { Movies } from './components/Movie.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'




function App() {  
  const {movies} = useMovies()
  const {query, setQuery, error} = useSearch()
  

  const handleSummit = (event) => {
    event.preventDefault()
    const { value } = Object.fromEntries(new window.FormData(event.target))
  }
  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) {
      return
    }
    setQuery(event.target.value)
  }


  
  return (
   <div className='page'>
    <header>
      <h1>
        Buscador de Películas
      </h1>
    <form className='search-form' onSubmit={handleSummit}>
      <input onChange={handleChange} style={{border: error ? '1px solid red' : 'transparent'}} value={query} type="text" placeholder='Avengers, Stars wars...' />
      <button type='submit'>Buscar</button>
    </form>
    {error && <p style={{color: 'red'}}>{error}</p>}
    </header>

    <main>
      <Movies movies={movies} />
    </main>
   </div>
  )
}

export default App
