function layoutLarge({layout,changeLayout}:any) {

  function clicked(){
    console.log("deu certo")
    changeLayout('lg')
  }

  return (
    <>
      {layout=='lg' ?
        <div  className="w-[44px] h-[44px] bg-font shadow-font/60 shadow-md rounded-xl flex justify-center items-center">
          <div className='w-[30px] h-[30px] bg-smoothblack rounded-md'></div>
        </div> 
        :
        <div onClick={clicked} className="w-[44px] h-[44px] bg-hardblack rounded-xl flex justify-center items-center">
          <div className='w-[30px] h-[30px] bg-smoothblack rounded-md'></div>
        </div>
      }
    </>
  )
}

export default layoutLarge;