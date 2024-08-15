import FooterLogo from "../../../assets/images/Logo.svg"
import { FooterQuickData } from "../../../middleware/AllData"
import { MdOutlineArrowRight } from "react-icons/md";
import FooterOurServices from "./FooterOurServices";
import FooterGetInTouch from "./FooterGetInTouch";
import SubFooter from "./SubFooter";

const Footer = () => {
  return (
    <>
    <div className='py-10 bg-[#1d4699] mt-24'>
        <div className='container grid xl:grid-cols-7 mb:grid-cols-1 gap-5'>
            <div className='w-full h-[400px] col-span-2'>
                <div>
                    <img src={FooterLogo} alt="FooterLogo" />
                </div>
                <div className="font-Poppins text-[13px] font-normal mt-5 leading-5 text-white">
                    <p>Hire & Fire is a cutting-edge job website designed to
                    connect employers with top-tier talent across various
                    industries. Utilizing advanced matching algorithms, it
                    streamlines the hiring process, ensuring quick and
                    effective placements. Employers benefit from efficient
                    tools for posting jobs, screening candidates, and
                    managing applications. Ideal for businesses aiming for
                    growth, Hire & Fire is your go-to resource for all
                    recruitment needs. Please note that it operates on an
                    employer basis and does not provide jobs directly to
                    workers.</p>
                    <a href="#">
                        <button className='px-8 py-3 bg-red-500 text-white rounded-lg mt-7'>Contact Us</button>
                    </a>
                </div>
            </div>
            <div className='w-full h-[400px]'>
                <h3 className="font-Poppins text-xl font-medium text-white">Quick Links</h3>
                <div className="w-[115px] h-[1px] bg-white mt-1"></div>
                <div className="mt-8">
                    <ul className="text-white">
                        {FooterQuickData?.map((quickLink)=>(
                            <li key={quickLink.id} className="mb-6"><a className="flex items-center font-Poppins text-[15px]" href="#"><MdOutlineArrowRight className="text-[22px]" /> {quickLink.name}</a></li>  
                        ))}
                                             
                    </ul>
                </div>
            </div>
            <div className='w-full h-[400px] col-span-2'>
                <FooterOurServices/>
            </div>
            <div className='w-full h-[400px] col-span-2'>
                <FooterGetInTouch/>
            </div>
            <div >
                <SubFooter/>
            </div>
        </div>
    </div>   
    </>
  )
}

export default Footer
