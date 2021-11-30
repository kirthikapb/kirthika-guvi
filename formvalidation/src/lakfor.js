import React, { Component } from 'react'

class Classform extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            phonenumber: '',
            email: '',
            points: '',
            comments: '',
            errors: {
                firstName: '',
                lastName: '',
                email: '',
                gender: '',
              },
            };
          }

   
    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;
        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }

        if (typeof input["email"] !== "undefined") {

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        if (!input["phone"]) {
            isValid = false;
            errors["phone"] = "Please enter your phone number.";
        }

        if (typeof input["phone"] !== "undefined") {

            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(input["phone"])) {
                isValid = false;
                errors["phone"] = "Please enter only number.";
            } else if (input["phone"].length != 10) {
                isValid = false;
                errors["phone"] = "Please enter valid phone number.";
            }
            
          handleSubmit = async (e) => {
            e.preventDefault();
            var errKeys = await Object.keys(this.state).filter((key) => {
              if (this.state[key] == '' && this.state[key] != 'errors') {
                return key;
              }
            });
            if (errKeys.length >= 1) console.warn('Please fill all fields');
            else console.log(this.state);
          };
        
          handleChange = async (e) => {
            var errors = { ...this.state.errors };
        
            if (e.target.value === '') {
              errors[e.target.name] = 'Required';
            } else {
              errors[e.target.name] = '';
            }
         await this.setState({ errors, [e.target.name] :e.target.value });
          };       
         render();{
                return (
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <div>
                            <h1>FEEDBACK FORM</h1>
                        </div>
                        <div>
                            <label> Username </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <br />
                        <div>
                            <label> Phonenumber </label>
                            <input
                                type="text"
                                value={phonenumber}

                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <br />
                        <div>
                            <label> Email </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <br />
                        <</div>


export default Classform