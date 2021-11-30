import React, { Component } from 'react'

export class Formvalidation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        username:"",
        phoneno:"",
        email:"",
        ratings:"",
        comments:"",
        errors:{
        username:"",
        phoneno:"",
        email:"",
        ratings:"",
        comments:"",
        }
       
        }
    }
    handleChange =(e) => {
       
      let errors={...this.state.errors}
       /*if(e.target.value==="")
       {
           errors[e.target.name]="required";
       }
       else{
           errors[e.target.name]="";
       }*/
       if(e.target.name==="phoneno")
       {
        let phoneformat = /^\d{9}$/;
             if(e.target.value==="")
             {
                this.setState(errors[e.target.phoneno])
             }
          else if(e.target.value.match(phoneformat))
           {
            this.setState(errors[e.target.phoneno])
           }
           else 
           {
            this.setState(errors[e.target.phoneno])
           }
           
        
     
      
       }
      // this.setState({errors,[e.target.name]:e.target.value})
             this.setState(errors[e.target.phoneno])
             this.setState({[e.target.name]:e.target.value})
          //console.log(e.target.name)
          //console.log(e.target.value)
        
          };
          handlesubmit= async(e)=>
         { 
        e.preventDefault()
        let err=await Object.keys(this.state).filter((keys)=>{
            if(this.state[keys]===""&&this.state[keys]!=="error")
        {
            return keys
        }
        })
        if(err.length>=1)
        {
            alert("plese fill all the fields")
        }
        else
        {
           alert("submitted successfully")
           
        }
         
      console.log(err)
        
    }

          handleReset=()=>
          {
           this.setState({
            
                username:"",
                phoneno:"",
                email:"",
                ratings:"",
                comments:"",

           })

          }
      


    render() {
        return (
         <>
            <div>
               <h1>controlled form</h1> 
               <form  onSubmit={(e)=>this.handlesubmit(e)} >
                   <div>
                       <label>UserName</label>
                       <input type="text" name="username"value={this.state.username}
                        onChange={(e) => this.handleChange(e)}></input>
                        <br/>
                         <span style={{color:"red"}}>{this.state.errors.username}</span>
                   </div><br></br>
                  <div>
                       <label> PhoneNumber </label>
                       <input type="tel" name="phoneno" value={this.state.phoneno}
                        onChange={(e) => this.handleChange(e)}></input>
                         <br/>
                         <span style={{color:"red"}}>{this.state.errors.phoneno}</span>
                   </div><br></br>
                   <div>
                       <label> Email </label>
                       <input type="eamil" name="email" value={this.state.email}
                        onChange={(e) => this.handleChange(e)}></input>
                         <br/>
                         <span style={{color:"red"}}>{this.state.errors.email}</span>
                   </div><br></br>
                   <div>
                      <label>ratings </label>
                      <input type="radio" name="ratings" value="1star"
                            onChange={(e) => this.handleChange(e)}/>1
                      <input type="radio" name="ratings"  value="2star"
                        onChange={(e) => this.handleChange(e)}/>2
                      <input type="radio" name="ratings"  value="3star"
                        onChange={(e) => this.handleChange(e)}/>3
                      <input type="radio" name="ratings"  value="4star"
                         onChange={(e) => this.handleChange(e)}/>4
                      <input type="radio" name="ratings"  value="5star"
                        onChange={(e) => this.handleChange(e)}/>5
                      
                   </div><br></br>

                   <div>
                       <label> comments </label>
                       <textarea name="comments" value={this.state.comments}
                        onChange={(e) => this.handleChange(e)}></textarea>
                        <br/>
                        <span style={{color:"red"}}>{this.state.errors.comments}</span>
                 </div><br></br>
                 <button>submit</button>&nbsp;
                 <button  onClick={this.handleReset}>reset</button>
               </form>
             </div>
         </>
        )
    }
}

export default Formvalidation
