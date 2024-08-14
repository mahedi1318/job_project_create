import React from 'react'
import LogoImg from "../../../assets/images/Logo.svg"
import FlagImg from "../../../assets/images/UsFlag.jpg"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { NavbarData } from '../../../middleware/AllData';

const Navbar = () => {
  return (
    <>
      <div className='py-3'>
        <div className='container flex justify-between items-center'>
            <div className="logo">
                <img src={LogoImg} alt="LogoImg" />
            </div>
            <div className="flex items-center gap-14">
                <div>
                    <ul className='flex gap-14 font-Poppins text-[17px] font-medium items-center'>
                        {NavbarData?.map((link)=>(
                            <li key={link.id}><a href={link.link}>{link.name}</a></li>                            
                        ))}                       
                    </ul>
                </div>
                <div className='flex items-center gap-16'>
                    <a href="/contact">
                        <button className='px-8 py-3 bg-blue-900 text-white rounded-lg'>Contact</button>
                    </a>
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
        </div>
      </div>
    </>
  )
}

export default Navbar
