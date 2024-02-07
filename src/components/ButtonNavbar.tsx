
function ButtonNavbar({title,color,url}:any){
  return (
    <a href={url}>
      <button className={'text-center font-medium p-1 px-4 rounded-lg border-font border-2 hover:bg-font hover:text-black hover:font-bold transition-all hover:shadow-md hover:shadow-font'}>
        {title}
      </button>
    </a>
  )
}

export default ButtonNavbar;