import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'

function App() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className={showMenu ? 'wrapper-menu open' : 'wrapper-menu'} onClick={() => { setShowMenu(!showMenu) }} >
      <div className="line-menu half start"></div>
      <div className="line-menu"></div>
      <div className="line-menu half end"></div>
    </div>

  );
}

export default App;
