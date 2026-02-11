import {useState} from 'react';
function App() {
  let [counter,setCounter]=useState(15);
  const addValue=()=>{
    if(counter<20){
      setCounter(counter+=1)
    console.log(counter)
    }
    else{
      console.log("no add value ")
    }
    
  }
  
  const removeValue=()=>{
    if(counter >0){
     setCounter(counter-=1)
       console.log("remove Value :",counter)
    }
    else{
      console.log("value not remove ")
    }

    
  
  }
  return (
    <> 
    <h>hello Dosto </h>
      <h2>Counter value : {counter}</h2>

      <div className="btn">
        <button onClick={addValue}>Add value </button>
        <button onClick={removeValue}> Remove value</button>
      </div>
    </>
  )
}

export default App
