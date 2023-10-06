import React, { useState } from 'react'

export default function Counter() {
    const [num, setNum] = useState(100);
    function Add(){
        setNum(num+1)
    }
    function Sub(){
        setNum(num-1)
    }
    function Multiple(){
        setNum(num*2)
    }
    function Divide(){
        setNum(num/2)
    }

  return (
    <>
    <div>{num}</div>
    <br/>
    <button onClick={Add}>+</button>
    <br/>
    <button onClick={Sub}>-</button>
    <br/>
    <button onClick={Multiple}>*</button>
    <br/>
    <button onClick={Divide}>/</button>
    </>
  )
}
