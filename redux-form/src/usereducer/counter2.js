import React,{useReducer} from 'react'
//step1:import useReducer from react
const initialstate={
    firstcounter:0,
    secondcounter:10
}
const reducer=(currentstate,action)=>{
//return newstate
switch(action.type){
case 'increment':
    return {...currentstate,firstcounter:currentstate.firstcounter+action.value}
    case 'decrement':
        return {...currentstate,firstcounter:currentstate.firstcounter-action.value}
        case 'increment2':
           return {...currentstate,secondcounter:currentstate.secondcounter+action.value}
         case 'decrement2':
           return {...currentstate,secondcounter:currentstate.secondcounter-action.value}
        case 'reset':
            return initialstate
            default:
                return currentstate;
}

}
function Counter2() {
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
              firstcounter count:{count.firstcounter}
           </p>
           <p>
              secondcounter count:{count.secondcounter}
           </p>
           <button onClick={()=>dispatch({type:'increment',value:1})}>increment</button>
           <button onClick={()=>dispatch({type:'decrement',value:1})}>decrement</button>
           <button onClick={()=>dispatch({type:'increment',value:5})}>increment 5</button>
           <button onClick={()=>dispatch({type:'decrement',value:5})}>decrement 5</button>
           <button onClick={()=>dispatch({type:'reset'})}>reset</button>
           <div>
               secondcounter<br/>
               <button onClick={()=>dispatch({type:'increment2',value:1})}>increment</button>
           <button onClick={()=>dispatch({type:'decrement2',value:1})}>decrement</button>
           </div>
        </div>
    )
}

export default Counter2
// here both state and action are objects
//by using action as object we are able to pass additional data to the reducer fuction
//by state as an object we are able to keep track of two different counters(multiple state variables//)
//by maintaining multiple variables in a single state object is dealing with global state
//but rgt now we are dealing with local state
 