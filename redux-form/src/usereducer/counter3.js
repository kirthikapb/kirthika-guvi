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
function Counter3() {
    //step2:within our component we call usereducer(passing in reducer function and initial state)
    //initialvalue is set to 0(count value)
    //reducer fn accepts the current state and action and returns the newstate depending on the
    //action  if the action is increment it returns statevalueplus one

    //step3:usereducer returns pair of values i.e:currentvalue(count) and a dispatch method
    //dispatch method capable of accepting an action to execute the code specified in render method
    
const[count1,dispatch1]=useReducer(reducer,initialstate)
const[count2,dispatch2]=useReducer(reducer,initialstate)
    return (
        <div>
           <h1>counter three component</h1> 
           <p>
               count:{count1}
           </p>
           <button onClick={()=>dispatch1('increment')}>increment</button>
           <button onClick={()=>dispatch1('decrement')}>decrement</button>
           <button onClick={()=>dispatch1('reset')}>reset</button>
            
         <hr/>
           <h1>counter three component</h1> 
           <p>
               count:{count2}
           </p>
           <button onClick={()=>dispatch2('increment')}>increment</button>
           <button onClick={()=>dispatch2('decrement')}>decrement</button>
           <button onClick={()=>dispatch2('reset')}>reset</button>
        </div>
    )
}

export default Counter3
{/*
    1.when dealing with multiple state variables that have same state transitions
    2.it is a good idea to have usereducers making use of same reducer function
    3.this will avoid the complexity of merging state
    4.if it were to be an object and also prevents us from code in the reducer function
    
*/}