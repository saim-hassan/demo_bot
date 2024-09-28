import React from "react";

interface ButtonProps {
  text: string;
  className: string;
  onClick: () => void;
}

const Button:React.FC<ButtonProps> = (props) => {
  return (
  <button className={props.className} onClick={props.onClick}>
    {props.text}
  </button>
  )  
};

export default Button;
