import Taps from "./taps"
import kitagawa from '../../img/kitagawa.jpg'
import meimei from '../../img/meimei.jpg'
import makima from '../../img/makima.jpg'
import sleep from '../../img/sleep.jpg'
import kaguya from '../../img/kaguya.jpg'

function Items() {

    interface Tap {
        name: string,
        input: string,
        airing: string,
        img: string,
        rotate: string,
    }
    

    const subjects: Tap[]= [
        {name: 'hiro', input: 'Хирагана', airing: 'done', img: kitagawa, rotate: 'rotate-90'},
        {name: 'kata', input: 'Катакана', airing: 'soon', img: meimei, rotate: '-rotate-90'},
        {name: 'kanji', input: 'Иероглифы', airing: 'soon', img: makima, rotate: '-rotate-90'},
        {name: 'grammar', input: 'Грамматика', airing: 'soon', img: sleep, rotate: 'rotate-90'},
        {name: 'all', input: 'Смешанно', airing: 'soon', img: kaguya, rotate: '-rotate-90'},
    ]



  return (
    <div className="p-4">
        <h1 className="font-bold text-sm m-2 flex justify-start">Тесты</h1>
        <div className="w-full lessons-taps grid grid-cols-2 justify-center items-center gap-2 md:grid-cols-5 sm:grid-cols-3">
            {subjects.map((el, index)=> {
                return (<Taps tap={el}  key={index}/>);
             })}
        </div>

    </div>
  )
}

export default Items