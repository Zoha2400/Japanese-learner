import { useState } from "react"

function Header() {

  const [isClicked, setIsClicked] = useState(false);

  function clickDetect() {
    setIsClicked(!isClicked);
  }

  return (
    <div className="flex justify-between w-full mb-4 bg-red-100 header overflow-hidden relative -z-1">
        <h1 onClick={clickDetect} className={`z-10 p-4 text-base text-gray-800 font-bold cursor-pointer transition-all group ease-in-out delay-75 flex items-center justify-center select-text relative  ${ isClicked ? 'w-full sm:w-full md:w-full lg:w-full xl:w-full bg-white' : ' sm:w-2/3 md:w-2/6 lg:w-1/12 xl:w-1/12'}`}>
          <div className={`flex items-center justify-center animation-block absolute top-0 left-0 h-full rounded-e-full group-hover:bg-white -z-10 transition-all delay-200 ease-in-out ${isClicked ? 'w-full' : ' w-0 group-hover:w-full'}`}>
            <div className={`rounded-full animate-pulse w-10 h-10 opacity-0 red-ball group-hover:opacity-100 transition-all delay-200 ease-in-out bg-red-500 ${isClicked ? 'opacity-100' : ''}`}></div>
          </div>
          TokyoTalk
        </h1>
    </div>
  )
}

export default Header