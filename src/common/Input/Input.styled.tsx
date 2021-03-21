import styled, { css } from "styled-components";
interface IInput {
  onClick: any;
  invalid?: boolean;
  shouldValidate: boolean;
  touched: boolean;
}

// interface ISelect {
//   value: string;
//   onChange: any;
//   invalid?: boolean;
//   shouldValidate: boolean;
//   touched: boolean;
//   children: any;
// }

export const InputWrapper = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
  }
`;
export const InputStyled = styled.input<IInput>`
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  :focus {
    outline: none;
    background-color: #ccc;
  }
  ${(props) =>
    props.invalid &&
    props.shouldValidate &&
    props.touched &&
    css`
      background: #d67b7b;
      cursor: default;
    `}
`;
export const TextAreaStyled = styled.textarea<IInput>`
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  :focus {
    outline: none;
    background-color: #ccc;
  }
  ${(props) =>
    props.invalid &&
    props.shouldValidate &&
    props.touched &&
    css`
      background: #d67b7b;
      cursor: default;
    `}
`;
export const SelectStyled = styled.select`
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  :focus {
    outline: none;
    background-color: #ccc;
  }
`;
