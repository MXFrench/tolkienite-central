import useGetQuote from "../hooks/useGetQuote";
import useLocalCharData from "../hooks/useLocalCharData";
import { getCharacterNameById, getMovieNameById } from "../lib/lib";

const Quote = ({ reset }) => {
  const { loading, error, quote } = useGetQuote(reset);
  const { characterDocs } = useLocalCharData();
  
  const character = getCharacterNameById(quote?.character, characterDocs);
  const movie = getMovieNameById(quote?.movie);
  
  return (
    <section className="grid gap-8 items-center px-4 py-8">
      {error && <div>Something went wrong. Please try again later.</div>}
      {!error && loading ? (
        <p className="text-2xl italic animate-pulse">Loading quote...</p>
      ) : (
        <>
          <h2 className="text-xl xs:text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl text-balance text-center italic md:font-light leading-snug">{quote?.dialog}</h2>
          <p className="text-center text-lg font-bold text-text-lighter/50">
            <a href="#">{character}</a>, <a href="#">{movie}</a>
            {/* Later, link to character wiki pages and movie title and page */}
          </p>
        </>
      )}
    </section>
  )
}

export default Quote