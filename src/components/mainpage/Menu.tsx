
import jpPh from '../../img/jp.jpg';
import jpPh1 from '../../img/jp2.jpg';
import jpBg from '../../img/bg-jp.svg'


function Menu({isClicked}) {
  return (
    <div className={`w-full absolute bottom-0 z-0 delay-400 transparent transition-all overflow-hidden ease-in-out left-0 ${isClicked ? 'h-screen' : 'h-0'}`}>
        <div className="bg absolute w-full h-full flex justify-between">
          <div className={`bg-side flex justify-center items-center bottom-0 absolute w-full left-0 transition-all delay-400 lg:w-6/12 bg-fuchsia-900 ${isClicked ? 'h-screen' : 'h-0'}`}>
            <img src={jpBg} className='opacity-50 w-4/5' alt="" />
          </div>
          <div className={`bg-side bottom-0 absolute w-0 overflow-hidden right-0 transition-all delay-300 bg-black lg:w-6/12 ${isClicked ? 'h-screen' : 'h-0'}`}>
            <img className='w-0 h-auto absolute bottom-2 right-4 lg:w-3/5' src={jpPh} />
            <img className=' w-full h-full top-14 left-0 absolute lg:w-3/5 lg:top-16 lg:h-auto lg:left-4 ' src={jpPh1} />
          </div>

          <div className="menu-content-wrapper w-full pt-14 z-10 flex justify-center">
              <div className="menu-content w-11/12 flex justify-self-start flex-col items-start p-10 transition-all delay-400">

                  <p className=" text-2xl h-10 z-10 font-extrabold text-white relative cursor-pointer group flex justify-center p-1">
                    Японский язык - это просто
                    <p className="w-full group-hover:top-0  group-hover:left-0 bg-black -z-10 text-zinc-800 transition-all delay-75 absolute top-1.5 left-2.5 p-1">Японский язык - это просто</p>
                  </p>

                  <p className="mt-4 ml-4 text-xl h-10 z-10 font-extrabold text-black relative cursor-pointer group flex justify-center p-1">
                    Страница тестов
                    <p className="w-full group-hover:top-0  group-hover:left-0 bg-white -z-10 text-white transition-all delay-75 absolute top-1.5 left-2.5">
                      <div className="flag-wrapper w-10 h-10 relative overflow-hidden">
                      <div className="redb w-10 h-10 bg-red-600 absolute -bottom-2 rounded-se-full"></div>
                      </div>
                    </p>
                  </p>
                  <p className="mt-4 ml-4 text-xl h-10 z-10 font-extrabold text-black relative cursor-pointer group flex justify-center p-1">
                    Наши уроки
                    <p className="w-full group-hover:top-0  group-hover:left-0 bg-white -z-10 text-white transition-all delay-75 absolute top-1.5 left-2.5">
                      <div className="flag-wrapper w-24 h-10 relative overflow-hidden flex items-center">
                      <div className="redb w-12 h-24 bg-red-600 absolute rounded-e-full"></div>
                      </div>
                    </p>
                  </p>
                  <p className="mt-4 ml-4 text-xl h-10 z-10 font-extrabold text-black relative cursor-pointer group flex justify-center p-1">
                    Рекомендации
                    <p className="w-full group-hover:top-0  group-hover:left-0 bg-white -z-10 text-white transition-all delay-75 absolute top-1.5 left-2.5">
                      <div className="flag-wrapper w-10 h-10 relative overflow-hidden">
                      <div className="redb w-10 h-10 bg-red-600 absolute -top-2 rounded-ee-full"></div>
                      </div>
                    </p>
                  </p>
                  <p className="ml-4 mt-2 text-xl h-10 z-10 font-extrabold text-white relative cursor-pointer group flex justify-center p-1">
                    Обновления сайта
                    <p className="w-full group-hover:top-0  group-hover:left-0 bg-black -z-10 text-zinc-800 transition-all delay-75 absolute top-1.5 left-2.5 p-1">Обновления сайта</p>
                  </p>
                  <p className="ml-4 mt-2 text-xl h-10 z-10 font-extrabold text-white relative cursor-pointer group flex justify-center p-1">
                    О нас
                    <p className="w-full group-hover:top-0  group-hover:left-0 bg-black -z-10 text-zinc-800 transition-all delay-75 absolute top-1.5 left-2.5 p-1">О нас</p>
                  </p>
              </div>
          </div>
        </div>
    </div>
  )
}


export default Menu;
