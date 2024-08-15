import { MdOutlineArrowRight } from "react-icons/md";
import { ServiceData } from "../../../middleware/AllData";

const Service = () => {
  return (
    <>
    <div className='mt-24'>
        <div className='container'>
            <div className='text-center'>
                <h2 className="font-Poppins text-[40px] font-semibold leading-tight">Roles We Fill</h2>
                <p className="font-Poppins xl:text-[15px] mb:text-[13px] font-normal mt-5 leading-6 xl:w-[640px] mb:w-[277px] m-auto">"We fill roles in construction, matching skilled professional like engineers, supervisor, and
                laborers to projects requiring and efficiency."</p>
            </div>
            <div className='grid xl:grid-cols-4 mb:grid-cols-1 gap-6 text-center mt-8 '>
                {ServiceData?.map((item)=>(
                    <div key={item.id} className='p-4 pb-6 bg-[#f7f7f7] rounded-lg drop-shadow-md mb-6'>
                        <div className='w-full h-[176px]'>
                            <img src={item.image} alt="" />
                        </div>
                        <div className="">
                            <h4 className="font-Poppins text-[20px] font-medium mt-5">{item.title}</h4>
                            <p className="font-Poppins text-[12px] font-normal mt-3 leading-5">"{item.des}"</p>
                            <div className="mt-5 flex justify-center">
                                <a className="font-Poppins text-[13px] font-normal flex items-center text-red-500" href="#">Contact Us <MdOutlineArrowRight className="text-[22px]" /></a>
                            </div>
                        </div>
                    </div>
                ))}  
            </div>
        </div>
    </div>     
    </>
  )
}

export default Service
