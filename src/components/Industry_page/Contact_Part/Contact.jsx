import ContactImg from "../../../assets/images/Background image 2.svg"
import { IoLocationOutline } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className='mt-24'>
      <div className='container'>
        <div className='w-[900px] m-auto'>
            <div className='flex'>
                <div className='bg-yellow-500 w-2/5 h-[430px] relative'>
                    <img className="w-full h-full object-cover" src={ContactImg} alt="ContactImg" />
                    <div className="absolute top-0 left-0 px-12 py-14">
                        <h3 className="font-Poppins text-2xl font-medium text-white">Contact Us</h3>
                        <p className="font-Poppins text-[13px] font-normal text-white mt-4">Say Someting to start a live chat</p>
                        <div className="mt-7">
                            <div className="mb-6">
                                <ul className="flex gap-4">
                                    <li className="">
                                        <div className="w-9 h-9 bg-[#003366] text-white rounded-md flex justify-center items-center">
                                            <IoLocationOutline />
                                        </div>
                                    </li>
                                    <li>                                        
                                        <h4 className="font-Poppins text-[15px] font-normal text-white">Company Location</h4>
                                        <p className="font-Poppins text-[13px] font-light text-white mt-2 leading-5">Bucureşti Sectorul 1, Strada ING.
                                        ZABLOVSCHI, Nr. 10, BIROUL 1</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-6">
                                <ul className="flex gap-4">
                                    <li className="">
                                        <div className="w-9 h-9 bg-[#003366] text-white rounded-md flex justify-center items-center">
                                            <MdAddCall />
                                        </div>
                                    </li>
                                    <li>
                                        <h4 className="font-Poppins text-[15px] font-normal text-white">Phone Number</h4>
                                        <p className="font-Poppins text-[13px] font-light text-white mt-2 leading-5">+(40) 7372 28622</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="flex gap-4">
                                    <li className="">
                                        <div className="w-9 h-9 bg-[#003366] text-white rounded-md flex justify-center items-center">
                                            <TfiEmail />
                                        </div>
                                    </li>
                                    <li>
                                        <h4 className="font-Poppins text-[15px] font-normal text-white">Email Address</h4>
                                        <p className="font-Poppins text-[13px] font-light text-white mt-2 leading-5">career@hireandfire.eu</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#FFF] drop-shadow-md w-3/5 h-[430px]'>
                <div className="p-9">
                    <ContactForm/>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
