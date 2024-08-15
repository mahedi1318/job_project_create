import { FaFacebookF } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";
import { TbLocation } from "react-icons/tb";

const SubFooter = () => {
  return (
    <>
      <div className='border-t border-white xl:w-[1342px] mb:w-[285px]'>
        <div className='xl:flex mb:block justify-between mt-5 text-white'>
            <div className="xl:mb-0 mb:mb-5"><p className='flex gap-12 font-Poppins text-[13px] font-normal'>© Copyright 2024 “Hire & Fire” All Rights Reserved.</p></div>
            <div className="xl:mb-0 mb:mb-5">
                <ul className='xl:flex mb:block gap-9 font-Poppins text-[14px] font-normal'>                 
                    <li className="xl:mb-0 mb:mb-4">Privacy Policy</li>
                    <li className="xl:mb-0 mb:mb-4">Terms & Conditions</li>
                    <li className="xl:mb-0 mb:mb-4"> Cookie Policy</li>
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
