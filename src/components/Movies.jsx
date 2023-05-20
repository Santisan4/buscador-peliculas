function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li key={movie.id} className="movie">
            <h3>{movie.title}</h3>
            <p>{movie.type}</p>
            <p>{movie.year}</p>
            <img src={movie.poster} alt="" />
          </li>
        ))
      }
    </ul>
  )
}

function NoMoviesResult () {
  return (
    <p>Busca tu pelicula!</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0 // Evaluamos si hay películas
  return (
    // Si hay películas, mostramos el componente ListOfMovies
    // si no, mostramos el componente NoMoviesResult
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResult />
  )
}
