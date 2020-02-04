import React, {  useContext } from "react";
import "./Dashboard.css";
import { ThemeContext } from "../../Context/ThemeContext";
import { NavLink } from "react-router-dom";


function Dashboard (props) {

  const {isLightTheme, light, dark} =  useContext(ThemeContext)
  const theme = isLightTheme ? light : dark;

    return (
      <div className='container'>
        <div className='dashboard'>
          <div
            className='ui'
            style={{
              marginLeft: "40vh",
              backgroundColor: theme.bgc,
              color: theme.ui
            }}
          >
            <div className='row'>
              <div className='col s12'>
                <h1 className='center'>Welcome {props.user.firstName}</h1>
              </div>
            </div>
            <div className='row'>
              <div className='col s12 m4'>
                <div className='card' style={{ backgroundColor: "#5558aa" }}>
                  <div className='card-content white-text'>
                    <span className='card-title'>VIEW MEASUREMENTS</span>
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                  <div className='card-action center'>
                    <NavLink
                      to='/measurements'
                      className='hoverable center'
                      style={{ color: theme.uitext }}
                    >
                      MEASUREMENTS
                    </NavLink>
                  </div>
                </div>
              </div>{" "}
              <div className='col s12 m4'>
                <div className='card' style={{ backgroundColor: "#5558aa" }}>
                  <div className='card-content white-text'>
                    <span className='card-title center'>NEW MEASUREMENTS</span>
                    <p>
                      Get your tape measure and get ready! It's time to start
                      the path of custom Clothiers! Don't forget to stretch, its
                      gonna be alot of up and down!
                    </p>
                  </div>
                  <div className='card-action center'>
                    <NavLink
                      to='/newmeasure'
                      className='hoverable'
                      style={{ color: theme.uitext }}
                    >
                      NEW MEASUREMENTS
                    </NavLink>
                  </div>
                </div>
              </div>{" "}
              <div className='col s12 m4'>
                <div className='card' style={{ backgroundColor: "#5558aa" }}>
                  <div className='card-content white-text'>
                    <span className='card-title'>TEMPLATES</span>
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                  <div className='card-action center'>
                    <p
                      className='center hoverable'
                      style={{ color: theme.uitext }}
                    >
                      TEMPLATES
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col s12 m4'>
                <div className='card' style={{ backgroundColor: "#5558aa" }}>
                  <div className='card-content white-text'>
                    <span className='card-title'>CLIENT LIST</span>
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                  <div className='card-action center'>
                    {" "}
                    <p
                      className='center hoverable'
                      style={{ color: theme.uitext }}
                    >
                      CLIENT LIST
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className='col s12 m4'>
                <div className='card' style={{ backgroundColor: "#5558aa" }}>
                  <div className='card-content white-text'>
                    <span className='card-title'>PROJECTS</span>

                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                  <a className='btn-floating halfway-fab waves-effect waves-light green'>
                    <i className='material-icons'>add</i>
                  </a>
                  <div className='card-action center'>
                    {" "}
                    <p
                      className='center hoverable'
                      style={{ color: theme.uitext }}
                    >
                      PROJECTS
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className='col s12 m4'>
                <div className='card' style={{ backgroundColor: "#5558aa" }}>
                  <div className='card-content white-text'>
                    <span className='card-title'>MESSAGE CENTER</span>
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                  <div className='card-action'>
                    <p
                      className='center hoverable'
                      style={{ color: theme.uitext }}
                    >
                      MESSAGE CENTER
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Dashboard;
