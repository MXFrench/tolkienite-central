import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App