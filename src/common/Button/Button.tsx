import React from "react";
import InputStyle from "./Button.styled";

// interface ButtonProps {}
const Button = (props: any): JSX.Element => {
  const { disabled, clicked, children, btnType } = props;
  return (
    <InputStyle disabled={disabled} onClick={clicked} theme={btnType}>
      {children}
    </InputStyle>
  );
};

export default Button;
