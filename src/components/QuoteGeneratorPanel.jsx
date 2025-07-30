import React, { useState } from 'react'
import CharacterDropdown from './CharacterDropdown';
import MovieSelect from './MovieSelect';
import { capitalize } from '../lib/utilities';

const QuoteGeneratorPanel = ({ panel, onSubmit }) => {
  const [value, setValue] = useState("");

  function handleClick () {
    onSubmit(panel, value);
  }

  if (!panel) return null;

  return (
    <div className="bg-bg-secondary rounded-md p-6">
      {panel === "character" && <CharacterDropdown setVal={setValue} />}
      {panel === "movie" && <MovieSelect setVal={setValue} curVal={value} />}
      {value.length > 0 && (
        <button className='btn bg-btn-primary text-btn-text mt-8' onClick={handleClick}>Get Random {capitalize(panel)} Quote</button>
      )}
    </div>
  )
}

export default QuoteGeneratorPanel