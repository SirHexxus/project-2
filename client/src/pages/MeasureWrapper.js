import React, { useContext } from "react";
import MeasureImg from "../Components/Measurements/MeasureImg";
import { ThemeContext } from "../Context/ThemeContext";
import NewMeasurement from "../Components/Measurements/NewMeasurement";
import "../Components/Measurements/Measure.css";

const MeasureWrapper = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      style={{
        color: "#5558aa",
        background: theme.bgc
      }}
    >
      <h2 className='center'>New Measurements</h2>
      <div className='row'>
        <div className='col s12 l6'>
          <MeasureImg />
        </div>
        <div className='col s12 l6'>
          <NewMeasurement />
        </div>
      </div>
    </div>
  );
};

export default MeasureWrapper;
