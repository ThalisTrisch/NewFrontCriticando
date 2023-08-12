import {AiFillTrophy} from "react-icons/ai"
import { UserBar } from "./style"
import { useEffect,useState } from 'react';

function Card({name,src,trophy,posts,followers,data}:any) {

  const [Fpercent, setFPercent] = useState(0)
  const [Ppercent, setPPercent] = useState(0)
  const maxpost = data[0].posts
  const max = data[0].followers

  useEffect(()=>{
    setFPercent((100*followers)/max)
    setPPercent((100*posts)/maxpost)
  },[])

  return (
    <>
        <div className="flex flex-row gap-2">
            <div className="w-48 h-12 bg-smothblack rounded-full p-1 flex items-center justify-start">
                <img src={src} alt="" className="w-10 h-10 rounded-full"/>
                <p className="w-full text-center">{name}</p>
            </div>
            <div className='h-12 w-16 flex items-center justify-center'>
              {trophy==1 && <AiFillTrophy className='text-gold text-3xl'></AiFillTrophy>}
              {trophy==2 && <AiFillTrophy className='text-silver text-3xl'></AiFillTrophy>}
              {trophy==3 && <AiFillTrophy className='text-bronze text-3xl'></AiFillTrophy>}
            </div>
            <div className="w-full flex flex-col justify-between">
              <div className="w-full h-5 rounded-full bg-black/0 flex items-center ">
                <UserBar percent={Fpercent} className="bg-lightprimary h-5 flex items-center min-w-[120px] rounded-full">
                  <p className="text-xs pl-6 text-font">{followers} followers</p>
                </UserBar>
              </div>
              <div className="w-full h-5 rounded-full bg-black/0 flex items-center ">
                <UserBar percent={Ppercent} className="bg-font h-5 flex items-center min-w-[120px] rounded-full">
                  <p className="text-xs pl-6 text-lightprimary">{posts} posts</p>
                </UserBar>
              </div>
            </div>
        </div>
    </>
  )
}

export default Card;