import { useState } from 'react';
import style from './main.module.css'

function App() {
  const [active, setActive] = useState("home");
  
  function activate(e) {
    const active = e.target.dataset.active;
    setActive(active);
  }

  return (
      <ul>
        <li data-active = "home" onClick={activate} className={ active == "home" ? style["active"] , style.list__items : "" }>Home</li>
        <li data-active = "news" onClick={activate} className={ active == "news" ? style["active"] style.list__items : "" }>News</li>
        <li data-active = "contact" onClick={activate} className={ active == "contact" ? style["active"] : "" }>Contact</li>
      </ul>
  )
}

export default App
