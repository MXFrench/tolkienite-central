import { useState } from "react";
import { useNavigate } from "react-router";
import QuoteGeneratorPanel from "../components/QuoteGeneratorPanel";
import Quote from "../components/Quote";
import { PATHS } from "../lib/constants";

const QuoteGenerator = () => {
  const navigate = useNavigate();

  const [panel, setPanel] = useState(false);
  const [val, setVal] = useState("");
  const [reset, setReset] = useState(false);

  function togglePanel (panelType) {
    setPanel(prev => prev === panelType ? false : panelType);
  }

  function newQuote() {
    navigate(`${PATHS.quoteGenerator}?type=${panel}&id=${val}`);
    setReset(prev => !prev);
    setVal("");
    setPanel(false);
  }

  return (
    <section className="w-auto-md mx-auto py-8 min-h-screen grid place-content-center gap-4 sm:gap-8">

      <Quote reset={reset} />

      <section className="grid sm:grid-cols-3 gap-4">
        <button className="btn bg-btn-primary text-btn-text" onClick={newQuote}>Get Random Quote</button>
        <button className="btn bg-btn-primary text-btn-text" onClick={() => togglePanel("character")}>Get Quote By Character</button>
        <button className="btn bg-btn-primary text-btn-text" onClick={() => togglePanel("movie")}>Get Quote By Movie</button>
      </section>

      <QuoteGeneratorPanel panel={panel} val={val} setVal={setVal} newQuote={newQuote} />

    </section>
  )
}

export default QuoteGenerator