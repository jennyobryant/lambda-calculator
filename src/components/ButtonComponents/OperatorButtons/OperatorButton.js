import React from "react";

const OperatorButton = (props) => {
  return (
    <div className ="button operatorbutton">
     <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.operator.char}
      </div>
    </div>
  );
};
export default OperatorButton;