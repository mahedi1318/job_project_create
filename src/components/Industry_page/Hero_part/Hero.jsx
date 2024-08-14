import React from 'react'
import HeroImg from "../../../assets/images/Background image 1.svg"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const BgImages = {
    backgroundImage: `url(${HeroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
}

const Hero = () => {
  return (
    <>
      <div style={BgImages}>
        <div className='w-full h-[250px] flex items-center'>
            <div className="container text-center">
                <h2 className='font-Poppins text-4xl text-white font-semibold mb-7'>Construction</h2>
                <ul className='flex gap-6 justify-center'>
                    <li><a  className='flex items-center gap-3 text-xl font-Poppins text-white' href="/">Home <MdKeyboardDoubleArrowRight /></a></li>
                    <li><a className='flex items-center gap-3 text-xl font-Poppins text-white' href="/industry">Industry <MdKeyboardDoubleArrowRight /></a></li>
                    <li className=' text-xl font-Poppins text-white'>Construction</li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero
