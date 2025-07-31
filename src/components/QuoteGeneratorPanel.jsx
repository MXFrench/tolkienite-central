import CharacterDropdown from './CharacterDropdown';
import MovieSelect from './MovieSelect';
import NewQuoteBtn from './NewQuoteBtn';

const QuoteGeneratorPanel = ({ panel, val, setVal }) => {
  if (!panel) return null;

  return (
    <div className="bg-bg-secondary rounded-md p-6 space-y-8">
      {panel === "character" && <CharacterDropdown setVal={setVal} />}
      {panel === "movie" && <MovieSelect setVal={setVal} curVal={val} />}
      {val.length > 0 && <NewQuoteBtn type={panel} id={val} /> }
    </div>
  )
}

export default QuoteGeneratorPanel