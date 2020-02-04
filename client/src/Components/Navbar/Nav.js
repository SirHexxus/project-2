import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';
import { ThemeContext } from '../../Context/ThemeContext';
import { AuthContext } from '../../Context/AuthContext';
import UserImage from '../../Images/designergirl.png';
import Auth from '../../utils/auth'

const Navbar = () => {
  // Initialize SideNav
  useEffect(() => {
    let elements = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elements);
  });

  // Consume Theme Context
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  // Consume Auth Context
  const { isAuthorized, toggleAuth } = useContext(AuthContext);

  // window.addEventListener('scroll', e => {
  //   console.log(window.scrollY);
  //   console.log(style);
  // });

  // setStyle(window.scrollY >= 310 ? { display: 'fixed' } : { display: 'none' });
  // // console.log(handleSubcribe(), handleLogin());

  return (
    <header>
      {isAuthorized ? (
        <div>
          <nav>
            <div
              className='navbar-fixed'
              style={{
                backgroundColor: '#5558aa'
              }}
            >
              <div className='nav-wrapper'>
                <div className='container'>
                  <NavLink
                    onClick={toggleAuth}
                    to='/'
                    className='brand-logo right left hide-on-med-and-down flow-text'
                    style={{ color: theme.uitext }}
                  >
                    <strong>
                      <h4>Stitches &amp; Tape</h4>
                    </strong>
                  </NavLink>

                  <NavLink
                    to='#'
                    className='sidenav-trigger hide-on-med-and-up'
                    data-target='mobile'
                  >
                    <i className='material-icons'>menu</i>
                  </NavLink>
                  <ul
                    id='nav-mobile'
                    className='sidenav sidenav-fixed center'
                    style={{ color: theme.ui, backgroundColor: theme.bgc }}
                  >
                    <img src={UserImage} className='responsive-img' alt='' />
                    <NavLink
                      to='/profile'
                      className='flow-text hoverable'
                      style={{ color: theme.ui, backgroundColor: theme.bgc }}
                    >
                      Edit Profile
                    </NavLink>
                    <div className='divider'></div>
                    <li>
                      <NavLink
                        to='/newmeasure'
                        className='hoverable'
                        style={{ color: theme.ui, backgroundColor: theme.bgc }}
                      >
                        New Measurements
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to='/measurements'
                        className='hoverable center'
                        style={{ color: theme.ui, backgroundColor: theme.bgc }}
                      >
                        Measurements
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to='/newmeasure'
                        className='hoverable'
                        style={{ color: theme.ui, backgroundColor: theme.bgc }}
                      >
                        Templates
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to='/clients'
                        className='hoverable'
                        style={{ color: theme.ui, backgroundColor: theme.bgc }}
                      >
                        Client List
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to='/newmeasure'
                        className='hoverable disabled'
                        style={{ color: theme.ui, backgroundColor: theme.bgc }}
                      >
                        Projects
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to='/'
                        onClick={toggleTheme}
                        className='hoverable'
                        style={{ color: theme.ui, backgroundColor: theme.bgc }}
                      >
                        {theme.name}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to='/logout'
                        id='logout'
                        className='logged-in hoverable'
                        onClick={toggleAuth}
                        style={{ color: theme.ui }}
                      >
                        Log Out
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <ul
                  id='mobile'
                  className='sidenav'
                  style={{ color: theme.ui, backgroundColor: theme.bgc }}
                >
                  <img
                    src={UserImage}
                    className='responsive-img center'
                    alt=''
                  />
                  <p
                    className='flow-text'
                    style={{ color: theme.ui, backgroundColor: theme.bgc }}
                  >
                    Edit Profile
                  </p>
                  <div className='divider'></div>

                  <li>
                    <NavLink
                      to='/measurements'
                      className='hoverable'
                      style={{ color: theme.ui, backgroundColor: theme.bgc }}
                    >
                      Measurements
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/newmeasure'
                      className='hoverable'
                      style={{ color: theme.ui, backgroundColor: theme.bgc }}
                    >
                      New Measurements
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/'
                      onClick={toggleTheme}
                      className='hoverable'
                      style={{ color: theme.ui, backgroundColor: theme.bgc }}
                    >
                      {theme.name}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/logout'
                      id='logout'
                      className='logged-in hoverable'
                      onClick={toggleAuth}
                      style={{ color: theme.ui }}
                    >
                      Log Out
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      ) : (
        <div className='navbar-fixed'>
          <nav className='nav-wrapper'>
            <div className='container'>
              <NavLink
                to='/'
                className='brand-logo left hide-on-med-and-down flow-text'
                style={{ color: theme.uitext }}
              >
                Stitches &amp; Tape
              </NavLink>
              <NavLink
                to='/'
                className='brand-logo center hide-on-med-and-up flow-text'
                style={{ color: theme.uitext }}
              >
                Stitches &amp; Tape
              </NavLink>
              <NavLink
                to='#'
                className='sidenav-trigger'
                data-target='mobile-menu'
              >
                <i className='material-icons'>menu</i>
              </NavLink>
              <ul className='right hide-on-med-and-down'>
                {/* <li>
                  <NavLink
                    to='/'
                    className='hoverable'
                    style={{ color: theme.uitext }}
                  >
                    About
                  </NavLink>
                </li> */}

                <li>
                  <NavLink
                    to='/signup'
                    id='signup'
                    className='logged-out hoverable'
                    style={{ color: theme.uitext }}
                  >
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/signin'
                    id='signin'
                    className='logged-out hoverable'
                    style={{ color: theme.uitext }}
                  >
                    Sign In
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to='/contact'
                    className='hoverable'
                    style={{ color: theme.uitext }}
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/logout'
                    id='logout'
                    className='logged-in hoverable'
                    onClick={toggleAuth}
                    style={{ color: theme.uitext }}
                  >
                    Log Out
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Mobile Nav Bar */}
            <ul className='sidenav grey lighten-2' id='mobile-menu'>
              <li>
                <NavLink to='/measure' className='logged-in'>
                  View Measurements
                </NavLink>
              </li>
              <li>
                <NavLink to='/newmeasure' className='logged-in'>
                  New Measurements
                </NavLink>
              </li>
              <li>
                <NavLink to='/signup' className='logged-out'>
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink to='/signin' className='logged-out'>
                  Sign In
                </NavLink>
              </li>
              <li>
                <NavLink to='/logout' className='logged-in'>
                  Log Out
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact'>Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
