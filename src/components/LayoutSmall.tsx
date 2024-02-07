function LayoutSmall({layout, changeLayout}:any) {

  function clicked(){
    console.log("deu certo")
    changeLayout('sm')
  }

  return (
    <>
      {layout=='sm' 
      ? 
      <div  className="w-[44px] h-[44px] bg-font shadow-font/60 shadow-md rounded-xl flex justify-center items-center flex-wrap gap-1 p-2">
        <div className='w-3 h-3 bg-smoothblack rounded-sm'></div>
        <div className='w-3 h-3 bg-smoothblack rounded-sm'></div>
        <div className='w-3 h-3 bg-smoothblack rounded-sm'></div>
        <div className='w-3 h-3 bg-smoothblack rounded-sm'></div>
      </div>
      :
      <div onClick={clicked} className="w-[44px] h-[44px] bg-hardblack rounded-xl flex justify-center items-center flex-wrap gap-1 p-2">
        <div className='w-3 h-3 bg-smoothblack rounded-sm'></div>
        <div className='w-3 h-3 bg-smoothblack rounded-sm'></div>
        <div className='w-3 h-3 bg-smoothblack rounded-sm'></div>
        <div className='w-3 h-3 bg-smoothblack rounded-sm'></div>
      </div>
      }
    </>
  )
}

export default LayoutSmall;