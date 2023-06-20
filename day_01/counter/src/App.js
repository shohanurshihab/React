import './App.css';
import { useState } from 'react';
function App() {

  const [count,setCount] = useState(0);
    
    return (
       <div className="App">
       <h3>COUNTER</h3>
       <p>{count}</p> 
       <button onClick={()=>setCount(count+1)}>Increase</button>
       <button onClick={()=>{count<=0 ? setCount(count) : setCount(count-1)}}>
        Decrease</button>
      </div>
      
    );
  }

export default App;
