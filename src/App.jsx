import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import QuoteGenerator from './pages/QuoteGenerator'

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote-generator" element={<QuoteGenerator />} />
      </Routes>
    </>
  )
}

export default App