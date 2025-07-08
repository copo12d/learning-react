function ListOfMovies({ movies }) {
    return (
         <ul>
            {
              movies.map(movie => (
                <li key={movie.imdbID}>
                  <h3>{movie.title}</h3>
                  <h2>{movie.year}</h2>
                  <p>{movie.type}</p>
                  <img src={movie.poster} alt={movie.title} />
                </li>
              ))
            }
          </ul>
    )
}

function NoMoviesResults() {
    return (
        <h2>No se encontraron peliculas</h2>
    )
}

export function Movies({movies}) {
  const hasMovie = movies?.length > 0
  return (
      hasMovie ? <ListOfMovies movies={movies}/> 
      : <NoMoviesResults/>
  )
}