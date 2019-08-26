import React from "react";

const NumberButton = (props) => {
  return (
    <div className ={props.number == "0" ? "button numberbutton wide" : "button numberbutton"}>
      <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.number
      }
      </div>
    </div>
  );
};

export default NumberButton;