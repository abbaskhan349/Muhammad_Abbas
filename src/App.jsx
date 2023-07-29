import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className=' bg-slate-100' data-theme = "light"> 
      <Navbar />
      <Home />
    </div>
  )
}

export default App
