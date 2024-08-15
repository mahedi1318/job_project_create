import { IoMdCall } from "react-icons/io";
import { AiTwotoneMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const FooterGetInTouch = () => {
  return (
    <div>
       <h3 className="font-Poppins text-xl font-medium text-white">Get In Touch</h3>
       <p className="font-Poppins text-[15px] font-normal text-white w-[229px] mt-8 leading-6" >Subscribe Our Newsletter to Get Latest Update & News</p>
       <div>
        <form className='text-white flex mt-6' action="">
            <input className='rounded-tl-md font-Poppins rounded-bl-md pl-3 placeholder:font-Poppins placeholder:text-[13px] xl:w-[240px] mb:w-[187px] outline-none text-[#444]' type="text" placeholder='Your Email Here' />
            <button className='font-Poppins text-[13px] font-normal py-3 px-5 bg-red-600 rounded-tr-md rounded-br-md' type='submit'>Subscribe</button>
        </form>        
       </div>
       <div className="mt-10">
        <div className="mb-4">
            <ul className="flex gap-3 font-Poppins text-[13px] font-normal items-center">
                <li className="w-7 h-7 bg-red-500 text-white rounded-full flex justify-center items-center"><IoMdCall /></li>
                <li className="text-white">+40 123 456 789</li>
            </ul>
        </div>  
        <div className="mb-4">
            <ul className="flex gap-3 font-Poppins text-[13px] font-normal items-center">
                <li className="w-7 h-7 bg-red-500 text-white rounded-full flex justify-center items-center"><AiTwotoneMail /></li>
                <li className="text-white">contact@hireandfire.agency</li>
            </ul>
        </div>          
        <div className="mb-4">
            <ul className="flex gap-3 font-Poppins text-[13px] font-normal items-center">
                <li className="w-7 h-7 bg-red-500 text-white rounded-full flex justify-center items-center"><IoLocationOutline /></li>
                <li className="text-white w-[307px]">Strada ING. Zablovschi, Nr. 10, Biroul 1, Sectorul 1,
                Bucuresti, Romania.</li>
            </ul>
        </div>  
       </div>
    </div>
  )
}

export default FooterGetInTouch


