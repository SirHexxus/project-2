import React, { Component } from "react";
import "./Measure.css";
import { ThemeContext } from "../../Context/ThemeContext";
import Speech from "../Voice/Speech";

const initialState = [
  { value: "", id: "clientName" },
  { value: "", id: "projectName" },
  { value: "", id: "email" },
  { value: "", id: "phone" },
  { value: "", id: "suitSize" },
  { value: "", id: "dressSize" },
  { value: "", id: "shirtSize" },
  { value: "", id: "pantWaist" },
  { value: "", id: "pantInseam" },
  { value: "", id: "hatSize" },
  { value: "", id: "shoeSize" },
  { value: "", id: "height" },
  { value: "", id: "weight" },
  { value: "", id: "hairColor" },
  { value: "", id: "eyeColor" },
  { value: "", id: "handedness" },
  { value: "", id: "colorPref" },
  { value: "unchecked", id: "units" },
  { value: "", id: "headDiam" },
  { value: "", id: "headOver" },
  { value: "", id: "neck" },
  { value: "", id: "neckFront" },
  { value: "", id: "neckBack" },
  { value: "", id: "bust" },
  { value: "", id: "chest" },
  { value: "", id: "bustFront" },
  { value: "", id: "bustBack" },
  { value: "", id: "bustPtp" },
  { value: "", id: "chestFront" },
  { value: "", id: "shoulderFront" },
  { value: "", id: "shoulderBack" },
  { value: "", id: "shoulderSeam" },
  { value: "", id: "slope" },
  { value: "", id: "shoulderCtrFront" },
  { value: "", id: "shoulderCtrBack" },
  { value: "", id: "armscyeFront" },
  { value: "", id: "armholeSnug" },
  { value: "", id: "underarmSeam" },
  { value: "", id: "waist" },
  { value: "", id: "neckToWaistFront" },
  { value: "", id: "neckToWaistBack" },
  { value: "", id: "hipAtHipbone" },
  { value: "", id: "hipWaist" },
  { value: "", id: "lgHipAcross" },
  { value: "", id: "lgHipVert" },
  { value: "", id: "neckToFloor" },
  { value: "", id: "waistToFloor" },
  { value: "", id: "waistToBelowKnee" },
  { value: "", id: "inseam" },
  { value: "", id: "kneeToAnkle" },
  { value: "", id: "upperThigh" },
  { value: "", id: "upperThighFlexed" },
  { value: "", id: "knee" },
  { value: "", id: "kneeFlexed" },
  { value: "", id: "calf" },
  { value: "", id: "ankle" },
  { value: "", id: "overallRise" },
  { value: "", id: "riseFront" },
  { value: "", id: "riseBack" },
  { value: "", id: "armLength" },
  { value: "", id: "overarm" },
  { value: "", id: "armToElbow" },
  { value: "", id: "elbowToWrist" },
  { value: "", id: "bicep" },
  { value: "", id: "bicepFlexed" },
  { value: "", id: "elbow" },
  { value: "", id: "wrist" },
  { value: "", id: "hand" },
  { value: "", id: "custom1" },
  { value: "", id: "custom2" },
  { value: "", id: "custom3" },
  { value: "", id: "custom4" },
  { value: "", id: "custom5" },
  { value: "", id: "notes" }
];

class NewMeasurement extends Component {
  state = {
    measurements: initialState
  };

  // handleChange = e => {
  //   this.setState({
  //     [e.target.id]:
  //       e.target.type === 'checkbox' ? e.target.checked : e.target.value
  //   });
  //   console.log(this.state);
  // };

  handleChange = e => {
    this.setState({
      measurements: this.state.measurements.map(measure => {
        if (measure.id === e.target.id) {
          if (e.target.type === "checkbox") {
            measure.value = e.target.checked;
          } else {
            measure.value = e.target.value;
          }
        }
        return measure;
      })
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log("Submitted");
    console.log(this.state);
    document.getElementById("NMForm").reset();
    this.setState({ initialState });
  };

  handleVoice = (voiceInput, name) => {
    console.log(voiceInput);
    console.log(this.state.measurements);
    this.setState({
      measurements: this.state.measurements.map(measure => {
        if (measure.id === name) {
          measure.value = voiceInput;
        }
        return measure;
      })
    });
  };

  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <main>
        <div className='scroll' style={{ backgroundColor: theme.bgc }}>
          <form id='NMForm' onSubmit={this.handleSubmit}>
            <h3 className='center-align'>Client Info</h3>
            <div className='row'>
              {/* {this.state.measurements.map((initState, index) => (
                <div className='input-field col s6'>
                  <i className='material-icons prefix'>account_circle</i>
                  <input
                    type='text'
                    onChange={this.handleChange}
                    placeholder={initState.id}
                    id={initState.id}
                    value={this.state.measurements[index].value}
                  />
                  <label htmlFor={initState.id} className='active'>
                    {initState.id} (Required)
                  </label>
                  <Speech name={initState.id} handleVoice={this.handleVoice} />
                </div>
              ))} */}
              <div className='input-field col s6'>
                <i className='material-icons prefix'>account_circle</i>
                <input
                  type='text'
                  onChange={this.handleChange}
                  placeholder='John Smith'
                  id='clientName'
                  value={this.state.measurements[0].value}
                />
                <label htmlFor='clientName' className='active'>
                  Client Name (Required)
                </label>
              </div>
              <div className='input-field col s6'>
                <i className='material-icons prefix'>assignment</i>
                <input
                  type='text'
                  value={this.state.measurements[1].value}
                  onChange={this.handleChange}
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
                  value={this.state.measurements[2].value}
                  onChange={this.handleChange}
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
                  value={this.state.measurements[3].value}
                  onChange={this.handleChange}
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
                    <Speech name='suitSize' handleVoice={this.handleVoice} />
                    <i className='material-icons prefix'>wc</i>
                    <input
                      type='text'
                      value={this.state.measurements[4].value}
                      onChange={this.handleChange}
                      placeholder='Enter Size'
                      id='suitSize'
                    />
                    <label htmlFor='suitSize' className='active'>
                      Suit Size
                    </label>
                  </div>
                  {/* Dress Size */}
                  <div className='input-field col s12 m6 l3'>
                    <Speech name='dressSize' handleVoice={this.handleVoice} />
                    <i className='material-icons prefix'>wc</i>
                    <input
                      type='text'
                      value={this.state.measurements[5].value}
                      onChange={this.handleChange}
                      placeholder='Enter Size'
                      id='dressSize'
                    />
                    <label htmlFor='dressSize' className='active'>
                      Dress Size
                    </label>
                  </div>
                  {/* Shirt Size */}
                  <div className='input-field col s12 m6 l3'>
                    <Speech name='shirtSize' handleVoice={this.handleVoice} />
                    <i className='material-icons prefix'>perm_identity</i>
                    <input
                      type='text'
                      value={this.state.measurements[6].value}
                      onChange={this.handleChange}
                      placeholder='Enter Size'
                      id='shirtSize'
                    />
                    <label htmlFor='shirtSize' className='active'>
                      Shirt Size
                    </label>
                  </div>
                  {/* Pant Waist */}
                  <div className='input-field col s12 m6 l3'>
                    <Speech name='pantWaist' handleVoice={this.handleVoice} />
                    <i className='material-icons prefix'>accessibility</i>
                    <input
                      type='text'
                      value={this.state.measurements[7].value}
                      onChange={this.handleChange}
                      placeholder='Enter Size'
                      id='pantWaist'
                    />
                    <label htmlFor='pantWaist' className='active'>
                      Pant Waist
                    </label>
                  </div>
                  {/* Pant Inseam */}
                  <div className='input-field col s12 m6 l3'>
                    <Speech name='pantInseam' handleVoice={this.handleVoice} />
                    <i className='material-icons prefix'>accessibility</i>
                    <input
                      type='text'
                      value={this.state.measurements[8].value}
                      onChange={this.handleChange}
                      placeholder='Enter Size'
                      id='pantInseam'
                    />
                    <label htmlFor='pantInseam' className='active'>
                      Pant Inseam
                    </label>
                  </div>
                  {/* Hat Size */}
                  <div className='input-field col s12 m6 l3'>
                    <Speech name='hatSize' handleVoice={this.handleVoice} />
                    <i className='material-icons prefix'>insert_emoticon</i>
                    <input
                      type='text'
                      value={this.state.measurements[9].value}
                      onChange={this.handleChange}
                      placeholder='Enter Size'
                      id='hatSize'
                    />
                    <label htmlFor='hatSize' className='active'>
                      Hat Size
                    </label>
                  </div>
                  {/* Shoe Size */}
                  <div className='input-field col s12 m6 l3'>
                    <Speech name='shoeSize' handleVoice={this.handleVoice} />
                    <i className='material-icons prefix'>directions_walk</i>
                    <input
                      type='text'
                      value={this.state.measurements[10].value}
                      onChange={this.handleChange}
                      placeholder='Shoe Size'
                      id='shoeSize'
                    />
                    <label htmlFor='shoeSize' className='active'>
                      Shoe Size
                    </label>
                  </div>
                  {/* Height */}
                  <div className='input-field col s12 m6 l3'>
                    <Speech name='height' handleVoice={this.handleVoice} />
                    <i className='material-icons prefix'>nature_people</i>
                    <input
                      type='text'
                      value={this.state.measurements[11].value}
                      onChange={this.handleChange}
                      placeholder='Height in Inches'
                      id='height'
                    />
                    <label htmlFor='height' className='active'>
                      Height
                    </label>
                  </div>
                  {/* Weight */}
                  <div className='input-field col s12 m6 l3'>
                    <Speech name='weight' handleVoice={this.handleVoice} />
                    <i className='material-icons prefix'>money</i>
                    <input
                      type='text'
                      value={this.state.measurements[12].value}
                      onChange={this.handleChange}
                      placeholder='Weight in lbs'
                      id='weight'
                    />
                    <label htmlFor='weight' className='active'>
                      Weight
                    </label>
                  </div>
                  {/* Hair Color */}
                  <div className='input-field col s12 m6 l3'>
                    <Speech name='hairColor' handleVoice={this.handleVoice} />
                    <i className='material-icons prefix'>face</i>
                    <input
                      type='text'
                      value={this.state.measurements[13].value}
                      onChange={this.handleChange}
                      placeholder='Brunette'
                      id='hairColor'
                    />
                    <label htmlFor='hairColor' className='active'>
                      Hair Color
                    </label>
                  </div>
                  {/* Eye Color */}
                  <div className='input-field col s12 m6 l3'>
                    <Speech name='eyeColor' handleVoice={this.handleVoice} />
                    <i className='material-icons prefix'>visibility</i>
                    <input
                      type='text'
                      value={this.state.measurements[14].value}
                      onChange={this.handleChange}
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
                    <Speech name='handedness' handleVoice={this.handleVoice} />
                    <i className='material-icons prefix'>pan_tool</i>
                    <input
                      type='text'
                      id='handedness'
                      defaultValue={this.state.measurements[15].value}
                      placeholder='Left, Right, Amb'
                      className='center'
                    />
                    <label htmlFor='handedness' className='active center'>
                      Handedness
                    </label>
                  </div>
                  <div className='row'>
                    <div className='col s12'>
                      <div className='row'>
                        <div className='input-field col s12 center'>
                          <Speech
                            name='colorPref'
                            handleVoice={this.handleVoice}
                          />
                          <i className='material-icons prefix'>color_lens</i>
                          <textarea
                            name='colorPref'
                            className='materialize-textarea'
                            onChange={this.handleChange}
                            id='colorPref'
                            cols={30}
                            rows={10}
                            placeholder=' '
                            value={this.state.measurements[16].value}
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
                        onChange={this.handleChange}
                        id='units'
                        checked={this.state.measurements[17].value}
                      />
                      <span className='lever' />
                      Centimeters
                    </label>
                  </div>
                </div>
                <div className='row'>
                  <div className='input-field col s12 m6 l3'>
                    <Speech name='headDiam' handleVoice={this.handleVoice} />
                    <input
                      type='text'
                      value={this.state.measurements[18].value}
                      onChange={this.handleChange}
                      placeholder='1'
                      id='headDiam'
                      className='center'
                    />
                    <label htmlFor='headDiam' className='active'>
                      Head Around
                    </label>
                  </div>
                  <div className='input-field col s12 m6 l3'>
                    <Speech name='headOver' handleVoice={this.handleVoice} />
                    <input
                      type='text'
                      value={this.state.measurements[19].value}
                      onChange={this.handleChange}
                      placeholder='2'
                      id='headOver'
                      className='center'
                    />
                    <label htmlFor='headOver' className='active'>
                      Head Over Top
                    </label>
                  </div>
                  <div className='input-field col s12 m6 l3'>
                    <Speech name='neck' handleVoice={this.handleVoice} />
                    <input
                      type='text'
                      value={this.state.measurements[20].value}
                      onChange={this.handleChange}
                      placeholder='3'
                      id='neck'
                      className='center'
                    />
                    <label htmlFor='neck' className='active'>
                      Neck
                    </label>
                  </div>
                  <div className='input-field col s12 m6 l3'>
                    <Speech name='neckFront' handleVoice={this.handleVoice} />
                    <input
                      type='text'
                      value={this.state.measurements[21].value}
                      onChange={this.handleChange}
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
                    <Speech name='neckBack' handleVoice={this.handleVoice} />
                    <input
                      type='text'
                      value={this.state.measurements[22].value}
                      onChange={this.handleChange}
                      placeholder='5'
                      className='center'
                      id='neckBack'
                    />
                    <label htmlFor='neckBack' className='active'>
                      Neck Height, Back
                    </label>
                  </div>
                  <div className='input-field col s12 m6 l3'>
                    <Speech name='bust' handleVoice={this.handleVoice} />
                    <input
                      type='text'
                      value={this.state.measurements[23].value}
                      onChange={this.handleChange}
                      placeholder='6'
                      id='bust'
                      className='center'
                    />
                    <label htmlFor='bust' className='active'>
                      Bust
                    </label>
                  </div>
                  <div className='input-field col s12 m6 l3'>
                    <Speech name='chest' handleVoice={this.handleVoice} />
                    <input
                      type='text'
                      value={this.state.measurements[24].value}
                      onChange={this.handleChange}
                      placeholder='7'
                      id='chest'
                      className='center'
                    />
                    <label htmlFor='chest' className='active'>
                      Chest
                    </label>
                  </div>
                  <div className='input-field col s12 m6 l3'>
                    <Speech name='bustFront' handleVoice={this.handleVoice} />
                    <input
                      type='text'
                      value={this.state.measurements[25].value}
                      onChange={this.handleChange}
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
                    <Speech name='bustBack' handleVoice={this.handleVoice} />
                    <input
                      type='text'
                      value={this.state.measurements[26].value}
                      onChange={this.handleChange}
                      placeholder='9'
                      id='bustBack'
                      className='center'
                    />
                    <label htmlFor='bustBack' className='active'>
                      Bust, Back
                    </label>
                  </div>
                  <div className='input-field col s12 m6 l3'>
                    <Speech name='bustPtp' handleVoice={this.handleVoice} />
                    <input
                      type='text'
                      value={this.state.measurements[27].value}
                      onChange={this.handleChange}
                      placeholder='10'
                      id='bustPtp'
                      className='center'
                    />
                    <label htmlFor='bustPtp' className='active'>
                      Bust, Point-to-Point
                    </label>
                  </div>
                  <div className='input-field col s12 m6 l3'>
                    <Speech name='chestFront' handleVoice={this.handleVoice} />
                    <input
                      type='text'
                      value={this.state.measurements[28].value}
                      onChange={this.handleChange}
                      placeholder='11'
                      id='chestFront'
                      className='center'
                    />
                    <label htmlFor='chestFront' className='active'>
                      Chest, Front
                    </label>
                  </div>
                  <div className='input-field col s12 m6 l3'>
                    <Speech
                      name='shoulderFront'
                      handleVoice={this.handleVoice}
                    />
                    <input
                      type='text'
                      value={this.state.measurements[29].value}
                      onChange={this.handleChange}
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
                    <Speech
                      name='shoulderBack'
                      handleVoice={this.handleVoice}
                    />
                    <input
                      type='text'
                      value={this.state.measurements[30].value}
                      onChange={this.handleChange}
                      placeholder='13'
                      id='shoulderBack'
                      className='center'
                    />
                    <label htmlFor='shoulderBack' className='active'>
                      Shoulder, Back
                    </label>
                  </div>
                  <div className='input-field col s12 m6 l3'>
                    <Speech
                      name='shoulderSeam'
                      handleVoice={this.handleVoice}
                    />
                    <input
                      type='text'
                      value={this.state.measurements[31].value}
                      onChange={this.handleChange}
                      placeholder='14'
                      id='shoulderSeam'
                      className='center'
                    />
                    <label htmlFor='shoulderSeam' className='active'>
                      Shoulder, Seam
                    </label>
                  </div>
                  <div className='input-field col s12 m6 l3'>
                    <Speech name='slope' handleVoice={this.handleVoice} />
                    <input
                      type='text'
                      value={this.state.measurements[32].value}
                      onChange={this.handleChange}
                      placeholder='15'
                      id='slope'
                      className='center'
                    />
                    <label htmlFor='slope' className='active'>
                      Slope
                    </label>
                  </div>
                  <div className='input-field col s12 m6 l3'>
                    <Speech
                      name='shoulderCtrFront'
                      handleVoice={this.handleVoice}
                    />
                    <input
                      type='text'
                      value={this.state.measurements[33].value}
                      onChange={this.handleChange}
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
                  <Speech
                    name='shoulderCtrBack'
                    handleVoice={this.handleVoice}
                  />
                  <input
                    type='text'
                    value={this.state.measurements[34].value}
                    onChange={this.handleChange}
                    placeholder='17'
                    id='shoulderCtrBack'
                    className='center'
                  />
                  <label htmlFor='shoulderCtrBack' className='active'>
                    Shoulder Tip to Center Waist, Back
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='armscyeFront' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[35].value}
                    onChange={this.handleChange}
                    placeholder='18'
                    id='armscyeFront'
                    className='center'
                  />
                  <label htmlFor='armscyeFront' className='active'>
                    Armscye, Front
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='armholeSnug' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[36].value}
                    onChange={this.handleChange}
                    placeholder='19'
                    id='armholeSnug'
                    className='center'
                  />
                  <label htmlFor='armholeSnug' className='active'>
                    Armhole, Snug
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='underarmSeam' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[37].value}
                    onChange={this.handleChange}
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
                  <Speech name='waist' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[38].value}
                    onChange={this.handleChange}
                    placeholder='21'
                    id='waist'
                    className='center'
                  />
                  <label htmlFor='waist' className='active'>
                    Waist
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech
                    name='neckToWaistFront'
                    handleVoice={this.handleVoice}
                  />
                  <input
                    type='text'
                    value={this.state.measurements[39].value}
                    onChange={this.handleChange}
                    placeholder='22'
                    id='neckToWaistFront'
                    className='center'
                  />
                  <label htmlFor='neckToWaistFront' className='active'>
                    Neck to Waist, Front
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech
                    name='neckToWaistBack'
                    handleVoice={this.handleVoice}
                  />
                  <input
                    type='text'
                    value={this.state.measurements[40].value}
                    onChange={this.handleChange}
                    placeholder='23'
                    id='neckToWaistBack'
                    className='center'
                  />
                  <label htmlFor='neckToWaistBack' className='active'>
                    Neck to Waist, Back
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='hipAtHipbone' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[41].value}
                    onChange={this.handleChange}
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
                  <Speech name='hipWaist' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[42].value}
                    onChange={this.handleChange}
                    placeholder='25'
                    id='hipWaist'
                    className='center'
                  />
                  <label htmlFor='hipWaist' className='active'>
                    Hip to Waist
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='lgHipAcross' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[43].value}
                    onChange={this.handleChange}
                    placeholder='26'
                    id='lgHipAcross'
                    className='center'
                  />
                  <label htmlFor='lg-hip-across' className='active'>
                    Large Hip, Across
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='lgHipVert' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[44].value}
                    onChange={this.handleChange}
                    placeholder='27'
                    id='lgHipVert'
                    className='center'
                  />
                  <label htmlFor='lgHipVert' className='active'>
                    Large Hip, Vertical
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='neckToFloor' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[45].value}
                    onChange={this.handleChange}
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
                  <Speech name='waistToFloor' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[46].value}
                    onChange={this.handleChange}
                    placeholder='29'
                    id='waistToFloor'
                    className='center'
                  />
                  <label htmlFor='waistToFloor' className='active'>
                    Waist to Floor
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech
                    name='waistToBelowKnee'
                    handleVoice={this.handleVoice}
                  />
                  <input
                    type='text'
                    value={this.state.measurements[47].value}
                    onChange={this.handleChange}
                    placeholder='30'
                    id='waistToBelowKnee'
                    className='center'
                  />
                  <label htmlFor='waistToBelowKnee' className='active'>
                    Waist to Just Below Knee
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='inseam' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[48].value}
                    onChange={this.handleChange}
                    placeholder='31'
                    id='inseam'
                    className='center'
                  />
                  <label htmlFor='inseam' className='active'>
                    Inseam
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='kneeToAnkle' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[49].value}
                    onChange={this.handleChange}
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
                  <Speech name='upperThigh' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[50].value}
                    onChange={this.handleChange}
                    placeholder='33'
                    id='upperThigh'
                    className='center'
                  />
                  <label htmlFor='upperThigh' className='active'>
                    Upper Thigh
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech
                    name='upperThighFlexed'
                    handleVoice={this.handleVoice}
                  />
                  <input
                    type='text'
                    value={this.state.measurements[51].value}
                    onChange={this.handleChange}
                    placeholder='34'
                    id='upperThighFlexed'
                    className='center'
                  />
                  <label htmlFor='upperThighFlexed' className='active'>
                    Upper Thigh, Flexed
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='knee' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[52].value}
                    onChange={this.handleChange}
                    placeholder='35'
                    id='knee'
                    className='center'
                  />
                  <label htmlFor='knee' className='active'>
                    Knee
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='kneeFlexed' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[53].value}
                    onChange={this.handleChange}
                    placeholder='36'
                    id='kneeFlexed'
                    className='center'
                  />
                  <label htmlFor='kneeFlexed' className='active'>
                    Knee, Flexed
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='calf' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[54].value}
                    onChange={this.handleChange}
                    placeholder='37'
                    id='calf'
                    className='center'
                  />
                  <label htmlFor='calf' className='active'>
                    Calf
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='ankle' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[55].value}
                    onChange={this.handleChange}
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
                  <Speech name='overallRise' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[56].value}
                    onChange={this.handleChange}
                    placeholder='39'
                    id='overallRise'
                    className='center'
                  />
                  <label htmlFor='overallRise' className='active'>
                    Overall Rise
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='riseFront' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[57].value}
                    onChange={this.handleChange}
                    placeholder='40'
                    id='riseFront'
                    className='center'
                  />
                  <label htmlFor='riseFront' className='active'>
                    Rise, Front
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='riseBack' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[58].value}
                    onChange={this.handleChange}
                    placeholder='41'
                    id='riseBack'
                    className='center'
                  />
                  <label htmlFor='riseBack' className='active'>
                    Rise, Back
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='armLength' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[59].value}
                    onChange={this.handleChange}
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
                  <Speech name='overarm' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[60].value}
                    onChange={this.handleChange}
                    placeholder='43'
                    id='overarm'
                    className='center'
                  />
                  <label htmlFor='overarm' className='active'>
                    Overarm
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='armToElbow' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[61].value}
                    onChange={this.handleChange}
                    placeholder='44'
                    id='armToElbow'
                    className='center'
                  />
                  <label htmlFor='armToElbow' className='active'>
                    Arm to Elbow
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='elbowToWrist' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[62].value}
                    onChange={this.handleChange}
                    placeholder='45'
                    id='elbowToWrist'
                    className='center'
                  />
                  <label htmlFor='elbowToWrist' className='active'>
                    Elbow to Wrist
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='bicep' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[63].value}
                    onChange={this.handleChange}
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
                  <Speech name='bicepFlexed' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[64].value}
                    onChange={this.handleChange}
                    placeholder='47'
                    id='bicepFlexed'
                    className='center'
                  />
                  <label htmlFor='bicepFlexed' className='active'>
                    Bicep, Flexed
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='elbow' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[65].value}
                    onChange={this.handleChange}
                    placeholder='48'
                    id='elbow'
                    className='center'
                  />
                  <label htmlFor='elbow' className='active'>
                    Elbow
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='wrist' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[66].value}
                    onChange={this.handleChange}
                    placeholder='49'
                    id='wrist'
                    className='center'
                  />
                  <label htmlFor='wrist' className='active'>
                    Wrist
                  </label>
                </div>
                <div className='input-field col s12 m6 l3'>
                  <Speech name='hand' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[67].value}
                    onChange={this.handleChange}
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
                  <Speech name='custom1' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[68].value}
                    onChange={this.handleChange}
                    placeholder='Custom Measurement'
                    id='custom1'
                  />
                  <label htmlFor='custom1' className='active'>
                    Custom Measurement #1
                  </label>
                </div>
                <div className='input-field col s6 m4'>
                  <Speech name='custom2' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[69].value}
                    onChange={this.handleChange}
                    placeholder='Custom Measurement'
                    id='custom2'
                  />
                  <label htmlFor='custom2' className='active'>
                    Custom Measurement #2
                  </label>
                </div>
                <div className='input-field col s6 m4'>
                  <Speech name='custom3' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[70].value}
                    onChange={this.handleChange}
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
                  <Speech name='custom4' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[71].value}
                    onChange={this.handleChange}
                    placeholder='Custom Measurement'
                    id='custom4'
                  />
                  <label htmlFor='custom4' className='active'>
                    Custom Measurement #4
                  </label>
                </div>
                <div className='input-field col s6'>
                  <Speech name='custom5' handleVoice={this.handleVoice} />
                  <input
                    type='text'
                    value={this.state.measurements[72].value}
                    onChange={this.handleChange}
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
                      <Speech name='notes' handleVoice={this.handleVoice} />
                      <textarea
                        name='notes'
                        className='materialize-textarea'
                        id='notes'
                        cols={30}
                        rows={10}
                        defaultValue={this.state.measurements[73].value}
                        onChange={this.handleChange}
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
  }
}

export default NewMeasurement;
