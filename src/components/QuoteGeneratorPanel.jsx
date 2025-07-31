import { IoCloseOutline } from 'react-icons/io5';
import CharacterDropdown from './CharacterDropdown';
import MovieSelect from './MovieSelect';
import NewQuoteBtn from './NewQuoteBtn';

const QuoteGeneratorPanel = ({ panel, setPanel, val, setVal }) => {
  if (!panel) return null;

  return (
    <div className="bg-bg-secondary rounded-md p-6 space-y-8 relative group max-sm:mt-4">
      <button className='group-hover:opacity-100 opacity-0 transition absolute cursor-pointer flex gap-1 items-center text-xs -top-5'
        onClick={() => setPanel(false)}
      ><IoCloseOutline /> Close</button>
      {panel === "character" && <CharacterDropdown setVal={setVal} />}
      {panel === "movie" && <MovieSelect setVal={setVal} curVal={val} />}
      {val.length > 0 && <NewQuoteBtn type={panel} id={val} /> }
    </div>
  )
}

export default QuoteGeneratorPanel