import { movieData } from "../lib/data";
import MovieCard from "./MovieCard";

const MovieInfo = () => {
  const movies = [...movieData.lotr, ...movieData.hobbit];

  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {movies?.map(movie => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </section>
  )
}

export default MovieInfo