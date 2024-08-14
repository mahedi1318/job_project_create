import { FooterServiceData } from "../../../middleware/AllData"
import { MdOutlineArrowRight } from "react-icons/md";

const FooterOurServices = () => {
  return (
    <div>
        <h3 className="font-Poppins text-xl font-medium text-white">Our Services</h3>
        <div className="w-[130px] h-[1px] bg-white mt-1"></div>
        <div className="mt-8">
            <ul className="text-white">
                {FooterServiceData.map((serviceLink)=>(
                    <li key={serviceLink.id} className="mb-6"><a className="flex items-center font-Poppins text-[15px]" href="#"><MdOutlineArrowRight className="text-[22px]" /> {serviceLink.name}</a></li>  
                ))}
                                             
            </ul>
        </div>
    </div>
  )
}

export default FooterOurServices
