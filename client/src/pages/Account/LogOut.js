import React, { Component } from "react";
import Home from "../Home"
import 'whatwg-fetch'

import { removeFromLocal } from './../../utils/storage';
import Auth from "../../utils/auth";

class LogOut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    }
    
  }
componentDidMount = (e) => {
    this.setState({
      isLoading: true,
    });
    const obj = removeFromLocal('the_main_app');
    Auth.logout()
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/logout?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            
            console.log('Token Empty')
            this.setState({
              token: '',
              isLoading: false,
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    const {
      isLoading,
      token
    } = this.state

    if(isLoading) {
      return (<div><p>Loading...</p></div>);
    }

    if(!token) {
      return (
      <div>
          <h2>Logged Out</h2>
          <Home/>
      </div>
      )
    }
   
}
}

  export default LogOut;