import { IS_DEVELOPMENT } from '../../config'
const API_KEY = IS_DEVELOPMENT ? '15e94cba' : process.env.API_KEY

export const searchMovies = async ({ search }) => {
  // Validamos que el parámetro search no esté vacío
  if (search === '') return

  return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    .then((res) => res.json())
    .then((data) => {
      const movies = data.Search

      return movies?.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        type: movie.Type,
        poster: movie.Poster
      }))
    })
    .catch(_error => {
      throw new Error('Error: movie not found! try with another title')
    })
}
