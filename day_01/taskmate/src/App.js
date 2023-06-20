import logo from './logo.svg';
import './App.css';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { useState } from 'react';


function App() {
const [tasks, setTasks] = useState([
  {id:1 , name:"Bread" , sold : false},
  {id:2 , name:"Mango" , sold : true},
  {id:3 , name:"Beer" , sold : false},
  {id:4 , name:"Meat" , sold : true},
  {id:5 , name:"Candy" , sold : false},
  {id:6 , name:"Drink" , sold : true}
])
const [show, setShow] = useState(true)
  
  return (
     <div className="App">
      <center>
        <h3>Store Items</h3>
        <button id="bt1" onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button>
      </center>
     <ul>
      {show && tasks.map((task)=>(
        <li key={task.id}>
          <span>{task.id}-{task.name}</span>
          <button onClick={()=>setTasks(tasks.filter(item=>item.id!==task.id))}>Remove</button>
        </li>
      ))}
     </ul>
    </div> 
  );
}

export default App;
