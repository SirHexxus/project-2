import React, { useContext } from "react";
import "./Title.css";
import { ThemeContext } from "../../Context/ThemeContext";

const Title = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <section
      className='container section'
      style={{
        color: theme.text,
        background: theme.bgc
      }}
    >
      <div className='row'>
        <div className='col s12'>
          <h2 className='center title'>
            The only measurement tracking tool you’ll ever need!
          </h2>
        </div>
      </div>
      <div className='row' id='about'>
        <p className='flow-text'>
          The Stitches and Tape (S&T) measurement tracker is a simplified, yet
          dynamic, tracking tool. It allows you, the Clothier, to store and
          track all the measurements you might need to create anything from a
          simple shirt to a bespoke suit and everything else in-between for your
          clientele. Athleisure ware, business suits, cosplay, evening gowns,
          you'll have the needed measurements at the click of a button instead
          of wading through folders of measurement sheets.
        </p>
        <p className='flow-text'>
          Whether you're a novice designer or an experienced Clothier, S&T is
          the perfect tool. Unlike most measurement tracking tools on the
          market, S&T, provides you with a large scope measurement tracking. S&T
          offers you a selection of generic measurements, 50 measurements to
          track, and 5 custom measurements! You have the option to track these
          measurements in inches or centimeters (whichever best suits your
          needs). Also, you can capture any notes to relating to your client!
        </p>
      </div>
    </section>
  );
};

export default Title;
