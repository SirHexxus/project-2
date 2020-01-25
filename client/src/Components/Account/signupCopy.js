import React, { Component } from "react";
import 'whatwg-fetch'

import { getFromStorage, setInStorage } from './../../utils/storage';

    export default class Login extends Component {
      constructor(props) {
        super(props);

        this.state = {
          isLoading: true,
          isLoggedIn: '',
          signUpError: '', 
          signInError: '',
          logInEmail: "",
          logInPassword: "",
          signUpFirstName: "",
          signUpLastName: "",
          signUpEmail: "",
          signUpPassword: ""
        };

        this.onChangeLogInEmail = this.onChangeLogInEmail.bind(this)
        this.onChangeLogInPassword = this.onChangeLogInPassword.bind(this)
        this.onChangeSignUpEmail = this.onChangeSignUpEmail.bind(this)
        this.onChangeSignUpPassword = this.onChangeSignUpPassword.bind(this)
        this.onChangeSignUpFirstName = this.onChangeSignUpFirstName.bind(this)
        this.onChangeSignUpLastName = this.onChangeSignUpLastName.bind(this)

        this.onLogin = this.onLogin.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
      }

      componentDidMount() {
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token){
          const { token } = obj
          //verify token
          fetch('/api/account/verify?token' + token)
          .then(res => res.json())
          .then(json => {
            if(json.success) {
              this.setState({
              token,
              isLoading: false
            });
            } else {
              this.setState({
                isLoading: false,
              });
            }
          })
        } else {
          this.setState({
            isLoading: false,
          })
        }
      }

      onChangeLogInEmail(event) {
        this.setState({
          logInEmail: event.target.value,
        })
      }
      onChangeLogInPassword(event) {
        this.setState({
          logInPassword: event.target.value,
        })
      }
      onChangeSignUpEmail(event) {
        this.setState({
          signUpEmail: event.target.value,
        })
      }
      onChangeSignUpPassword(event) {
        this.setState({
          signUpPassword: event.target.value,
        })
      }
      onChangeSignUpFirstName(event) {
        this.setState({
          signUpFirstName: event.target.value,
        })
      }
      onChangeSignUpLastName(event) {
        this.setState({
          signUpLastName: event.target.value,
        })
      }

      onLogin() {
        //Grab State
        const {
          logInEmail,
          logInPassword,
        }= this.state;

        this.setState({
          isLoading: true,
        })
        //Post request to backend
        fetch('/api/account/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            email: logInEmail,
            password: logInPassword,
          }),
        }).then(res => res.json())
          .then(json => {
            if(json.success){
              setInStorage('the_main_app', { token: json.token });
              this.setState({
                signInError: json.message,
                isLoading: false,
                logInEmail: '',
                logInPassword: '',
                token: json.token,
              });
            }else {
              this.setState({
                signInError: json.message,
                isLoading: false,
              });
            }
          });
      }
      onSignUp(){
        //Grab State
        const {
          signUpFirstName,
          signUpLastName,
          signUpEmail,
          signUpPassword
        }= this.state;

        this.setState({
          isLoading: true,
        })
        console.log(signUpFirstName)
        console.log(signUpLastName)
        console.log(signUpEmail)
        console.log(signUpPassword)
       

        //Post request to backend
        fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            firstName: signUpFirstName,
            lastName: signUpLastName,
            email: signUpEmail,
            password: signUpPassword,
          }
          ),
        }).then(res => res.json())
          .then(json => {
            console.log("json", json)
            if(json.success){
              this.setState({
                isLoading: false,
                signUpEmail: "",
                signUpPassword: "",
                signUpFirstName: "",
                signUpLastName: "",
              });
            }else {
              this.setState({
                signUpError: json.message,
                isLoading: false,
              });
            }
          }
          ).catch(error => {
            throw(error);
        });
      }
      validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

      handleSubmit = event => {
        event.preventDefault();
      }
      
      
      render() {
        const {
          isLoading,
          token,
          signInError,
          logInEmail,
          logInPassword,
          signUpFirstName,
          signUpLastName,
          signUpEmail,
          signUpPassword,
          signUpError
        } = this.state;

        if(isLoading) {
          return (<div><p>Loading...</p></div>);
        }

        if(!token) {
          return (
          <div>
            <div>

              {
                (signInError) ? (
                  <p>{signInError}</p>
                ) : (null)
              }
                <p>Log In</p>
                <input type="email" placeholder="Email" value={logInEmail} onChange={this.onChangeLogInEmail}/>
                <input type="password" placeholder="Password" value={logInPassword} onChange={this.onChangeLogInPassword}/>
                <button onClick={this.onLogin}>Log In</button>
            </div>
            <br />            
            <br />
            <div>
            {
                (signUpError) ? (
                  <p>{signUpError}</p>
                ) : (null)
              }
                <p>Sign Up</p>
                <input type="text" placeholder="First Name" value={this.signUpFirstName} onChange={this.onChangeSignUpFirstName}/>
                <input type="text" placeholder="Last Name" value={this.signUpLastName} onChange={this.onChangeSignUpLastName}/>
                <input type="email" placeholder="Email" value={this.signUpEmail} onChange={this.onChangeSignUpEmail}/>
                <input type="password" placeholder="Password" value={this.signUpPassword} onChange={this.onChangeSignUpPassword}/>
                <label>
                <input
                  type='checkbox'
                  id='moreInfo'
                  value={this.state.moreInfo}
                  checked={this.state.moreInfo}
                  onChange={e => this.handleChange(e, true)}
                />
                <span>
                  Please inform me of upcoming Changes, Promotions, and News
                </span>
              </label>
                <button onClick={this.onSignUp}>Sign Up</button>
            </div>

          </div>)
        }
        return (
          <div>
      <p>Account: {logInEmail} </p>
          {/* <TextInput
          email
          error="Wrong Email sir"
          label="Email"
          success="Great"
          validate
        />
        <TextInput
          label="Password"
          password
        /> */}
        
        </div>
        );
      }
    }
