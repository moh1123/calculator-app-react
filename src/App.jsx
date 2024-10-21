import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DigitButton from './DigitButton'


function App() {
  const [prev, setPrev] = useState('ee')
  const [result, setResult] = useState('zxc')

  const addToText = (val) => {
    setPrev((prev) => [...prev, val + " "])
  };

  return (
    <div className='calc-grid'>
      
      <div className='output'>
        <div className='previous-operand'>{prev}</div>
        <div className='current-operand'>{result}</div>
      </div>

      <button className='span-two'>AC</button>
      <DigitButton symbol={"DEL"}/>
      <DigitButton symbol={"÷"}/>
      <DigitButton symbol={"1"}/>
      <DigitButton symbol={"2"}/>
      <DigitButton symbol={"3"}/>
      <DigitButton symbol={"×"}/>
      <DigitButton symbol={"4"}/>
      <DigitButton symbol={"5"}/>
      <DigitButton symbol={"6"}/>
      <DigitButton symbol={"+"}/>
      <DigitButton symbol={"7"}/>
      <DigitButton symbol={"8"}/>
      <DigitButton symbol={"9"}/>
      <DigitButton symbol={"-"}/>
      <DigitButton symbol={"."}/>
      <DigitButton symbol={"0"}/>
   

      {/* <button onClick={e => setPrev(val + e.target.val)}>÷</button>
      <button onClick={e => setVal(val + e.target.val)}>1</button>
      <button onClick={e => setVal(val + e.target.val)}>2</button>
      <button onClick={e => setVal(val + e.target.val)}>3</button>
      <button onClick={e => setVal(val + e.target.val)}>×</button>
      <button onClick={e => setVal(val + e.target.val)}>4</button>
      <button onClick={e => setVal(val + e.target.val)}>5</button>
      <button onClick={e => setVal(val + e.target.val)}>6</button>
      <button onClick={e => setVal(val + e.target.val)}>+</button>
      <button onClick={e => setVal(val + e.target.val)}>7</button>
      <button onClick={e => setVal(val + e.target.val)}>8</button>
      <button onClick={e => setVal(val + e.target.val)}>9</button>
      <button onClick={e => setVal(val + e.target.val)}>-</button>
      <button onClick={e => setVal(val + e.target.val)}>.</button>
      <button onClick={e => setVal(val + e.target.val)}>0</button> */}
      <button className='span-two'>=</button>

    </div>
  )
}

export default App
