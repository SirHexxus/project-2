import React, { useContext } from "react";
import {ThemeContext} from "../../Context/ThemeContext";

const UserStory = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className='container'
      style={{
        color: theme.text,
        background: theme.bgc
      }}
      id='about'
    >
      <h2 className='center'>I will never again be without this tool!</h2>
      <p className='flow-text'>
        I was the designer for two weddings both happening within weeks of each
        other. One wedding party had 6 bridesmaids and the other had 10. I had
        to lug around several binders that held everyone's measurements, color
        preferences, and notes I had taken for each gown that would be made. I
        misplaced one of the binders and lost months worth of data. I was never
        able to retrieve the original measurements which was disappointing to
        all. It added unnecessary extra work and hastle. Needless to say, the
        bride wasn't pleased. A friend later told me about S&T. This would have
        been my lifesaver had I had this tool at that time.
      </p>
    </div>
  );
};

export default UserStory;
