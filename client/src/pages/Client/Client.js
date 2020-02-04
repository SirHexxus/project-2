import React, { Component } from 'react';
import './client.css';
import { ThemeContext } from '../../Context/ThemeContext';
import { Route, Switch } from 'react-router-dom';
import Axios from 'axios';

class Client extends Component {
  state = {
    clients: []
  };

  componentDidMount() {
    Axios.get(`/api/measurements/user/${this.props.userId}`).then(res =>
      this.setState({ clients: res.data })
    );
  }

  // display client measurements

  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    const { clients } = this.state;
    const { userId, userName } = this.props;

    return (
      <div className='container'>
        <div className='clientList'>
          <div
            className='ui'
            style={{
              marginLeft: '40vh',
              backgroundColor: theme.bgc,
              color: theme.ui
            }}
          >
            <div className='row'>
              <div className='col s12'>
                <h1 className='center'>{userName}'s client list.</h1>
              </div>
              <div className='row'>
                {clients.map(({ _id, clientName }) => (
                  <div className='col s4'>
                    <button
                      key={_id}
                      onClick={this.displayMeasurements}
                      userId={userId}
                      userName={userName}
                    >
                      {clientName}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Client;
