import { Navbar } from './components'
import { Home, About, Footer } from './pages'
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App