import LogoImg from "../../../assets/images/Logo.svg"
import FlagImg from "../../../assets/images/UsFlag.jpg"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { NavbarData } from '../../../middleware/AllData';
import { FaBars } from "react-icons/fa6";
import { Link,} from 'react-router-dom';
import ResponsiveMenu from "./ResponsiveMenu";
import { useState } from "react";

const Navbar = () => {

    let [showMenu, setShowMenu] = useState(false) 

    let toggleMenu = ()=>{
        setShowMenu(!showMenu)
    }

  return (
    <>
      <div className='py-3'>
        <div className='container flex justify-between items-center'>
            <div className="logo">
                <img src={LogoImg} alt="LogoImg" />
            </div>
            <div className="xl:flex items-center gap-14 mb:hidden">
                <div>
                    <ul className='flex gap-14 font-Poppins text-[17px] font-medium items-center'>
                        {NavbarData?.map((link)=>(
                            <li key={link.id}><Link className="hover:text-red-500 transition-all duration-300" to={link.link}>{link.name}</Link></li>                            
                        ))}                       
                    </ul>
                </div>
                <div className='flex items-center gap-16'>
                    <Link to="/contact">
                        <button className='px-8 py-3 bg-blue-900 text-white rounded-lg'>Contact</button>
                    </Link>
                    <ul>
                        <li className='flex items-center gap-1 text-[24px]'>                            
                            <div className='w-8 h-8 rounded-full'>
                                <img className='rounded-full w-full h-full bg-cover' src={FlagImg} alt="" />      
                            </div>
                            <MdOutlineKeyboardArrowDown />                    
                        </li> 
                    </ul>
                </div>                
            </div>   
            {/* Responsive devise */}
            <div className='lg:hidden'>
                <FaBars onClick={toggleMenu} className='text-4xl' />
            </div>
        </div>
        {/* mobile responsive menu  */}
        <div>
            <ResponsiveMenu showMenu={showMenu}/>
        </div>
      </div>
    </>
  )
}

export default Navbar
