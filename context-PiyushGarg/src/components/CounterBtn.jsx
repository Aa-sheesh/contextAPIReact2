import React from 'react'

function CounterBtn() {
  function handleClick(e) {
    const counterChoice=console.log(e.target.innerText);
    if(counterChoice==="Increment"){
      count++;
    }else{
      count--;
    }
  }

  return (
    <>
        <button className='bg-gray-500 rounded-sm p-2 m-2' type="button" onClick={handleClick}>Increment</button>
        <button className='bg-gray-500 rounded-sm p-2' type="button" onClick={handleClick}>Decrement</button>
        <br/>
    </>
  )
}

export default CounterBtn