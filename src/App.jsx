import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import QuoteGenerator from './pages/QuoteGenerator'
import { PATHS } from "./lib/constants"

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={PATHS.home} element={<Home />} />
        <Route path={PATHS.quoteGenerator} element={<QuoteGenerator />} />
      </Routes>
    </>
  )
}

export default App