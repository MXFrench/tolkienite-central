import useFetchData from "../hooks/useFetchData";
import useLocalCharData from "../hooks/useLocalCharData";
import { getNameById, getRandomQuotePath } from "../lib/lib";


const QuoteGenerator = () => {
  const { characterDocs, loadingDocs } = useLocalCharData();
  const path = getRandomQuotePath();
  const [isLoading, data] = useFetchData(path);

  const quote = !isLoading ? data?.docs[0]?.dialog : null;
  const characterId = !isLoading ? data?.docs[0]?.character : null;
  const character = !isLoading && !loadingDocs ? getNameById(characterId, characterDocs) : null;

  return (
    <section className="w-auto-md mx-auto py-8 min-h-screen grid place-content-center gap-4 sm:gap-8">

      <section className="flex flex-col items-center gap-8 px-4 py-8 rounded-lg">
        <h2 className="text-xl xs:text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl text-balance text-center italic md:font-light leading-snug">
          {isLoading ? "Generating random quote..." : quote}
        </h2>
        <p className="text-lg md:text-2xl font-bold text-text-lighter/50">
          <a href="#">{character}</a>, <a href="#">movie</a>
        </p>
      </section>

      <section className="grid sm:grid-cols-3 gap-4">
        <button className="btn bg-btn-primary text-btn-text">Get Random Quote</button>
        <button className="btn bg-btn-primary text-btn-text">Get Quote By Character</button>
        <button className="btn bg-btn-primary text-btn-text">Get Quote By Movie</button>
      </section>
    </section>
  )
}

export default QuoteGenerator