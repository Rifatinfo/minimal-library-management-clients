
import { Outlet } from 'react-router'
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './Navbar/Navbar'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Button>Click me</Button>
        <Outlet/>
      </div>
    </>
  )
}

export default App
