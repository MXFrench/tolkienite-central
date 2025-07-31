import { useState } from "react";
import QuoteGeneratorPanel from "../components/QuoteGeneratorPanel";
import Quote from "../components/Quote";
import QuoteProvider from "../hooks/QuoteContext";
import NewQuoteBtn from "../components/NewQuoteBtn";

const QuoteGenerator = () => {
  const [panel, setPanel] = useState(false);
  const [val, setVal] = useState("");

  function togglePanel (panelType) {
    setPanel(prev => prev === panelType ? false : panelType);
  }

  return (
    <QuoteProvider>
      <section className="w-auto-md mx-auto py-8 min-h-screen grid place-content-center gap-4 sm:gap-8">

        <Quote />

        <section className="grid sm:grid-cols-3 gap-4">
          <NewQuoteBtn />
          <button className="btn bg-btn-primary text-btn-text" onClick={() => togglePanel("character")}>Get Quote By Character</button>
          <button className="btn bg-btn-primary text-btn-text" onClick={() => togglePanel("movie")}>Get Quote By Movie</button>
        </section>

        <QuoteGeneratorPanel panel={panel} val={val} setVal={setVal} />

      </section>
    </QuoteProvider>
  )
}

export default QuoteGenerator