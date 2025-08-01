import { useQuote } from "../hooks/QuoteContext";
import useLocalCharData from "../hooks/useLocalCharData";
import { getCharacterNameById, getMovieNameById } from "../lib/lib";

const Quote = () => {
  const [quote, loading, error] = useQuote();
  const { characterDocs } = useLocalCharData();
  
  const character = getCharacterNameById(quote?.character, characterDocs);
  const movie = getMovieNameById(quote?.movie);
  
  return (
    <section className="grid gap-8 items-center">
      { loading || error ? (
        <p className="text-2xl text-center italic animate-pulse">
          {loading && "Loading..."}
          {error && "Something went wrong. Please try again later."}
        </p>
      ) : (
        <>
          {!quote ? (
            <p className="text-2xl text-center italic">No quote found for that query.</p>
          ) : (
            <>
              <h2 className="text-xl xs:text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl text-balance text-center italic md:font-light leading-snug">{quote?.dialog}</h2>
              <p className="text-center text-lg font-bold text-text-lighter">
                <a href="#">{character}</a>, <a href="#">{movie}</a>
                {/* Later, link to character wiki pages and movie title and page */}
              </p>
          </>
          )}
        </>
      )}
    </section>
  )
}

export default Quote