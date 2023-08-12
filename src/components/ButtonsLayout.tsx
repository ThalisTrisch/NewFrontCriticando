import { useState } from "react"

function ButtonsLayout() {

  const [layout,setLayout] = useState<String>('sm')

  function changeLayout(layout:String){
    console.log("deu certo")
    setLayout(layout)
  }

  return (
    <div className="flex flex-row gap-4">
      {layout=='xl' ?
        <div onClick={()=> alert('ola')} className="w-[44px] h-[44px] bg-font shadow-font/60 shadow-md rounded-xl flex justify-center items-center">
          <div className='w-[30px] h-[30px] bg-smoothblack rounded-md'></div>
        </div> 
        :
        <div  className="w-[44px] h-[44px] bg-hardblack rounded-xl flex justify-center items-center">
          <div className='w-[30px] h-[30px] bg-smoothblack rounded-md'></div>
        </div>
      }
      {layout=='sm' 
      ? 
      <div className="w-[44px] h-[44px] bg-font shadow-font/60 shadow-md rounded-xl flex justify-center items-center flex-wrap gap-1 p-2">
        <div className='w-3 h-3 bg-smoothblack rounded-sm'></div>
        <div className='w-3 h-3 bg-smoothblack rounded-sm'></div>
        <div className='w-3 h-3 bg-smoothblack rounded-sm'></div>
        <div className='w-3 h-3 bg-smoothblack rounded-sm'></div>
      </div>
      :
      <div className="w-[44px] h-[44px] bg-hardblack rounded-xl flex justify-center items-center flex-wrap gap-1 p-2"
        onClick={()=> changeLayout('sm')}>
        <div className='w-3 h-3 bg-smoothblack rounded-sm'></div>
        <div className='w-3 h-3 bg-smoothblack rounded-sm'></div>
        <div className='w-3 h-3 bg-smoothblack rounded-sm'></div>
        <div className='w-3 h-3 bg-smoothblack rounded-sm'></div>
      </div>
      }
      {layout=='ln' ?
      <div className="w-[44px] h-[44px] bg-font shadow-font/60 shadow-md rounded-xl flex flex-col justify-between items-center p-2">
        <div className='w-8 h-[6px] bg-smoothblack rounded-md'></div>
        <div className='w-8 h-[6px] bg-smoothblack rounded-md'></div>
        <div className='w-8 h-[6px] bg-smoothblack rounded-md'></div>
      </div>
      :
      <div className="w-[44px] h-[44px] bg-hardblack rounded-xl flex flex-col justify-between items-center p-2"
      onClick={() => changeLayout('ln')}>
        <div className='w-8 h-[6px] bg-smoothblack rounded-md'></div>
        <div className='w-8 h-[6px] bg-smoothblack rounded-md'></div>
        <div className='w-8 h-[6px] bg-smoothblack rounded-md'></div>
      </div>
      }
    </div>
  )
}

export default ButtonsLayout;