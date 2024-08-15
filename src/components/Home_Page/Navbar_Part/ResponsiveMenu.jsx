import { Link } from "react-router-dom"
import { NavbarData } from "../../../middleware/AllData"

const ResponsiveMenu = ({showMenu}) => {
  return (
    <div className='lg:hidden'>
      <div className={`${showMenu ? "left-0" : "left-[-100%]"} fixed top-[93px] left-0 z-[999] bg-[#fff] drop-shadow-md h-screen w-[75%] text-[#444] transition-all duration-500 py-8 px-7`}>
        <ul>
            {NavbarData.map((link)=>(
                <li key={link.id}><Link className="hover:text-red-500 transition-all duration-300 font-Poppins text-[16px] font-medium mb-6 block" to={link.link}>{link.name}</Link></li>
            ))}
        </ul>
        <div>
            <Link to="/contact">
                <button className='px-8 py-3 bg-blue-900 text-white rounded-lg'>Contact</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveMenu
