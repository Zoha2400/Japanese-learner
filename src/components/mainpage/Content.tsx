import { useState } from "react";
import Footer from "../fixed-comps/Footer";
import Header from "../fixed-comps/Header";
import Items from "./Items";
import Menu from "./Menu";
import Drag from "./Drag";
import NLevels from "./NLevels";

function Content() {
  const [isClicked, setIsClicked] = useState(false);

  function clickDetect() {
    setIsClicked(!isClicked);
  }

  return (
    <div className="relative h-full h">
      <Header isClicked={isClicked} clickDetect={clickDetect} />

      <Drag />

      <Items />

      <NLevels />

      <Menu isClicked={isClicked} />

      <Footer />

      <div className="darkmode"></div>
    </div>
  );
}

export default Content;
