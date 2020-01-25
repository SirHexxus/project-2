import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "./Measure.css";

const Measurement = () => {
  const [state, setState] = useState([
    { value: "Devyn Barron", id: "clientName" },
    { value: "Devyn Stuff", id: "projectName" },
    { value: "ckbrogue@gmail.com", id: "email" },
    { value: 9092726583, id: "phone" },
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
    { value: 55, id: "shoulderCtrFront", unit: "" },
    { value: 55, id: "shoulderCtrBack", unit: "" },
    { value: 55, id: "armscyeFront", unit: "" },
    { value: 55, id: "armholeSnug", unit: "" },
    { value: 55, id: "underarmSeam", unit: "" },
    { value: 55, id: "waist", unit: "" },
    { value: 55, id: "neckToWaistFront", unit: "" },
    { value: 55, id: "neckToWaistBack", unit: "" },
    { value: 55, id: "hipAtHipbone", unit: "" },
    { value: 55, id: "hipWaist", unit: "" },
    { value: 55, id: "lgHipAcross", unit: "" },
    { value: 55, id: "lgHipVert", unit: "" },
    { value: 55, id: "neckToFloor", unit: "" },
    { value: 55, id: "waistToFloor", unit: "" },
    { value: 55, id: "waistToBelowKnee", unit: "" },
    { value: 55, id: "inseam", unit: "" },
    { value: 55, id: "kneeToAnkle", unit: "" },
    { value: 55, id: "upperThigh", unit: "" },
    { value: 55, id: "upperThighFlexed", unit: "" },
    { value: 55, id: "knee", unit: "" },
    { value: 55, id: "kneeFlexed", unit: "" },
    { value: 55, id: "calf", unit: "" },
    { value: 55, id: "ankle", unit: "" },
    { value: 55, id: "overallRise", unit: "" },
    { value: 55, id: "riseFront", unit: "" },
    { value: 55, id: "riseBack", unit: "" },
    { value: 55, id: "armLength", unit: "" },
    { value: 55, id: "overarm", unit: "" },
    { value: 55, id: "armToElbow", unit: "" },
    { value: 55, id: "elbowToWrist", unit: "" },
    { value: 55, id: "bicep", unit: "" },
    { value: 55, id: "bicepFlexed", unit: "" },
    { value: 55, id: "elbow", unit: "" },
    { value: 55, id: "wrist", unit: "" },
    { value: 55, id: "hand", unit: "" },
    { value: 55, id: "custom1", unit: "" },
    { value: 55, id: "custom2", unit: "" },
    { value: 55, id: "custom3", unit: "" },
    { value: 55, id: "custom4", unit: "" },
    { value: 55, id: "custom5", unit: "" },
    {
      value:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam iure tempora quia nihil nisi, soluta totam explicabo sint a. Saepe, magnam? Facilis nesciunt tempore ipsum harum quo vitae facere tenetur.",
      id: "notes",
      isImperial: true
    }
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
        {state.map((initState, index) => (
          <div
            className='input-field col s3 readback'
            style={{
              background: theme.bgc
            }}
          >
            <p id={initState.id} value={initState.value}>
              {initState.value}
            </p>
            <label htmlFor={initState.id} className='active'>
              {initState.id}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Measurement;
