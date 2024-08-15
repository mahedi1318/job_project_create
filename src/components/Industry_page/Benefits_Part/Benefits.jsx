import IconImg1 from "../../../assets/images/Icon 7.svg"
import { BenefitsData } from "../../../middleware/AllData"

const Benefits = () => {
  return (
    <>
      <div className='mt-24'>
        <div className="container">
            <div className='text-center'>
                <h2 className="font-Poppins xl:text-[40px] mb:text-[30px] font-semibold leading-tight">Benefits of Hiring Through Us</h2>
                <p className="font-Poppins xl:text-[15px] mb:text-[14px] font-normal mt-5 leading-6 xl:w-[640px] mb:w-[282px] m-auto">"Benefit from our efficient hiring process, matching qualified candidates to your construction
                projects, ensuring quality and reliability."</p>
            </div>
            <div className='grid xl:grid-cols-4 mb:grid-cols-1 gap-5 mt-20 '>
              {BenefitsData.map((item)=>(
                <div key={item.id} className='h-[200px] bg-[#fff] drop-shadow-lg rounded-xl border-b-8 border-[#ff1a1a] relative xl:mb-[0px] mb:mb-[80px]'>
                    <div className='w-16 h-16 bg-[#ff1a1a] rounded-full absolute top-[-16%] left-[50%] translate-x-[-50%] flex items-center justify-center'>
                        <img className="text-white" src={item.img} alt="" />
                    </div>
                    <div className='text-center mt-12'>
                        <h3 className='font-Poppins text-[20px] font-medium'>{item.title}</h3>
                        <p className='font-Poppins text-[14px] font-normal mt-4'>{item.details}</p>
                    </div>
                </div>
              ))}   
            </div>
        </div>
      </div>
    </>
  )
}

export default Benefits
