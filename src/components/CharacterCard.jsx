import { useEffect, useState } from "react";
import { capitalize } from "../lib/utilities";
import { SEARCHBY } from "./CharacterSearch";
import { useSearchParams } from "react-router";

const CharacterCard = ({ info }) => {
  const [searchParams, setSearchParams] = useSearchParams();
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
        <div className='grid grid-cols-[1fr_2fr] gap-2 max-xs:grid-cols-[1fr_3fr] p-2 bg-primary/5 border border-primary/15 rounded' key={key}>
          <p className="font-bold">{capitalize(key)}:</p>
          {key === "race" || key === "realm" ? (
            <div className="flex gap-2 flex-wrap">
              {val.split(",").map(v => (
                <button className="text-balance text-primary cursor-pointer"
                  onClick={() => setSearchParams({ searchBy: key === "race" ? SEARCHBY.RACE : SEARCHBY.REALM, value: v })}
                >{v}</button>
              ))}
            </div>
          ) : (
            <p className="text-balance">{val}</p>
          )}
        </div>
      ))}
      
    </div>
  )
}

export default CharacterCard