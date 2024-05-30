import { useEffect, useState } from "react"


function App() {
  
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title=count
  }, [count]);
  return (
   <div>
    <p>{count}</p>
    <button onClick={()=>setCount(count+1)}>Increment</button>

    {
      count<5 ? (<p>Keep Going</p>) : (<p>You made it</p>) 
    }
   </div>
  )
}

export default App
