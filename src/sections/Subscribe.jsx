import { email } from "../assets/icons"
import { Button } from "../components"

const Subscribe = () => {
  return (
    <div className="sm:py-10 sm:px-16 px-6 py-8
    flex justify-between items-center
    max-lg:flex-col bg-black rounded-[20px]"
    id="contact-us">

      <h3 className="sm:text-[40px] text-[32px] leading-none
      max-w-[551px] font-montserrat font-black text-white max-lg:pb-10">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h3>

      <div className="flex flex-col gap-4 max-lg:w-full">
        <div className="lg:w-[349px] h-[42px] sm:h-[48px] 
        flex items-center
        bg-white font-montserrat text-slate-gray
        rounded-[62px]">
            {/* <div className="flex items-center"> */}
                <img src={email} alt="email" 
                className="pl-4"/>
                <input 
                type="text"
                placeholder="Enter your email address"
                className="pl-3 text-[16px] leading-none border-none outline-none"
                />
            {/* </div> */}
        </div>
        <div className="">
            <Button 
            label="Subscribe to Newsletter"
            fullWidth
            backgroundColor="bg-white text-[16px]"
            textColor="text-black"
            className="font-montserrat font-medium h-[42px] sm:h-[48px]"
            />
        </div>
      </div>

    </div>
  )
}

export default Subscribe