import Taps from "./taps"

function Items() {

    interface Tap {
        name: string,
        input: string,
        airing: string
    }
    

    const subjects: Tap[]= [
        {name: 'hiro', input: 'Хирагана', airing: 'done'},
        {name: 'kata', input: 'Катакана', airing: 'soon'},
        {name: 'kanji', input: 'Иероглифы', airing: 'soon'},
        {name: 'grammar', input: 'Грамматика', airing: 'soon'},
        {name: 'all', input: 'Смешанно', airing: 'soon'},
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