import { FaFacebookF } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";
import { TbLocation } from "react-icons/tb";

const SubFooter = () => {
  return (
    <>
      <div className='border-t border-white w-[1342px]'>
        <div className='flex justify-between mt-5 text-white'>
            <div><p className='flex gap-12 font-Poppins text-[13px] font-normal'>© Copyright 2024 “Hire & Fire” All Rights Reserved.</p></div>
            <div>
                <ul className='flex gap-9 font-Poppins text-[14px] font-normal'>                 
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li> Cookie Policy</li>
                </ul>
            </div>
            <div className="flex gap-12 items-center">
                <h5>Follow Us</h5>
                <ul className="flex gap-3">
                  <li className="w-7 h-7 bg-white text-red-500 rounded-full flex justify-center items-center"><FaFacebookF /></li>
                  <li className="w-7 h-7 bg-white text-red-500 rounded-full flex justify-center items-center"><CiInstagram /></li>
                  <li className="w-7 h-7 bg-white text-red-500 rounded-full flex justify-center items-center"><IoLogoTwitter /></li>
                  <li className="w-7 h-7 bg-white text-red-500 rounded-full flex justify-center items-center"><TbLocation /></li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default SubFooter
