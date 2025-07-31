import { useResetQuote } from '../hooks/QuoteContext'
import { capitalize } from '../lib/utilities';

const NewQuoteBtn = ({ type, id }) => {
  const resetQuote = useResetQuote();
  
  const btnText = !type ? "Get Random Quote" : `Get Random ${capitalize(type)} Quote`;

  return (
    <button className="btn bg-btn-primary text-btn-text" 
      onClick={() => resetQuote(type, id)}
    >{btnText}</button>
  )
}

export default NewQuoteBtn