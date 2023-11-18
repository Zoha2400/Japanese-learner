import fubugi from '../../img/fubuki.mp4'


function Taps({tap}) {
  return (
    <div className="w-auto h-40 rounded-xl relative flex justify-center items-center relative overflow-hidden group transition-all">
        <p className="text-white font-bold">{tap.input}</p>

        {/* <div className="airing absolute w-full h-full bg-gray-400 opacity-30">
      
        </div> */}

        <div className="my-blur absolute -z-10 w-full h-full group-hover bg-gray-900 opacity-40 transition-all "></div>
        <img src={tap.img} alt="" className={`absolute ${tap.rotate} -z-20 group-hover:scale-75 transition-all`}/>
    </div>
  )
}

export default Taps