import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='px-8' data-theme = "black"> 
      <Navbar />
      <Home />
    </div>
  )
}

export default App
