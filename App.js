import React, {useState} from "react";
import './style.css'

function App(){
        const [number, setNumber] = useState(0)
    return <div>
        <h1>Simple Counter Tool</h1><hr></hr><hr></hr>
        <h1> {number}</h1> 
        <button onClick={()=>setNumber(number+1) } className="button">Add</button>
        <button onClick={()=>setNumber(number-1) } className="button">Less</button>
        <button onClick={()=>setNumber(0) } className="button">Reset</button>
    </div>
}

export default App;