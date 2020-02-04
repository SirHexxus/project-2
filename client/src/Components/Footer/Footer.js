import React, { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/ThemeContext";

const Footer = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <footer style={{ color: theme.uitext }}>
      <div className='footer'>
        <div className='copy-right'>
          <p className='footer'> © 2019 Stitches &amp; Tape</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
