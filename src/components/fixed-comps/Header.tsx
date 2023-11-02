import { useState } from "react"

function Header(props) {

  return (
    <div className={`flex justify-between w-full h-14 bg-red-100 transition-all ease-in-out delay-100 header overflow-hidden relative z-10 ${props.isClicked ? 'bg-white' : ''}`}>
      <h1 onClick={() => {props.clickDetect(!props.isClicked)}} className={`z-10 p-4 text-base text-gray-800 font-bold cursor-pointer transition-all group ease-in-out delay-100 flex items-center justify-center select-text relative  ${props.isClicked ? 'w-full sm:w-full md:w-full lg:w-full xl:w-full' : ' sm:w-2/3 md:w-1/4 lg:w-1/12 xl:w-1/12'}`}>
        <div className={`flex items-center justify-center animation-block absolute top-0 left-0 h-full rounded-e-full group-hover:bg-white -z-10 transition-all delay-200 ease-in-out ${props.isClicked ? 'w-full' : ' w-0 group-hover:w-full'}`}>
          <div className={`rounded-full animate-pulse w-10 h-10 opacity-0 red-ball group-hover:opacity-100 transition-all delay-200 ease-in-out bg-red-500 ${props.isClicked ? 'opacity-100' : ''}`}></div>
        </div>
        TokyoTalk
      </h1>

      <p onClick={() =>{props.clickDetect(!props.isClicked)}} className={`z-0 text-base  text-gray-800 font-bold cursor-pointer transition-all group ease-in-out delay-200 flex items-center justify-center select-text relative  ${props.isClicked ? 'opacity-0 w-0' : ' sm:w-2/3 md:w-1/4 lg:w-1/12 xl:w-1/12 opacity-100  p-4'}`}> <span className="mr-1 animate-pulse">{'<'}</span> Menu</p>
    </div>
  )
}

export default Header
