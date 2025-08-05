import { useEffect, useMemo, useState } from "react";
import useFetch from "../hooks/useFetch"
import { API_BASE_URL } from "../lib/constants";
import useLocalStorage from "../hooks/useLocalStorage";
import { randArr, shuffleArr } from "../lib/utilities";
import useLocalCharData from "../hooks/useLocalCharData";
import { getCharacterNameById, getDocById, randomDoc } from "../lib/lib";
import LoadingScreen from "../components/LoadingScreen";
import ErrorScreen from "../components/ErrorScreen";
import GameQuote from "../components/GameQuote";
import GameBtns from "../components/GameBtns";
import GameStats from "../components/GameStats";
import Modal from "../components/Modal";

const apiKey = import.meta.env.VITE_API_KEY;
const options = { headers: { "Authorization": `Bearer ${apiKey}` } };
const apiUrl = API_BASE_URL + "/quote";

const WhoSaidIt = () => {
  const { loading, error, value } = useFetch(apiUrl, options);
  const [quoteInPlay, setQuoteInPlay] = useState();
  const [history, setHistory] = useLocalStorage("gameHistory", []);
  const { characterDocs, loadingDocs } = useLocalCharData();
  const [multipleChoice, setMultipleChoice] = useState();
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  
  function countCorrect () {
    if (!history) return;
    const correctGuessDocs = history.filter(q => q.correct);
    return correctGuessDocs.length;
  }

  const stats = useMemo(() => {
    const correctlyGuessed = countCorrect();
    const totalGuesses = history?.length;
    const currentScore = totalGuesses === 0 ? 0 : Math.round((correctlyGuessed / totalGuesses) * 100);
    return { correctlyGuessed, totalGuesses, currentScore }
  }, [history]);

  function loadRandomQuote() {
    // Pick random quote from value docs, excluding any quote already stored in history
    const usedQuoteIds = history?.map(q => q._id);
    const unusedQuotes = value?.docs.filter(doc => !usedQuoteIds.includes(doc._id));
    const randQuote = randArr(unusedQuotes);
    setQuoteInPlay(randQuote);
    // Choose random characters
    const actualChar = getDocById(characterDocs, randQuote?.character);
    const randChar1 = randomDoc(characterDocs, [randQuote?._id]);
    const randChar2 = randomDoc(characterDocs, [randQuote?._id, randChar1?._id]);
    const choices = shuffleArr([actualChar, randChar1, randChar2]);
    setMultipleChoice(choices);
  }

  function loadAnswer(charId) {
    const isCorrect = (charId === quoteInPlay.character);
    setMultipleChoice(null);
    if (isCorrect) {
      setMessage("That is correct!");
    } else {
      setMessage("Incorrect. The answer was " + getCharacterNameById(quoteInPlay.character, characterDocs));
    }

    setTimeout(() => {
      setHistory(prev => [...prev, {...quoteInPlay, correct: isCorrect}]);
      loadRandomQuote();
    }, 2000);
  }

  function resetGame() {
    setHistory([]);
    loadRandomQuote();
    console.log("Resetting game...");
  }

  useEffect(() => {
    if (!value) return;
    if (!quoteInPlay) loadRandomQuote();
  }, [value]);

  if (loading || loadingDocs) return <LoadingScreen message="Loading game..." />

  if (error) return <ErrorScreen />

  return (<>
    <section className="w-auto-xl py-16 mx-auto grid gap-8 md:gap-16 min-h-screen content-center">
      <GameQuote dialog={quoteInPlay?.dialog} />

      <GameBtns multipleChoice={multipleChoice} message={message} loadAnswer={loadAnswer} />

      <GameStats
        score={stats.currentScore} 
        correctGuesses={stats.correctlyGuessed} 
        totalGuesses={stats.totalGuesses}
        resetGame={resetGame}
        viewHistory={() => setOpen(true)}
      />
    </section>

    {open && (
      <Modal closeModal={() => setOpen(false)} size="md">
        {history?.length > 0 ? (
          <div className="grid gap-4">
            {history?.map((q, i) => (
              <div key={q?._id} className="p-4 rounded border border-primary/50 bg-primary/5">
                <p>Round #{i + 1}: <span className="font-semibold animate-pulse">{q?.correct ? <span className="text-primary">Correct!</span> : <span className="text-red-500">Incorrect</span>}</span></p>
                <h4 className="font-semibold">{q?.dialog}</h4>
                <p className="italic">{getCharacterNameById(q?.character, characterDocs)}</p>
              </div>
            ))}
          </div>
        ) : "Nothing to see here."}
      </Modal>
    )}
  </>)
}

export default WhoSaidIt