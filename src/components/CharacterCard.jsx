import { useEffect, useState } from "react";
import { capitalize } from "../lib/utilities";

const CharacterCard = ({ info }) => {
  
  const [items, setItems] = useState([]);
  useEffect(() => {
    const newItems = [];
    for (let key in info) {
      if (key !== "_id" && key !== "name" && key !== "wikiUrl" && info[key]) {
        const newItem = {
          key: key,
          val: info[key],
        }
        newItems.push(newItem);
      }
    }

    setItems(newItems);
  }, []);

  return (
    <div className='border border-borders bg-bg-secondary rounded-md overflow-hidden p-4 grid gap-4 content-start'>
      <h3 className='text-2xl font-bold text-text-lighter leading-none'>{info.name}</h3>

      <a className="text-sm text-primary italic truncate" target="_blank" href={info.wikiUrl}>{info.wikiUrl}</a>

      {items.map(({key, val}) => (
        <p className='grid grid-cols-[1fr_2fr] gap-2 p-2 bg-primary/5 border border-primary/15 rounded' key={key}>
          <span className="font-bold">{capitalize(key)}:</span>
          {key === "race" || key === "realm" ? (
            <a href="#" className="text-balance text-primary">{val}</a>
          ) : (
            <span className="text-balance">{val}</span>
          )}
        </p>
      ))}
      
    </div>
  )
}

export default CharacterCard