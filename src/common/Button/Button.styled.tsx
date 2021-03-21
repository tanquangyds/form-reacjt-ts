import styled, { css } from "styled-components";

// export type ButtonComponentProps = {
//   children?: HTMLCollection | string;
//   onClick: (e?: React.MouseEvent) => void;
// } & React.ButtonHTMLAttributes<HTMLButtonElement>;
interface IButton {
  onClick: any;
  disabled: boolean;
  theme: string;
}
const ButtonStyled = styled.button<IButton>`
  padding: 5px 12px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
    ${(props) =>
      props.theme === "primary"
        ? css`
            background: #d82424;
          `
        : css`
            background: green;
          `};}
    ${(props) =>
      props.disabled &&
      css`
        background: #d67b7b;
        cursor: default;
      `}
`;

export default ButtonStyled;
