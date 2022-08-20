import { quotes } from "../assets"

const FeedbackCard = ({content, name, title, img}) => 
  (
    <div className='flex justify-between flex-col px-4 py-4 rounded-[20px] max-w-[350px] md:mr-10 sm:mr-5 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} alt="double_quotes" className="w-[40.6px] h-[24-6px] object-contain" />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
      {content}
    </p>

      <div className="flex flex-row">
        <img src={img} alt="img"  className="w-[38px] h-[38px] rounded-full"/>
        <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimwhite">{title}</p>
        </div>
      </div>
    </div>
    
  )

export default FeedbackCard