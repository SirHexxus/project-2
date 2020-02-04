import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "./Measure.css";

const Measurement = () => {
  const [state, setState] = useState([
    { value: 55, id: "clientName" },
    { value: 55, id: "projectName" },
    { value: 55, id: "email" },
    { value: 55, id: "phone" },
    { value: 55, id: "suitSize" },
    { value: 55, id: "dressSize" },
    { value: 55, id: "shirtSize" },
    { value: 55, id: "pantWaist" },
    { value: 55, id: "pantInseam" },
    { value: 55, id: "hatSize" },
    { value: 55, id: "shoeSize" },
    { value: 55, id: "height", unit: "in" },
    { value: 55, id: "weight", unit: "" },
    { value: 55, id: "hairColor" },
    { value: 55, id: "eyeColor" },
    { value: 55, id: "handedness" },
    { value: 55, id: "colorPref" },
    { value: 55, id: "headDiam", unit: "" },
    { value: 55, id: "headOver", unit: "" },
    { value: 55, id: "neck", unit: "" },
    { value: 55, id: "neckFront", unit: "" },
    { value: 55, id: "neckBack", unit: "" },
    { value: 55, id: "bust", unit: "" },
    { value: 55, id: "chest", unit: "" },
    { value: 55, id: "bustFront", unit: "" },
    { value: 55, id: "bustBack", unit: "" },
    { value: 55, id: "bustPtp", unit: "" },
    { value: 55, id: "chestFront", unit: "" },
    { value: 55, id: "shoulderFront", unit: "" },
    { value: 55, id: "shoulderBack", unit: "" },
    { value: 55, id: "shoulderSeam", unit: "" },
    { value: 55, id: "slope", unit: "" },
    { value: null, id: "shoulderCtrFront", unit: "" },
    { value: null, id: "shoulderCtrBack", unit: "" },
    { value: null, id: "armscyeFront", unit: "" },
    { value: null, id: "armholeSnug", unit: "" },
    { value: null, id: "underarmSeam", unit: "" },
    { value: null, id: "waist", unit: "" },
    { value: null, id: "neckToWaistFront", unit: "" },
    { value: null, id: "neckToWaistBack", unit: "" },
    { value: null, id: "hipAtHipbone", unit: "" },
    { value: null, id: "hipWaist", unit: "" },
    { value: null, id: "lgHipAcross", unit: "" },
    { value: null, id: "lgHipVert", unit: "" },
    { value: null, id: "neckToFloor", unit: "" },
    { value: null, id: "waistToFloor", unit: "" },
    { value: null, id: "waistToBelowKnee", unit: "" },
    { value: null, id: "inseam", unit: "" },
    { value: null, id: "kneeToAnkle", unit: "" },
    { value: null, id: "upperThigh", unit: "" },
    { value: null, id: "upperThighFlexed", unit: "" },
    { value: null, id: "knee", unit: "" },
    { value: null, id: "kneeFlexed", unit: "" },
    { value: null, id: "calf", unit: "" },
    { value: null, id: "ankle", unit: "" },
    { value: null, id: "overallRise", unit: "" },
    { value: null, id: "riseFront", unit: "" },
    { value: null, id: "riseBack", unit: "" },
    { value: null, id: "armLength", unit: "" },
    { value: null, id: "overarm", unit: "" },
    { value: null, id: "armToElbow", unit: "" },
    { value: null, id: "elbowToWrist", unit: "" },
    { value: null, id: "bicep", unit: "" },
    { value: null, id: "bicepFlexed", unit: "" },
    { value: null, id: "elbow", unit: "" },
    { value: null, id: "wrist", unit: "" },
    { value: null, id: "hand", unit: "" },
    { value: null, id: "custom1", unit: "" },
    { value: null, id: "custom2", unit: "" },
    { value: null, id: "custom3", unit: "" },
    { value: null, id: "custom4", unit: "" },
    { value: null, id: "custom5", unit: "" },
    { value: null, id: "notes" },
    { isImperial: true }
  ]);

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className='measurements'
      style={{
        backgroundColor: theme.bgc
      }}
    >
      <h3 className='center'>Client Info</h3>
      <div className='row'>
        <ul className='measurements'>
          {state.map((initState, index) => (
            <div
              className='input-field col s3'
              style={{
                background: theme.bgc
              }}
              key={index}
            >
              <li id={initState.id} value={initState.value}>
                {initState.value}
              </li>
              <label htmlFor={initState.id} className='active'>
                {initState.id}
              </label>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Measurement;
