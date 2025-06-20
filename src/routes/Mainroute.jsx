import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Create from "../pages/Create"
import Recepies from "../pages/Recepies"
import About from "../pages/About"

const Mainroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/Recepies" element={<Recepies />} />
      <Route path="/About" element={<About />} />
    </Routes>
  )
}

export default Mainroute
