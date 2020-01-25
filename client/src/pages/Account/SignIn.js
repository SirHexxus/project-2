import React, { Component } from 'react';
import 'whatwg-fetch';
import auth from './../../utils/auth'
import { getFromStorage, setInStorage } from './../../utils/storage';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isLoggedIn: '',
      signInError: '',
      signInUsername: '',
      signInPassword: ''
    };
    this.onChangeSignInUsername = this.onChangeSignInUsername.bind(this);
    this.onChangeSignInPassword = this.onChangeSignInPassword.bind(this);

    this.onSignIn = this.onSignIn.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      //verify token
      fetch('/api/account/verify?token' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
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

  onChangeSignInUsername(event) {
    this.setState({
      signInUsername: event.target.value
    });
  }
  onChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value
    });
  }

  onSignIn() {
    //Grab State
    const { signInUsername, signInPassword } = this.state;

    this.setState({
      isLoading: true
    });
    console.log(signInUsername);
    console.log(signInPassword);

    //Post request to backend
    fetch('/api/account/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          auth.signedIn()
          console.log('Grabbing a token');
          setInStorage('the_main_app', { token: json.token });
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInUsername: '',
            signInPassword: '',
            token: json.token
          });
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false
          });
        }
      });
  }

  validateForm() {
    return (
      this.state.signInUsername.length > 0 &&
      this.state.signInPassword.length > 0
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const {
      isLoading,
      token,
      signInError,
      signInUsername,
      signInPassword
    } = this.state;

    if (isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    if (!token) {
      return (
        <div className='container'>
          <div>
            {signInError ? <p>{signInError}</p> : null}
            <h2 className='center'>Sign In</h2>
            <form onClick={this.handleSubmit} className='border'>
              <ul className='login-form center'>
                <div>
                  <li>
                    <input
                      type='text'
                      id='username'
                      placeholder='Username'
                      value={this.signInUsername}
                      required
                      onChange={this.onChangeSignInUsername}
                    />
                    <input
                      type='password'
                      placeholder='Password'
                      value={this.signInPassword}
                      onChange={this.onChangeSignInPassword}
                    />
                  </li>
                  <br />
                  {/* <h4>I forgot my Password!</h4> */}
                  <input
                    className='btn'
                    type='submit'
                    onClick={this.onSignIn}
                    defaultValue='Login'
                  />
                </div>
              </ul>
            </form>
          </div>
        </div>
      );
    }

    return (
      <div>
        <p>Signed In!</p>
      </div>
    );
  }
}
