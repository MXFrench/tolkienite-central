import { useEffect } from "react";
import { movieData } from "../lib/data"

const MovieSelect = ({ setVal, curVal }) => {
  const { lotr } = movieData;
  
  useEffect(() => {
    setVal("");
  }, []);
  
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {lotr.map(({_id, name}) => (
        <button className={`py-2 px-3 rounded-full border border-text cursor-pointer transition hover:bg-text/5
          ${curVal === _id && "bg-text text-bg-secondary hover:bg-text/85"}`}
        key={_id}
        onClick={() => setVal(_id)}>
          {name}</button>
      ))}
    </div>
  )
}

export default MovieSelect