import React from "react";

const SpecialButton = (props) => {
  return (
    <div className ="button specialbutton">
      <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.special}
      </div>
    </div>
  );
};

export default SpecialButton;