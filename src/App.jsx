import Navbar from "./components/Navbar"
import Mainroute from "./routes/Mainroute"

const App = () => {
  return (
    <div className='w-full bg-gray-900 min-h-screen text-white'>
      <Navbar/>
      <Mainroute/>
    </div>
  )
}

export default App
