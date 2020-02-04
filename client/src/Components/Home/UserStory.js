import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "./Title.css";
import dress from "../../Images/wedding.png";

const UserStory = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className='container'
      style={{
        color: theme.text
      }}
      id='about'
    >
      <div className='container'>
        <h3
          className='center user-header'
          style={{ backgroundColor: "#ABADE0", color: theme.uitext }}
        >
          "I will never again be without this tool!"
        </h3>
      </div>
      <div className='row'>
        <div className='col s12 l8'>
          <blockquote
            className='flow-text z-depth-5 left'
            style={{
              borderLeft: "5px solid #ABADE0",
              backgroundColor: theme.bgc
            }}
          >
            I was the designer for two weddings both happening within weeks of
            each other. One wedding party had 6 bridesmaids and the other had
            10. I had to lug around several binders that held everyone's
            measurements, color preferences, and notes I had taken for each gown
            that would be made. I misplaced one of the binders and lost months
            worth of data. I was never able to retrieve the original
            measurements which was disappointing to all. It added unnecessary
            extra work and hastle. Needless to say, the bride wasn't pleased. A
            friend later told me about S&T. This would have been my lifesaver
            had I had this tool at that time.
          </blockquote>
        </div>
        <div className='col s12 l4 right'>
          <img
            src={dress}
            className='z-depth-5'
            alt='wedding dress'
            style={{ border: "5px solid #ABADE0" }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserStory;
