import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import sewing from "../../Images/sewing.png";

const About = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className='container' style={{ color: theme.uitext }} id='about'>
      <h1 className='center' style={{ backgroundColor: "#5B3391" }}>
        You're In the Right Place!
      </h1>
      <div className='row'>
        <p
          className='flow-text container col s12 z-depth-5'
          style={{ background: theme.bgc, color: theme.text }}
        >
          There is a proper way to take measurements to give the best fit when
          making a garment. Your finished garment will only fit as well as the
          accuracy of the measurements it is based upon. Whether it's for
          personal use or to serve your clients, accurate measurements are
          essential for a proper fit.
        </p>
      </div>
 
        <div className='container'>
          <h1
            className='flow-text center z-depth-5'
            style={{ background: theme.bgc, color: theme.text }}
          >
            We provide you the perfect tool to do just that!
          </h1>
        
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
