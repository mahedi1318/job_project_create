import React from 'react'

const ContactForm = () => {
  return (
    <>
        <div>
            <div className="">
                <input className='w-full rounded-md border border-t-2 border-[#a0a0a0] pl-5 h-[42px] outline-none' type="text" placeholder='First name'/>
            </div>
            <div className="mt-5">
                <input className='w-full rounded-md border border-[#a0a0a0] pl-5 h-[42px] outline-none' type="email" placeholder='Email'/>
            </div>
            <div className="mt-5">
                <input className='w-full rounded-md border border-t-2 border-[#a0a0a0] pl-5 h-[42px] outline-none' type="phone" placeholder='Phone Number'/>
            </div>
            <div className="mt-5">            
                <textarea className='w-full rounded-md border border-b-2 border-[#a0a0a0] pl-5 pt-3 h-[100px] outline-none' placeholder='Write Your massage'/>       
            </div>
            <div className="mt-5 text-center">            
                <button className='px-6 py-3 bg-[#00264d] text-white rounded-md' type='submit'>Send Massage</button>      
            </div>
        </div>
    </>
  )
}

export default ContactForm
