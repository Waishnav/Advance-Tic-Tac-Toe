import Navbar from './navbar/navbar';
import Main from './main/main';
import {useState, useEffect} from "react"

function App() {

  return (
    <div className='App'>
      <Navbar />
      <div>
        <Main />
      </div>
    </div>
    );
}

export default App;
