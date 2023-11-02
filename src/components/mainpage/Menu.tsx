
function Menu({isClicked}) {
  return (
    <div className={`w-full absolute bottom-0 z-0 delay-100 bg-red-400 transition-all ease-in-out left-0 ${isClicked ? 'h-screen  pt-14 ' : 'h-0'}`}>
      Menu
    </div>
  )
}


export default Menu;
