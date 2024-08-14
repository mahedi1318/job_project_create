import AboutImg from "../../../assets/images/Image 1.svg"

const About = () => {
  return (
    <>
      <div className="mt-24">
        <div className="container grid grid-cols-2 gap-14">
            <div>
                <h2 className="font-Poppins text-[40px] font-semibold leading-tight">Your Partner in international Construction Recruitment</h2>
                <p className="font-Poppins text-[15px] font-normal mt-5 leading-6">"Hire & Fire job's platform for the construction industry connects companis with skilled profesonals globally. We streamline recruitment processes, ensuring precies matches for 
                    project requirements through our extensive network and isdustry-specific expertise. Our platform offers tailored solution for construction companis, facilitating efficient 
                    hiring and workforce management. partner with us to access a pool of qualified talent and optimize your construction projects with ease."</p>
                <a href="#">
                    <button className='px-6 py-3 bg-blue-900 font-Poppins text-[16px] font-medium text-white rounded-lg mt-6'>Contact Us</button>
                </a>
            </div>
            <div>
                <img src={AboutImg} alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default About
