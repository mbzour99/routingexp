import './App.css';
import {Router ,Link} from '@reach/router';
import { Moh } from './components/Moh';
import Formme from './components/Formme';
import React ,{useState} from 'react';
const Home = () => { 
  return (
    <h1 style={{color: "blue"}}>Welcom</h1>
  );
}
// const Homeme = () => { 
//   return (
//     <h1 style={{color: "black"}}>My name is mhamamd al bzourt</h1>
//   );
// }
    
const About = () => {
  return (
    <h1 style={{color: "blue"}}>About Component</h1>
  );
}

const [idi,setidi]=useState(0);

const getId=(id)=>{

}
const getResorse=(resorse)=>{

}
function App() {

  return (
    <div className="App">
       <Router>
        {/* <Home path="/about" element={<About />} />
        <About path="/" element={<Home />}/> 
        <Homeme path="/m/:name" ></Homeme>
        <Moh path="/n/:name"></Moh> */}
       <Home path="/"/>
       <Moh path="/:number/:color/:colo"></Moh>
       
      </Router>
      {/* <a href='/about'>go to about </a><br></br>
      <Link to={"/about"}>Go To about </Link>
      <Link to={"/n/ahmad"}>pr;ecfl,lfc</Link> */}
      {/* <Link></Link> */}
{/* ____________________________________________ */}

<Formme getId={getId} getResorse={getResorse}/>

    </div>
  );
}

export default App;
