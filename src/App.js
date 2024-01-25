import { useEffect, useState } from 'react';

import './App.css';

import Progressbar from './component/Progressbar';


function App() {
  
  const[value,setValue]=useState(0)
  const[loading ,setLoading]=useState(false)


  
  useEffect(()=>{
    const timer=setInterval(() => {
      
      if(value<100 && loading)
       setValue(value+1)
      
    }, 100);

    return(()=>clearInterval(timer))

  },[value,loading])
  

  return (
    <div className="App">
      <div className='box'>
        <span>Progress bar</span>
        <Progressbar value={value}></Progressbar>
        <div className='btn'>
        <button onClick={()=>setLoading(true)}>Start</button>
        <button onClick={()=>setValue(0)}>Reset</button>
        </div>
       
      </div>
    </div>
  );
}

export default App;
