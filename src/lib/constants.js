export const PATHS = {
  "home": "/",
  "quoteGenerator": "/quote-generator",
  "characterExplorer": "/character-explorer",
  "movieDashboard": "/movie-dashboard",
  "whoSaidIt": "/who-said-it",
}

export const PAGES = [
  {
    id: 1,
    name: "Quote Generator",
    description: "Get random qutoes by your favorite characters or from your favorite movie!",
    path: PATHS.quoteGenerator,
  },
  {
    id: 2,
    name: "Character Explorer",
    description: "Browse the vast population of Middle Earth to discover new characters or explore old ones.",
    path: PATHS.characterExplorer,
  },
  {
    id: 3,
    name: "Movie Dashboard",
    description: "View all movies and compare stats for The Lord of the Rings trilogy and The Hobbit trilogy.",
    path: PATHS.movieDashboard,
  },
  {
    id: 4,
    name: "Who Said It?",
    description: "Test your Middle Earth knowledge by guessing the character by a random quote.",
    path: PATHS.whoSaidIt,
  },
];