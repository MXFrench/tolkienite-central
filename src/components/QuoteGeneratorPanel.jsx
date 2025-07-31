import CharacterDropdown from './CharacterDropdown';
import MovieSelect from './MovieSelect';
import { capitalize } from '../lib/utilities';

const QuoteGeneratorPanel = ({ panel, val, setVal, newQuote }) => {
  if (!panel) return null;

  return (
    <div className="bg-bg-secondary rounded-md p-6">
      {panel === "character" && <CharacterDropdown setVal={setVal} />}
      {panel === "movie" && <MovieSelect setVal={setVal} curVal={val} />}
      {val.length > 0 && (
        <button className='btn bg-btn-primary text-btn-text mt-8' onClick={newQuote}>Get Random {capitalize(panel)} Quote</button>
      )}
    </div>
  )
}

export default QuoteGeneratorPanel