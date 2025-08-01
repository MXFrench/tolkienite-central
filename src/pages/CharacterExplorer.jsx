import { useState } from 'react'
import CharacterCard from '../components/CharacterCard';
import { mockCharData } from '../lib/data';

const SEARCHBY = {
  NAME: "name",
  RACE: "race",
  REALM: "realm",
}

const CharacterExplorer = () => {
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState(SEARCHBY.NAME);

  return (
    <section className='w-auto-md mx-auto py-24 grid gap-8'>
      <h1 className='text-7xl font-thin text-center'>Character Explorer</h1>
      <div className='grid gap-2'>
        <input type="text"
          className='w-full border-2 border-borders focus:border-primary outline-0 transition hover:bg-bg-secondary/25 rounded-full py-2 px-3'
          placeholder='Search characters'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <div className='flex justify-center gap-8 sm:gap-16'>
          <button className={`hover:text-primary/80 transition cursor-pointer ${searchBy === SEARCHBY.NAME && "text-primary"}`}
            onClick={() => setSearchBy(SEARCHBY.NAME)}
          >Search By Name</button>
          <button className={`hover:text-primary/80 transition cursor-pointer ${searchBy === SEARCHBY.RACE && "text-primary"}`}
            onClick={() => setSearchBy(SEARCHBY.RACE)}
          >Search By Race</button>
          <button className={`hover:text-primary/80 transition cursor-pointer ${searchBy === SEARCHBY.REALM && "text-primary"}`}
            onClick={() => setSearchBy(SEARCHBY.REALM)}
          >Search By Realm</button>
        </div>
      </div>

      <h2 className='text-3xl'>All Characters</h2>
      
      <section className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {mockCharData.map(character => <CharacterCard key={character._id} info={character} />)}
      </section>
    </section>
  )
}

// w-auto-md mx-auto py-8 min-h-screen grid place-content-center gap-4 sm:gap-8

export default CharacterExplorer