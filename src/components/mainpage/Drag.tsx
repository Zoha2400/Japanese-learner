import saitama from '../../img/saitama.png'
import { Parallax } from 'react-scroll-parallax'

function Drag() {

  // const containerStyle = {
  //   background: 'radial-gradient(circle, rgb(180, 30, 206),rgb(126, 34, 206))',
  // };

  return (
    <div className="w-full h-48 sm:h-96 overflow-hidden flex items-center relative bg-gray-800">
        <div className="bg z-0 w-56 h-56 bottom-0 left-0 lg:left-20 absolute">
          <img src={saitama} className='w-36 h-auto absolute -bottom-3'/>
          <div className="text-saitama rounded-3xl shadow-slate-700 shadow-md w-auto absolute bottom-32 left-32 text-xs h-auto p-2 break-words bg-white ">Добро пожаловать</div>
        </div>
        <h1 className='absolute z-0 text-white text-4xl xl:text-9xl sm:text-6xl lg:text-7xl font-bold flex justify-center items-center w-full'>Toky<span className='text-red-600'>o</span>Talk</h1>
    </div>
  )
}

export default Drag