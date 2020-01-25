import React, { useState, useContext } from "react";
import "./Measure.css";
import { ThemeContext } from "../../Context/ThemeContext";

const NewMeasurement = () => {
  const [state, setState] = useState([
    { value: null, id: "clientName" },
    { value: null, id: "projectName" },
    { value: null, id: "email" },
    { value: null, id: "phone" },
    { value: null, id: "suitSize" },
    { value: null, id: "dressSize" },
    { value: null, id: "shirtSize" },
    { value: null, id: "pantWaist" },
    { value: null, id: "pantInseam" },
    { value: null, id: "hatSize" },
    { value: null, id: "shoeSize" },
    { value: null, id: "height" },
    { value: null, id: "weight" },
    { value: null, id: "hairColor" },
    { value: null, id: "eyeColor" },
    { value: null, id: "handedness" },
    { value: null, id: "colorPref" },
    { value: "unchecked", id: "units" },
    { value: null, id: "headDiam" },
    { value: null, id: "headOver" },
    { value: null, id: "neck" },
    { value: null, id: "neckFront" },
    { value: null, id: "neckBack" },
    { value: null, id: "bust" },
    { value: null, id: "chest" },
    { value: null, id: "bustFront" },
    { value: null, id: "bustBack" },
    { value: null, id: "bustPtp" },
    { value: null, id: "chestFront" },
    { value: null, id: "shoulderFront" },
    { value: null, id: "shoulderBack" },
    { value: null, id: "shoulderSeam" },
    { value: null, id: "slope" },
    { value: null, id: "shoulderCtrFront" },
    { value: null, id: "shoulderCtrBack" },
    { value: null, id: "armscyeFront" },
    { value: null, id: "armholeSnug" },
    { value: null, id: "underarmSeam" },
    { value: null, id: "waist" },
    { value: null, id: "neckToWaistFront" },
    { value: null, id: "neckToWaistBack" },
    { value: null, id: "hipAtHipbone" },
    { value: null, id: "hipWaist" },
    { value: null, id: "lgHipAcross" },
    { value: null, id: "lgHipVert" },
    { value: null, id: "neckToFloor" },
    { value: null, id: "waistToFloor" },
    { value: null, id: "waistToBelowKnee" },
    { value: null, id: "inseam" },
    { value: null, id: "kneeToAnkle" },
    { value: null, id: "upperThigh" },
    { value: null, id: "upperThighFlexed" },
    { value: null, id: "knee" },
    { value: null, id: "kneeFlexed" },
    { value: null, id: "calf" },
    { value: null, id: "ankle" },
    { value: null, id: "overallRise" },
    { value: null, id: "riseFront" },
    { value: null, id: "riseBack" },
    { value: null, id: "armLength" },
    { value: null, id: "overarm" },
    { value: null, id: "armToElbow" },
    { value: null, id: "elbowToWrist" },
    { value: null, id: "bicep" },
    { value: null, id: "bicepFlexed" },
    { value: null, id: "elbow" },
    { value: null, id: "wrist" },
    { value: null, id: "hand" },
    { value: null, id: "custom1" },
    { value: null, id: "custom2" },
    { value: null, id: "custom3" },
    { value: null, id: "custom4" },
    { value: null, id: "custom5" },
    { value: null, id: "notes" }
  ]);

  let handleChange = e => {
    setState({
      [e.target.id]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    });
    console.log(state);
  };

  let handleSubmit = e => {
    e.preventDefault();

    console.log("Submitted");
    console.log(state);
    document.getElementById("NMForm").reset();
    setState({ state });
  };

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <main>
      <div className='scroll' style={{ backgroundColor: theme.bgc }}>
        <form id='NMForm' onSubmit={handleSubmit}>
          <h3 className='center-align'>Client Info</h3>
          <div className='row'>
            <div className='input-field col s6'>
              <i className='material-icons prefix'>account_circle</i>
              <input
                type='text'
                onChange={handleChange}
                placeholder='John Smith'
                id='clientName'
                value={state.clientName}
              />
              <label htmlFor='clientName' className='active'>
                Client Name (Required)
              </label>
            </div>
            <div className='input-field col s6'>
              <i className='material-icons prefix'>assignment</i>
              <input
                type='text'
                onChange={handleChange}
                placeholder='Project Name'
                id='projectName'
              />
              <label htmlFor='projectName' className='active'>
                Project Name (Required)
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s6'>
              <i className='material-icons prefix'>email</i>
              <input
                id='email'
                type='email'
                onChange={handleChange}
                placeholder='youremail@mail.com'
                className='validate'
              />
              <label htmlFor='email' className='active'>
                Email
              </label>
            </div>
            <div className='input-field col s6'>
              <i className='material-icons prefix'>phone</i>
              <input
                id='phone'
                onChange={handleChange}
                placeholder='(555) 555-5555'
                type='tel'
                className='validate'
              />
              <label htmlFor='phone' className='active'>
                Telephone
              </label>
            </div>
          </div>
          <div id='geninfo'>
            <div className='center'>
              <h3 className='center-align'>General Sizing Information</h3>
              <div className='row'>
                {/* Suit or Dress Size */}
                <div className='input-field col s12 m6 l3'>
                  <i className='material-icons prefix'>wc</i>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='Enter Size'
                    id='suitSize'
                  />
                  <label htmlFor='suitSize' className='active'>
                    Suit Size
                  </label>
                  {/* Select Suit or Dress */}
                  {/* <p>
                  <label>
                    <input name='group1' type='radio' />
                    <span>Suit</span>
                  </label>
                  <label>
                    <input name='group1' type='radio' />
                    <span>Dress</span>
                  </label>
                </p> */}
                </div>
                {/* Dress Size */}
                <div className='input-field col s12 m6 l3'>
                  <i className='material-icons prefix'>wc</i>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='Enter Size'
                    id='dressSize'
                  />
                  <label htmlFor='dressSize' className='active'>
                    Dress Size
                  </label>
                </div>
                {/* Shirt Size */}
                <div className='input-field col s12 m6 l3'>
                  <i className='material-icons prefix'>perm_identity</i>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='Enter Size'
                    id='shirtSize'
                  />
                  <label htmlFor='shirtSize' className='active'>
                    Shirt Size
                  </label>
                </div>
                {/* Pant Waist */}
                <div className='input-field col s12 m6 l3'>
                  <i className='material-icons prefix'>accessibility</i>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='Enter Size'
                    id='pantWaist'
                  />
                  <label htmlFor='pantWaist' className='active'>
                    Pant Waist
                  </label>
                </div>
                {/* Pant Inseam */}
                <div className='input-field col s12 m6 l3'>
                  <i className='material-icons prefix'>accessibility</i>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='Enter Size'
                    id='pantInseam'
                  />
                  <label htmlFor='pantInseam' className='active'>
                    Pant Inseam
                  </label>
                </div>
                {/* Hat Size */}
                <div className='input-field col s12 m6 l3'>
                  <i className='material-icons prefix'>insert_emoticon</i>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='Enter Size'
                    id='hatSize'
                  />
                  <label htmlFor='hatSize' className='active'>
                    Hat Size
                  </label>
                </div>
                {/* Shoe Size */}
                <div className='input-field col s12 m6 l3'>
                  <i className='material-icons prefix'>directions_walk</i>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='Shoe Size'
                    id='shoeSize'
                  />
                  <label htmlFor='shoeSize' className='active'>
                    Shoe Size
                  </label>
                </div>
                {/* Height */}
                <div className='input-field col s12 m6 l3'>
                  <i className='material-icons prefix'>nature_people</i>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='Height in Inches'
                    id='height'
                  />
                  <label htmlFor='height' className='active'>
                    Height
                  </label>
                </div>
                {/* Weight */}
                <div className='input-field col s12 m6 l3'>
                  <i className='material-icons prefix'>money</i>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='Weight in lbs'
                    id='weight'
                  />
                  <label htmlFor='weight' className='active'>
                    Weight
                  </label>
                </div>
                {/* Hair Color */}
                <div className='input-field col s12 m6 l3'>
                  <i className='material-icons prefix'>face</i>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='Brunette'
                    id='hairColor'
                  />
                  <label htmlFor='hairColor' className='active'>
                    Hair Color
                  </label>
                </div>
                {/* Eye Color */}
                <div className='input-field col s12 m6 l3'>
                  <i className='material-icons prefix'>visibility</i>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='Hazel'
                    id='eyeColor'
                  />
                  <label htmlFor='eyeColor' className='active'>
                    Eye Color
                  </label>
                </div>
                {/* Handedness */}
                {/* <p> */}
                <div className='input-field col s12 m6 l3'>
                  <i className='material-icons prefix'>pan_tool</i>
                  <input
                    type='text'
                    id='handedness'
                    placeholder='Left, Right, Amb'
                    className='center'
                  />
                  <label htmlFor='handedness' className='active center'>
                    Handedness
                  </label>
                </div>
                {/* <label>
                    <input
                      id='rightHanded'
                      name='handedness'
                      type='radio'
                      onChange={handleChange}
                    />
                    <span>Right-Handed</span>
                  </label>
                  <label>
                    <input
                      id='leftHanded'
                      name='handedness'
                      type='radio'
                      onChange={handleChange}
                    />
                    <span>Left-Handed</span>
                  </label>
                  <label>
                    <input
                      id='ambidextrous'
                      name='handedness'
                      type='radio'
                      onChange={handleChange}
                    />
                    <span>Ambidextrous</span>
                  </label>
                </p> */}
                <div className='row'>
                  <div className='col s12'>
                    <div className='row'>
                      <div className='input-field col s12 center'>
                        <i className='material-icons prefix'>color_lens</i>
                        <textarea
                          name='colorPref'
                          className='materialize-textarea'
                          onChange={handleChange}
                          id='colorPref'
                          cols={30}
                          rows={10}
                          defaultValue={""}
                        />
                        <label htmlFor='colorPref'>Color Preferences</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='measurements'>
            <div className='modal-content'>
              <h3 className='center-align'>Standard Measurements</h3>
              <div className='row'>
                <div className='switch'>
                  <label>
                    Inches
                    <input
                      type='checkbox'
                      onChange={handleChange}
                      id='units'
                      checked={state.checked}
                    />
                    <span className='lever' />
                    Centimeters
                  </label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12 m6 l3'>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='1'
                    id='headDiam'
                    className='center'
                  />
                  <label htmlFor='headDiam' className='active'>
                    Head Around
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='2'
                    id='headOver'
                    className='center'
                  />
                  <label htmlFor='headOver' className='active'>
                    Head Over Top
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='3'
                    id='neck'
                    className='center'
                  />
                  <label htmlFor='neck' className='active'>
                    Neck
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='4'
                    id='neckFront'
                    className='center'
                  />
                  <label htmlFor='neckFront' className='active center'>
                    Neck Height, Front
                  </label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12 m6 l3'>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='5'
                    className='center'
                    id='neckBack'
                  />
                  <label htmlFor='neckBack' className='active'>
                    Neck Height, Back
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='6'
                    id='bust'
                    className='center'
                  />
                  <label htmlFor='bust' className='active'>
                    Bust
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='7'
                    id='chest'
                    className='center'
                  />
                  <label htmlFor='chest' className='active'>
                    Chest
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='8'
                    id='bustFront'
                    className='center'
                  />
                  <label htmlFor='bustFront' className='active'>
                    Bust, Front
                  </label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12 m6 l3'>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='9'
                    id='bustBack'
                    className='center'
                  />
                  <label htmlFor='bustBack' className='active'>
                    Bust, Back
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='10'
                    id='bustPtp'
                    className='center'
                  />
                  <label htmlFor='bustPtp' className='active'>
                    Bust, Point-to-Point
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='11'
                    id='chestFront'
                    className='center'
                  />
                  <label htmlFor='chestFront' className='active'>
                    Chest, Front
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='12'
                    id='shoulderFront'
                    className='center'
                  />
                  <label htmlFor='shoulderFront' className='active'>
                    Shoulder, Front
                  </label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12 m6 l3'>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='13'
                    id='shoulderBack'
                    className='center'
                  />
                  <label htmlFor='shoulderBack' className='active'>
                    Shoulder, Back
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='14'
                    id='shoulderSeam'
                    className='center'
                  />
                  <label htmlFor='shoulderSeam' className='active'>
                    Shoulder, Seam
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='15'
                    id='slope'
                    className='center'
                  />
                  <label htmlFor='slope' className='active'>
                    Slope
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <input
                    type='text'
                    onChange={handleChange}
                    placeholder='16'
                    id='shoulderCtrFront'
                    className='center'
                  />
                  <label htmlFor='shoulderCtrFront' className='active'>
                    Shoulder Tip to Center Waist, Front
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div id='measurements2'>
            <div className='row'>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='17'
                  id='shoulderCtrBack'
                  className='center'
                />
                <label htmlFor='shoulderCtrBack' className='active'>
                  Shoulder Tip to Center Waist, Back
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='18'
                  id='armscyeFront'
                  className='center'
                />
                <label htmlFor='armscyeFront' className='active'>
                  Armscye, Front
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='19'
                  id='armholeSnug'
                  className='center'
                />
                <label htmlFor='armholeSnug' className='active'>
                  Armhole, Snug
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='20'
                  id='underarmSeam'
                  className='center'
                />
                <label htmlFor='underarmSeam' className='active'>
                  Underarm Seam
                </label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='21'
                  id='waist'
                  className='center'
                />
                <label htmlFor='waist' className='active'>
                  Waist
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='22'
                  id='neckToWaistFront'
                  className='center'
                />
                <label htmlFor='neckToWaistFront' className='active'>
                  Neck to Waist, Front
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='23'
                  id='neckToWaistBack'
                  className='center'
                />
                <label htmlFor='neckToWaistBack' className='active'>
                  Neck to Waist, Back
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='24'
                  id='hipAtHipbone'
                  className='center'
                />
                <label htmlFor='hipAtHipbone' className='active'>
                  Hip at the Hipbones
                </label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='25'
                  id='hipWaist'
                  className='center'
                />
                <label htmlFor='hipWaist' className='active'>
                  Hip to Waist
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='26'
                  id='lgHipAcross'
                  className='center'
                />
                <label htmlFor='lg-hip-across' className='active'>
                  Large Hip, Across
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='27'
                  id='lgHipVert'
                  className='center'
                />
                <label htmlFor='lgHipVert' className='active'>
                  Large Hip, Vertical
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='28'
                  id='neckToFloor'
                  className='center'
                />
                <label htmlFor='neckToFloor' className='active'>
                  Neck to Floor
                </label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='29'
                  id='waistToFloor'
                  className='center'
                />
                <label htmlFor='waistToFloor' className='active'>
                  Waist to Floor
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='30'
                  id='waistToBelowKnee'
                  className='center'
                />
                <label htmlFor='waistToBelowKnee' className='active'>
                  Waist to Just Below Knee
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='31'
                  id='inseam'
                  className='center'
                />
                <label htmlFor='inseam' className='active'>
                  Inseam
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='32'
                  id='kneeToAnkle'
                  className='center'
                />
                <label htmlFor='kneeToAnkle' className='active'>
                  Knee to Ankle
                </label>
              </div>
            </div>
          </div>

          <div id='measurements12 m6 l3'>
            <div className='row'>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='33'
                  id='upperThigh'
                  className='center'
                />
                <label htmlFor='upperThigh' className='active'>
                  Upper Thigh
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='34'
                  id='upperThighFlexed'
                  className='center'
                />
                <label htmlFor='upperThighFlexed' className='active'>
                  Upper Thigh, Flexed
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='35'
                  id='knee'
                  className='center'
                />
                <label htmlFor='knee' className='active'>
                  Knee
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='36'
                  id='kneeFlexed'
                  className='center'
                />
                <label htmlFor='kneeFlexed' className='active'>
                  Knee, Flexed
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='37'
                  id='calf'
                  className='center'
                />
                <label htmlFor='calf' className='active'>
                  Calf
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='38'
                  id='ankle'
                  className='center'
                />
                <label htmlFor='ankle' className='active'>
                  Ankle
                </label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='39'
                  id='overallRise'
                  className='center'
                />
                <label htmlFor='overallRise' className='active'>
                  Overall Rise
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='40'
                  id='riseFront'
                  className='center'
                />
                <label htmlFor='riseFront' className='active'>
                  Rise, Front
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='41'
                  id='riseBack'
                  className='center'
                />
                <label htmlFor='riseBack' className='active'>
                  Rise, Back
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='42'
                  id='armLength'
                  className='center'
                />
                <label htmlFor='armLength' className='active'>
                  Arm Length
                </label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='43'
                  id='overarm'
                  className='center'
                />
                <label htmlFor='overarm' className='active'>
                  Overarm
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='44'
                  id='armToElbow'
                  className='center'
                />
                <label htmlFor='armToElbow' className='active'>
                  Arm to Elbow
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='45'
                  id='elbowToWrist'
                  className='center'
                />
                <label htmlFor='elbowToWrist' className='active'>
                  Elbow to Wrist
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='46'
                  id='bicep'
                  className='center'
                />
                <label htmlFor='bicep' className='active'>
                  Bicep
                </label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='47'
                  id='bicepFlexed'
                  className='center'
                />
                <label htmlFor='bicepFlexed' className='active'>
                  Bicep, Flexed
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='48'
                  id='elbow'
                  className='center'
                />
                <label htmlFor='elbow' className='active'>
                  Elbow
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='49'
                  className='center'
                />
                <label htmlFor='wrist' className='active'>
                  Wrist
                </label>
              </div>
              <div className='input-field col s12 m6 l3'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='50'
                  id='hand'
                  className='center'
                />
                <label htmlFor='hand' className='active'>
                  Hand (Balled into a Fist)
                </label>
              </div>
            </div>
          </div>
          <div>
            <h3 className='center-align'>Custom Measurements</h3>
            <h5 className='center-align'>
              Please Enter Name of Measurement and Value
            </h5>
            <div className='row'>
              <div className='input-field col s6 m4'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='Custom Measurement'
                  id='custom1'
                />
                <label htmlFor='custom1' className='active'>
                  Custom Measurement #1
                </label>
              </div>
              <div className='input-field col s6 m4'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='Custom Measurement'
                  id='custom2'
                />
                <label htmlFor='custom2' className='active'>
                  Custom Measurement #2
                </label>
              </div>
              <div className='input-field col s6 m4'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='Custom Measurement2'
                  id='custom3'
                />
                <label htmlFor='custom3' className='active'>
                  Custom Measurement #3
                </label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s6'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='Custom Measurement'
                  id='custom4'
                />
                <label htmlFor='custom4' className='active'>
                  Custom Measurement #4
                </label>
              </div>
              <div className='input-field col s6'>
                <input
                  type='text'
                  onChange={handleChange}
                  placeholder='Custom Measurement'
                  id='custom5'
                />
                <label htmlFor='custom5' className='active'>
                  Custom Measurement #5
                </label>
              </div>
            </div>
          </div>
          <div id='proj-notes'>
            <h3 className='center-align'>Client and Project Notes</h3>
            <div className='row'>
              <div className='col s12'>
                <div className='row'>
                  <div className='input-field col s12'>
                    <i className='material-icons prefix'>edit</i>
                    <textarea
                      name='notes'
                      className='materialize-textarea'
                      id='notes'
                      cols={30}
                      rows={10}
                      defaultValue={""}
                      onChange={handleChange}
                    />
                    <label htmlFor='notes'>Enter Any Notes Here</label>
                  </div>
                </div>
                <button
                  type='submit'
                  className='btn waves-effect waves-light'
                  name='action'
                >
                  Save Measurements
                  <i className='material-icons right'>keyboard_arrow_right</i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default NewMeasurement;
