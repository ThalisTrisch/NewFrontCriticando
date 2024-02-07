function layoutLarge({layout,changeLayout}:any){

  function clicked(){
    console.log("deu certo")
    changeLayout('ln')
  }

  return (
    <>
      {layout=='ln' ?
      <div className="w-[44px] h-[44px] bg-font shadow-font/60 shadow-md rounded-xl flex flex-col justify-between items-center p-2">
        <div className='w-8 h-[6px] bg-smoothblack rounded-md'></div>
        <div className='w-8 h-[6px] bg-smoothblack rounded-md'></div>
        <div className='w-8 h-[6px] bg-smoothblack rounded-md'></div>
      </div>
      :
      <div onClick={clicked} className="w-[44px] h-[44px] bg-hardblack rounded-xl flex flex-col justify-between items-center p-2">
        <div className='w-8 h-[6px] bg-smoothblack rounded-md'></div>
        <div className='w-8 h-[6px] bg-smoothblack rounded-md'></div>
        <div className='w-8 h-[6px] bg-smoothblack rounded-md'></div>
      </div>
      }
    </>
  )
}

export default layoutLarge;