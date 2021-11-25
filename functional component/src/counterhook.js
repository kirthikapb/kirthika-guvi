
import React,{useState,useEffect} from 'react'

 function Counterhook() {
     const[count,setCount]=useState(5);
     useEffect(() => 
     {
       console.log("mounting phase")  
     },[])

     useEffect(() => 
     {
       console.log("updating phase")  
     },[count])
    

    return (
        <div>
           <h1>counter function component</h1>
           <h4>initial:{count}</h4>
           <button onClick={()=>setCount(count+1)}>increment</button> &nbsp;
           <button onClick={()=>setCount(count-1)}>decrement</button> &nbsp;
           <button onClick={()=>setCount(0)}>reset</button><hr></hr>
        </div>
    )
}
export default Counterhook
