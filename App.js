import Keypad from './Keypad';
import './App.css';
import { useState } from 'react';

function App(){
  let[input,setInput]=useState("")
function handleClick(value)

{
  
      setInput(input+value)
  
}

function calculate(value){
  
  let outputVal=eval(input)//eval is a method in javascript which will makes the operations without this we have to write many number of codes of line  
  setInput(outputVal)

}
function handleClear(){
  setInput(""
  )
}






  return(
    <div className="container">

      <h1>Calculator App Using React</h1>

      <div className="calculator">
        <input type="text" className="output"value={input}/>
        <Keypad handleClick={handleClick } calculate={calculate}handleClear={handleClear}></Keypad>


      </div>
    </div>
  )
}
export default App