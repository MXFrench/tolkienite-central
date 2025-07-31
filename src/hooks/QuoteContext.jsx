import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "./useFetch";
import { API_BASE_URL } from "../lib/constants";
import { randArr } from "../lib/utilities";

const apiKey = import.meta.env.VITE_API_KEY;
const options = { headers: { "Authorization": `Bearer ${apiKey}` } };
const apiUrl = API_BASE_URL + "/quote";

const QuoteContext = createContext();
const ResetQuoteContext = createContext();

export function useQuote() {
  return useContext(QuoteContext);
}

export function useResetQuote() {
  return useContext(ResetQuoteContext);
}

export default function QuoteProvider({ children }) {
  const [quote, setQuote] = useState();
  const [docs, setDocs] = useState();

  const { loading, error, value } = useFetch(apiUrl, options);

  const resetQuote = (type, id) => {
    if (!docs) return;
    const filteredDocs = !type ? docs : docs.filter(doc => doc[type] === id);
    setQuote(randArr(filteredDocs));
  };

  useEffect(() => {
    if (value) setDocs(value.docs);
    resetQuote();
  }, [value]);

  return (
    <QuoteContext.Provider value={[quote, loading, error]}>
      <ResetQuoteContext.Provider value={resetQuote}>
        { children }
      </ResetQuoteContext.Provider>
    </QuoteContext.Provider>
  )
}