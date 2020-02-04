import React, { useContext } from "react";
import Measurements from "../Measurements/Measurement";
import { ThemeContext } from "../../Context/ThemeContext";
import "./display.css";


const Display = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className='display'
      style={{ color: theme.text, backgroundColor: theme.bgc }}
    ></div>
  );
};

export default Display;
