import React from "react";

const NumberButton = (props) => {
  return (
    <div className ="button number-button">
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.number
      }
    </div>
  );
};

export default NumberButton;