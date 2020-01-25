import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const About = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className='container'
      style={{ color: theme.text, background: theme.bgc }}
      id='about'
    >
      <h1 className='center'>You're In the Right Place!</h1>
      <p className='flow-text'>
        There is a proper way to take measurements to give the best fit when
        making a garment. Your finished garment will only fit as well as the
        accuracy of the measurements it is based upon. Whether it's for personal
        use or to serve your clients, accurate measurements are essential for a
        proper fit.
      </p>
      <h4 className='center flow-text'>
        <strong>We provide you the perfect tool to do just that!</strong>
      </h4>
      <br></br>
    </div>
  );
};

export default About;
