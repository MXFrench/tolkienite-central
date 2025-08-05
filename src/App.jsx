import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import QuoteGenerator from './pages/QuoteGenerator'
import { PATHS } from "./lib/constants"
import CharacterExplorer from './pages/CharacterExplorer'
import MovieDashboard from './pages/MovieDashboard'
import WhoSaidIt from './pages/WhoSaidIt'

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={PATHS.home} element={<Home />} />
        <Route path={PATHS.quoteGenerator} element={<QuoteGenerator />} />
        <Route path={PATHS.characterExplorer} element={<CharacterExplorer />} />
        <Route path={PATHS.movieDashboard} element={<MovieDashboard />} />
        <Route path={PATHS.whoSaidIt} element={<WhoSaidIt />} />
      </Routes>
    </>
  )
}

export default App