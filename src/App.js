
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import AllProducts from './Components/AllProducts/AllProducts';
import { useEffect, useState } from 'react';
import  AOS  from 'aos';
import "aos/dist/aos.css";

function App() {
  useEffect(() =>{
    AOS.init({ duration: 2000})
  },[]);

const [count, setCount] = useState(0);
const setCartCount =() =>{
  setCount(count +1 );
};

 
  return (
    <div className="App">
   <Menubar count={count}> </Menubar>
   <AllProducts setCartCount={setCartCount}></AllProducts>
    </div>
  );
}

export default App;
