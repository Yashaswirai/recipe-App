import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Create from "../pages/Create"
import Recepies from "../pages/Recepies"
import About from "../pages/About"
import SingleRecipe from "../pages/SingleRecipe"
import NoPageFound from "../pages/NoPageFound"

const Mainroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/Recepies" element={<Recepies />} />
      <Route path="/Recepies/details/:id" element={<SingleRecipe />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<NoPageFound />} />
    </Routes>
  )
}

export default Mainroute
