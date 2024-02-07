import {AiFillStar,AiOutlineStar} from "react-icons/ai"

function Card({title,about,src,stars,user}:any) {
  return (
    <>
      {/* <div className="flex flex-col items-center justify-center w-80 h-80 bg-hardblack rounded-xl 
      pb-2  shadow-2xl shadow-black/80 hover:shadow-black transition-all">
        <div className=" w-80 h-80 absolute flex justify-center items-center pt-1">
          <div className="w-60 h-12 bg-font/90 flex items-center justify-center rounded-full">
            <p className="text-base font-semibold p-1 text-center text-black">{title}</p>
          </div>
        </div>
        <div className="w-full h-40">
          <div className="absolute mt-[90px] bg-hardblack min-w-fit max-w-[120px] rounded-r-full">
            <p className="px-4 overflow-hidden whitespace-nowrap max-w-[140px]">{about}</p>
          </div>
          <img src={src} alt="" className="p-2 pb-0 w-full rounded-t-2xl"/>
        </div>
        <div className="bg-hardblack w-[304px] h-40 rounded-bl-2xl rounded-br-2xl flex">
          <div className="w-1/2 h-full bg-font/0 flex flex-col justify-center items-center">
            <img className="rounded-full h-12 w-12" src={user.src}/>
            <p className="">{user.name}</p>
          </div>
          <div className="w-1/2 h-full bg-white/0 flex flex-col justify-center items-center">
            <div className="flex items center justify-center text-2xl text-star">
              {stars>=1 ?<AiFillStar/>:<AiOutlineStar/>}
              {stars>=2 ?<AiFillStar/>:<AiOutlineStar/>}
              {stars>=3 ?<AiFillStar/>:<AiOutlineStar/>}
              {stars>=4 ?<AiFillStar/>:<AiOutlineStar/>}
              {stars>=5 ?<AiFillStar/>:<AiOutlineStar/>}
            </div>
            <p></p>
          </div>
        </div>
      </div> */}
      <div>
        
      </div>
    </>
  )
}

export default Card;