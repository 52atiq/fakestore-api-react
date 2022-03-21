import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'
import Menubar from './Components/Menubar/Menubar';
import AllProducts from './Components/AllProducts/AllProducts';
import { useEffect, useState } from 'react';
import { AOS } from 'aos';

function App() {
const [count, setCount] = useState(0);
const setCartCount =() =>{
  setCount(count +1);
}

useEffect (() =>{
  AOS.init();
},[])

  return (
    <div className="App">
   <Menubar count={count}> </Menubar>
   <AllProducts setCartCount={setCartCount}></AllProducts>
    </div>
  );
}

export default App;
