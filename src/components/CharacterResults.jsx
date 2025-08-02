import { useSearchParams } from 'react-router';
import CharacterCard from './CharacterCard';
import { useEffect, useState } from 'react';
import useFetch from "../hooks/useFetch";
import { API_BASE_URL } from "../lib/constants";
import { searchCharacters } from '../lib/lib';

const apiKey = import.meta.env.VITE_API_KEY;
const options = { headers: { "Authorization": `Bearer ${apiKey}` } };
const apiUrl = API_BASE_URL + "/character";

const CharacterResults = () => {
  const [searchParams] = useSearchParams();
  const [characters, setCharacters] = useState();
  
  const { loading, error, value } = useFetch(apiUrl, options);

  useEffect(() => {
    if (!value) return;

    const searchBy = searchParams.get("searchBy");
    const searchVal = searchParams.get("value");

    if (!searchBy && !searchVal) {
      setCharacters(value.docs);
      return;
    } else {
      setCharacters(searchCharacters(value.docs, searchBy, searchVal));
    }
  }, [searchParams, value]);

  return (<>
    <h2 className='text-3xl'>{searchParams.get("searchBy") ? "Results" : "All Characters"}</h2>
    <section className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>{error ? <div>Error</div> : (
          <>{characters?.length === 0 ? <div>No characters found for that query</div> : characters?.map(character => <CharacterCard key={character._id} info={character} />)}</>
        )}</>
      )}
    </section>
  </>)
}

export default CharacterResults