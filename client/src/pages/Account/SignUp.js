import React, { Component } from "react";
import "whatwg-fetch";
import { ThemeContext } from "../../Context/ThemeContext";
import { getFromStorage } from "./../../utils/storage";
import auth from "../../utils/auth";
import SignIn from "./SignIn";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignedUp: false,
      isLoading: true,
      signUpError: "",
      signUpFirstName: "",
      signUpLastName: "",
      signUpUsername: "",
      signUpEmail: "",
      signUpPassword: "",
      signUpUpdatesBox: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    // this.onChangeSignUpPassword = this.onChangeSignUpPassword.bind(this);
    // this.onChangeSignUpUsername = this.onChangeSignUpUsername.bind(this);
    // this.onChangeSignUpFirstName = this.onChangeSignUpFirstName.bind(this);
    // this.onChangeSignUpLastName = this.onChangeSignUpLastName.bind(this);

    this.onSignUp = this.onSignUp.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage("the_main_app");
    if (obj && obj.token) {
      const { token } = obj;
      //verify token
      fetch("/api/account/verify?token" + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            auth.signup();
            this.setState({
              token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false
            });
          }
        });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }

  /* onChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value
    });
  } */
  /* onChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value
    });
  } */
  /* onChangeSignUpUsername(event) {
    this.setState({
      signUpUsername: event.target.value
    });
  } */
  /* onChangeSignUpFirstName(event) {
    this.setState({
      signUpFirstName: event.target.value
    });
  } */
  /* onChangeSignUpLastName(event) {
    this.setState({
      signUpLastName: event.target.value
    });
<<<<<<< Updated upstream
  } */

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSignUp() {
    //Grab State
    const {
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
      signUpUsername
    } = this.state;

    this.setState({
      isLoading: true
    });
    console.log(signUpFirstName);
    console.log(signUpLastName);
    console.log(signUpUsername);
    console.log(signUpEmail);
    console.log(signUpPassword);

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
        username: signUpUsername,
        email: signUpEmail,
        password: signUpPassword
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
        if (json.success) {
          this.setState({
            isLoading: false,
            signUpEmail: "",
            signUpPassword: "",
            signUpUsername: "",
            signUpFirstName: "",
            signUpLastName: "",
            isSignedUp: true,
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false
          });
        }
      })
      .catch(error => {
        throw error;
      });
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    const {
      isLoading,
      token,
      isSignedUp,
      signUpError
    } = this.state;

    if (isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    if(isSignedUp){
      return(
        <div>
          <SignIn/>
        </div>
      )
    }

    if (!token) {
      return (
        <div className='container'>
          <div className='center' style={{ color: theme.ui }}>
            {signUpError ? <p>{signUpError}</p> : null}
            <div className='container'>
              <h2 className='center-align form-header'>Sign Up</h2>

              <form className='border' style={{ backgroundColor: theme.bgc }}>
                <input
                  type='text'
                  name='signUpFirstName'
                  placeholder='First Name'
                  value={this.signUpFirstName}
                  onChange={this.handleInputChange}
                />
                <input
                  type='text'
                  name='signUpLastName'
                  placeholder='Last Name'
                  value={this.signUpLastName}
                  onChange={this.handleInputChange}
                />
                <input
                  type='text'
                  name='signUpUsername'
                  placeholder='Username'
                  value={this.signUpUsername}
                  onChange={this.handleInputChange}
                />
                <input
                  type='email'
                  name='signUpEmail'
                  placeholder='Email'
                  value={this.signUpEmail}
                  onChange={this.handleInputChange}
                />
                <input
                  type='password'
                  name='signUpPassword'
                  placeholder='Password'
                  value={this.signUpPassword}
                  onChange={this.handleInputChange}
                />
                {/*             
            <input
             */}
                <button
                  className='btn'
                  disabled={
                    !this.state.signUpFirstName &&
                    this.state.signUpLastName &&
                    this.state.signUpUsername &&
                    this.state.signUpPassword
                  }
                  onClick={this.onSignUp}
                  style={{ backgroundColor: "#5558aa" }}
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}
