import MovieCard from "../components/MovieCard";
import { movieData } from "../lib/data"

const MovieDashboard = () => {
  const movies = [...movieData.lotr, ...movieData.hobbit];

  return (
    <section className="w-auto-md mx-auto py-24">
      <h1 className='text-4xl font-bold'>Movie Dashboard</h1>
      <p className='text-2xl font-thin'>Explore stats on all the Middle Earth movies.</p>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 mt-16 gap-8">
        {movies?.map(movie => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </section>
    </section>
  )
}

export default MovieDashboard