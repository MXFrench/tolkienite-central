import { useState } from "react";
import MovieInfo from "../components/MovieInfo";
import MovieStats from "../components/MovieStats";

const MovieDashboard = () => {
  const [view, setView] = useState("info");

  return (
    <section className="w-auto-md mx-auto py-24">
      <div className="flex justify-between gap-8 max-sm:flex-col mb-16">
        <div>
          <h1 className='text-4xl font-bold'>Movie Dashboard</h1>
          <p className='text-2xl font-thin'>Explore stats on all the Middle Earth movies.</p>
        </div>

        <div className="flex items-center divide-x divide-primary rounded border border-primary sm:self-center overflow-hidden">
          <button type="button" className={`flex-1/2 py-1 px-2 cursor-pointer hover:bg-primary hover:text-btn-text transition ${view === "info" && "bg-primary/95 text-btn-text"}`}
            onClick={() => setView("info")}
          >Info</button>
          <button type="button" className={`flex-1/2 py-1 px-2 cursor-pointer hover:bg-primary hover:text-btn-text transition ${view === "stats" && "bg-primary/95 text-btn-text"}`}
            onClick={() => setView("stats")}
          >Stats</button>
        </div>
      </div>

      {view === "info" && <MovieInfo />}

      {view === "stats" && <MovieStats />}

    </section>
  )
}

export default MovieDashboard