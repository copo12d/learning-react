import withResult from '../mocks/Json-results.json'

export function useMovies() {
  const movies = withResult.Search 

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    type: movie.Type,
    poster: movie.Poster
  }))

  return { movies: mappedMovies }
}
