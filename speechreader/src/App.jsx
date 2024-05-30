import { useState } from 'react'
import {useSpeechSynthesis} from "react-speech-kit"
import "./App.css"
function App() {
  
  const [value, setValue] = useState("")
  const {speak} = useSpeechSynthesis();

  return (
   <div className='container'>

    <div className='reader-container'>
      <h1>Speech Reader</h1>
      <input type='text' onChange={(e)=> setValue(e.target.value)} value={value} className='input-box'/>
      <button onClick={()=> speak({text:value})}>Read</button>
    </div>
    
   </div>
  )
}

export default App
