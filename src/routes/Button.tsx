import { styled } from "styled-components";

const Btn = styled.button<IButton>`
  border: none;

  display: flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;

  background-color: ${(props) =>
    props.opacity ? "rgba(255, 130, 0, 0.6)" : "#ff8200"};
  color: white;
`;

interface IButton {
  opacity: boolean;
  text?: string;
}

function Button({ opacity, text = "text" }: IButton) {
  return (
    <>
      <Btn opacity={opacity}>{text}</Btn>
    </>
  );
}

export default Button;
