import React,{useReducer} from 'react'//step1:import useReducer from react
const initialstate=0
const reducer=(currentstate,action)=>{
//return newstate
switch(action){
case 'increment':
    return currentstate+1;
    case 'decrement':
        return currentstate-1;
        case 'reset':
            return initialstate
            default:
                return currentstate;
}

}
function Counter1() {
    //step2:within our component we call usereducer(passing in reducer function and initial state)
    //initialvalue is set to 0(count value)
    //reducer fn accepts the current state and action and returns the newstate depending on the
    //action  if the action is increment it returns statevalueplus one

    //step3:usereducer returns pair of values i.e:currentvalue(count) and a dispatch method
    //dispatch method capable of accepting an action to execute the code specified in render method
    
const[count,dispatch]=useReducer(reducer,initialstate)
    return (
        <div>
           <h1>counterone component</h1> 
           <p>
               count:{count}
           </p>
           <button onClick={()=>dispatch('increment')}>increment</button>
           <button onClick={()=>dispatch('decrement')}>decrement</button>
           <button onClick={()=>dispatch('reset')}>reset</button>
        </div>
    )
}

export default Counter1
