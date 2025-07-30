import { useState } from "react";
import QuoteGeneratorPanel from "../components/QuoteGeneratorPanel";
import useFetchData from "../hooks/useFetchData";
import useLocalCharData from "../hooks/useLocalCharData";
import { getMovieNameById, getCharacterNameById, getRandomQuotePath } from "../lib/lib";


const QuoteGenerator = () => {
  const [panel, setPanel] = useState(false);

  const path = getRandomQuotePath();
  const [isLoading, data, resetData] = useFetchData(path);
  const { characterDocs, loadingDocs } = useLocalCharData();

  const quote = !isLoading ? data?.docs[0]?.dialog : null;
  const characterId = !isLoading ? data?.docs[0]?.character : null;
  const character = !isLoading || !loadingDocs ? getCharacterNameById(characterId, characterDocs) : null;
  const movieId = !isLoading ? data?.docs[0]?.movie : null;
  const movie = !isLoading ? getMovieNameById(movieId) : null;

  function newRandom () {
    resetData();
    setPanel(false);
  }

  function updateQuote (type, val) {
    // resetData("/path to use with type: character/movie, and val, the id of the movie or character")
    console.log(type, val);
    // resetData()
  }

  function togglePanel (panelType) {
    setPanel(prev => {
      if (prev === panelType) return false;
      return panelType;
    });
  }

  return (
    <section className="w-auto-md mx-auto py-8 min-h-screen grid place-content-center gap-4 sm:gap-8">

      <section className="flex flex-col items-center gap-8 px-4 py-8 rounded-lg">
        {isLoading ? (
          <p className="text-2xl italic animate-pulse">Loading quote...</p>
        ) : (
          <h2 className="text-xl xs:text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl text-balance text-center italic md:font-light leading-snug">{quote}</h2>
        )}
        <p className="text-lg md:text-2xl font-bold text-text-lighter/50">
          <a href="#">{character}</a>, <a href="#">{movie}</a>
          {/* Later, link to character wiki pages and movie title and page */}
        </p>
      </section>

      <section className="grid sm:grid-cols-3 gap-4">
        <button className="btn bg-btn-primary text-btn-text" onClick={newRandom}>Get Random Quote</button>
        <button className="btn bg-btn-primary text-btn-text" onClick={() => togglePanel("character")}>Get Quote By Character</button>
        <button className="btn bg-btn-primary text-btn-text" onClick={() => togglePanel("movie")}>Get Quote By Movie</button>
      </section>

      <QuoteGeneratorPanel panel={panel} onSubmit={updateQuote} />

    </section>
  )
}

export default QuoteGenerator