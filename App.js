import React, {useState} from "react";
import './style.css'

function App(){
        const [number, setNumber] = useState(0)
    return <div>
        <div className="hadder">
        <h2>Simple Counter Tool</h2>
        </div>
        
        <h1> {number}</h1> 
        <button onClick={()=>setNumber(number+1) } className="button">Add</button>
        <button onClick={()=>setNumber(number-1) } className="button">Less</button>
        <button onClick={()=>setNumber(0) } className="button-r">Reset</button>
        <h3>NOTE:- This is a CounterApp project on <span>React.js</span> using <span>useState Hook</span>.</h3>
    </div>
}

export default App;
