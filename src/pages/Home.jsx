
import { Link } from 'react-router';

export const pages = [
  {
    id: 1,
    name: "Quote Generator",
    description: "Get random qutoes by your favorite characters or from your favorite movie!",
    path: "/quote-generator",
  },
  {
    id: 2,
    name: "Character Explorer",
    description: "Browse the vast population of Middle Earth to discover new characters or explore old ones.",
    path: "/character-explorer",
  },
  {
    id: 3,
    name: "Movie Dashboard",
    description: "View all movies and compare stats for The Lord of the Rings trilogy and The Hobbit trilogy.",
    path: "/movie-dashboard",
  },
  {
    id: 4,
    name: "Who Said It?",
    description: "Test your Middle Earth knowledge by guessing the character by a random quote.",
    path: "/who-said-it",
  },
];

const Home = () => {
  return (
    <div className="grid place-content-center grid-cols-(--container-auto-xl) min-h-screen gap-8 py-8 sm:px-4">
      <h1 className="text-4xl 2xl:text-5xl font-bold tracking-tight">Welcome, Tolkienite!</h1>
      <p className='text-xl 2xl:text-2xl tracking-wide'>
        Journey through Middle-Earth with us and enjoy fun and random content from the Lord of the Rings lore and franchise, powered by <a href="https://the-one-api.dev" target="_blank" className="text-links">the-one-api.dev</a>. Adventure awaits!
      </p>

      <div className="grid sm:grid-cols-2 gap-8">
        {pages.map(({id, name, description, path}) => (
          <div className="bg-bg-secondary p-4 xl:p-8 space-y-4" key={id}>
            <h3 className='text-2xl xl:text-3xl'>{name}</h3>
            <p className='text-lg xl:text-xl italic'>{description}</p>
            <Link to={path} className='text-links'>View page</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home