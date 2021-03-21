import React from "react";
import {
  InputWrapper,
  InputStyled,
  TextAreaStyled,
  SelectStyled,
} from "./Input.styled";
// import { InputStyle, Textarea, Select } from "./Input.styled";

const Input = (props: any) => {
  let inputElement = null;
  // const inputClasses = [classes.InputElement];

  // if (props.invalid && props.shouldValidate && props.touched) {
  //   inputClasses.push(classes.Invalid);
  // }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <InputStyled
          {...props.elementConfig}
          invalid={props.invalid}
          shouldValidate={props.shouldValidate}
          touched={props.touched}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <TextAreaStyled
          {...props.elementConfig}
          invalid={props.invalid}
          shouldValidate={props.shouldValidate}
          touched={props.touched}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <SelectStyled value={props.value} onChange={props.changed}>
          {props.elementConfig.options.map((option: any) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </SelectStyled>
      );
      break;
    default:
      inputElement = (
        <InputStyled
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <InputWrapper>
      <label>{props.label}</label>
      {inputElement}
    </InputWrapper>
  );
};

export default Input;
