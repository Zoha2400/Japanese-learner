import { useState } from "react";
import { useSpring, animated } from "react-spring";
import tree from "../../img/tree.png";
import egg from "../../img/egg.png";
import spor from "../../img/spor.png";
import bonsai from "../../img/bonsai.png";
import sakura from "../../img/sakura.png";

// function NLevels() {
//   const hashLvls = [
//     [
//       "N5",
//       "N5 (初級 - Shokyuu - Начальный уровень): Этот уровень ориентирован на начинающих учащихся. Включает в себя основы грамматики, словарь для общения в повседневных ситуациях и простые навыки чтения и аудирования.",
//       egg,
//     ],
//     [
//       "N4",
//       "N4 (中級 - Chuukyuu - Средний уровень): Этот уровень предназначен для тех, кто способен понимать японский язык в повседневных ситуациях. Охватывает базовые грамматические структуры и основной словарный запас.",
//       spor,
//     ],
//     [
//       "N3",
//       "N3 (中上級 - Chuujoukyuu - Средний верхний уровень): Этот уровень ориентирован на учащихся, способных понимать японский язык на более продвинутом уровне. Включает в себя более сложные темы и разнообразные стили общения.",
//       bonsai,
//     ],
//     [
//       "N2",
//       "N2 (上級 - Joukyuu - Высший уровень): Учащиеся на этом уровне должны иметь продвинутые навыки чтения, письма, аудирования и разговора. Требует уверенного использования сложных грамматических структур и богатого словарного запаса.",
//       sakura,
//     ],
//     [
//       "N1",
//       "N1 (最上級 - Saijoukyuu - Самый высокий уровень): Этот уровень предназначен для продвинутых учащихся. Требует высокого уровня владения японским языком в чтении, письме, аудировании и разговоре. Включает в себя сложные грамматические конструкции и широкий словарный запас.",
//       tree,
//     ],
//   ];

//   const [chooseN, setChooseN] = useState(hashLvls[0]);

//   return (
//     <div className="relative flex justify-start w-full gap-4 p-4 mt-8 overflow-hidden bg-red-100">
//       <div className="z-20 flex flex-col items-center h-auto gap-2 rounded-lg">
//         <div className="box-border flex flex-col justify-center w-40 gap-1 p-2 bg-purple-900 rounded-md bg-red">
//           {hashLvls.map((el, key) => {
//             return (
//               <button
//                 key={key}
//                 className={`rounded-md w-30  ${
//                   chooseN[1] === el[1]
//                     ? "bg-white text-black"
//                     : "bg-purple-700 text-white"
//                 }`}
//                 onClick={() => {
//                   setChooseN(el);
//                 }}
//               >
//                 {el[0]}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//       <div className="z-20 flex items-start justify-start w-full break-words md:w-4/12 text-start">
//         {chooseN[1]}
//       </div>

//       <img
//         src={chooseN[2]}
//         className="absolute right-0 z-10 h-full -bottom-4"
//       />
//     </div>
//   );
// }

const NLevels = () => {
  const hashLvls = [
    [
      "N5",
      "N5 (初級 - Shokyuu - Начальный уровень): Этот уровень ориентирован на начинающих учащихся. Включает в себя основы грамматики, словарь для общения в повседневных ситуациях и простые навыки чтения и аудирования.",
      egg,
    ],
    [
      "N4",
      "N4 (中級 - Chuukyuu - Средний уровень): Этот уровень предназначен для тех, кто способен понимать японский язык в повседневных ситуациях. Охватывает базовые грамматические структуры и основной словарный запас.",
      spor,
    ],
    [
      "N3",
      "N3 (中上級 - Chuujoukyuu - Средний верхний уровень): Этот уровень ориентирован на учащихся, способных понимать японский язык на более продвинутом уровне. Включает в себя более сложные темы и разнообразные стили общения.",
      bonsai,
    ],
    [
      "N2",
      "N2 (上級 - Joukyuu - Высший уровень): Учащиеся на этом уровне должны иметь продвинутые навыки чтения, письма, аудирования и разговора. Требует уверенного использования сложных грамматических структур и богатого словарного запаса.",
      sakura,
    ],
    [
      "N1",
      "N1 (最上級 - Saijoukyuu - Самый высокий уровень): Этот уровень предназначен для продвинутых учащихся. Требует высокого уровня владения японским языком в чтении, письме, аудировании и разговоре. Включает в себя сложные грамматические конструкции и широкий словарный запас.",
      tree,
    ],
  ];

  const [chooseN, setChooseN] = useState(hashLvls[0]);

  const [springProps, setSpringProps] = useSpring(() => ({
    opacity: 1,
    transform: "translateY(0)",
  }));

  // ...

  return (
    <div className="relative flex flex justify-start w-full gap-4 p-4 mt-8 overflow-hidden bg-red-100">
      <div className="z-20 flex flex-col items-center h-auto gap-2 rounded-lg">
        <div className="box-border flex flex-col justify-center w-40 gap-1 p-2 bg-gray-100 rounded-md bg-red">
          {hashLvls.map((el, key) => (
            <animated.button
              key={key}
              className={`rounded-md w-30  ${
                chooseN[1] === el[1]
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-black"
              }`}
              onClick={() => {
                // Скрывать элемент вверху
                setSpringProps({ opacity: 0, transform: "translateY(100px)" });

                // Ждем 500 миллисекунд, затем обновляем состояние и отображаем элемент снизу вверх
                setTimeout(() => {
                  setChooseN(el);
                  setSpringProps({
                    opacity: 1,
                    transform: "translateY(0px)",
                  });
                }, 200);
              }}
            >
              {el[0]}
            </animated.button>
          ))}
        </div>
      </div>
      <animated.div
        className="z-20 flex items-start justify-start w-full break-words md:w-4/12 text-start"
        style={springProps}
      >
        {chooseN[1]}
      </animated.div>

      <animated.img
        src={chooseN[2]}
        className="absolute right-0 z-10 h-full -bottom-4"
        style={springProps}
      />
    </div>
  );
};

export default NLevels;
