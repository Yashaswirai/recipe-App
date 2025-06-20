import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <div className='w-full h-16 bg-gray-600 flex justify-center gap-x-15 py-4 text-xl'>
      <NavLink to={"/"} className={(e)=> e.isActive ? "text-white" : "text-gray-400"}>Home</NavLink>
      <NavLink to={"/Create"} className={(e)=> e.isActive ? "text-white" : "text-gray-400"}>Create</NavLink>
      <NavLink to={"/Recepies"} className={(e)=> e.isActive ? "text-white" : "text-gray-400"}>Recepies</NavLink>
      <NavLink to={"/About"} className={(e)=> e.isActive ? "text-white" : "text-gray-400"}>About</NavLink>
    </div>
  )
}

export default Navbar
