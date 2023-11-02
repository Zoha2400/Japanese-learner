import { useState } from 'react'
import Footer from "../fixed-comps/Footer"
import Header from "../fixed-comps/Header"
import Items from "./Items"
import Menu from "./Menu"


function Content() {

  const [isClicked, setIsClicked] = useState(false);

  function clickDetect() {
    setIsClicked(!isClicked);
  }
    
  return (
    <div>
      <Header isClicked={isClicked} clickDetect={clickDetect} />

      <Items />

      <Menu isClicked={isClicked}/>

      <Footer />
    </div>
  )
}

export default Content
