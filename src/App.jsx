import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import QuoteGenerator from './pages/QuoteGenerator'
import { PATHS } from "./lib/constants"
import CharacterExplorer from './pages/CharacterExplorer'

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={PATHS.home} element={<Home />} />
        <Route path={PATHS.quoteGenerator} element={<QuoteGenerator />} />
        <Route path={PATHS.characterExplorer} element={<CharacterExplorer />} />
      </Routes>
    </>
  )
}

export default App