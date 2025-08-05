import { movieData } from "../lib/data";


const MovieStats = () => {
  const movies = [...movieData.lotr, ...movieData.hobbit];

  return (
    <section className="overflow-x-auto">
      <table className="table-auto w-full rounded overflow-hidden">
        <thead className="bg-primary text-btn-text">
          <tr className="*:p-2">
            <th className="text-left">Title</th>
            <th>Runtime</th>
            <th>Budget</th>
            <th>Revenue</th>
            <th>Nominations</th>
            <th>Wins</th>
            <th>RT Score</th>
            <th>IMDB Score</th>
            <th>TMDB Score</th>
          </tr>
        </thead>
        
        <tbody>
          {movies?.map(movie => (
            <tr key={movie?._id} className="*:p-2 border-b even:bg-black/5">
              <td>{movie?.name}</td>
              <td className="text-center">{movie?.runtimeInMinutes} min</td>
              <td className="text-center">{movie?.budgetInMillions} M</td>
              <td className="text-center">{movie?.boxOfficeRevenueInMillions} M</td>
              <td className="text-center">{movie?.academyAwardNominations}</td>
              <td className="text-center">{movie?.academyAwardWins}</td>
              <td className="text-center">{movie?.rottenTomatoesScore} %</td>
              <td className="text-center">{movie?.imdbScore}/10</td>
              <td className="text-center">{movie?.tmdbScore} %</td>
            </tr>
          ))}
        </tbody>

      </table>
    </section>
  )
}

export default MovieStats