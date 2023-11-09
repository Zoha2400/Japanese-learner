import saitama from '../../img/saitama.png'

function Drag() {

  return (
    <div className="w-full h-48 sm:h-96 overflow-hidden flex items-center relative">
        <div className="bg -z-10 w-full h-full bg-purple-700 relative">
          <img src={saitama} className='w-40 h-auto absolute -bottom-3 left-10'/>
          <div className="text-saitama rounded-3xl shadow-slate-700 shadow-md w-auto absolute bottom-32 left-44 text-sm h-auto p-4 break-words bg-white ">Добро пожаловать</div>
        </div>
        <h1 className='absolute z-0 text-white text-9xl font-bold flex justify-center items-center w-full'>Toky<span className='text-red-600'>o</span>Talk</h1>
    </div>
  )
}

export default Drag