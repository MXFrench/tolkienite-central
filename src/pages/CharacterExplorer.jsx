import CharacterResults from '../components/CharacterResults';
import CharacterSearch from '../components/CharacterSearch';

const CharacterExplorer = () => {
  return (
    <section className='w-auto-md mx-auto py-24 grid gap-8'>
      <h1 className='text-7xl font-thin text-center'>Character Explorer</h1>
      <CharacterSearch />
      
      <CharacterResults />
    </section>
  )
}

export default CharacterExplorer