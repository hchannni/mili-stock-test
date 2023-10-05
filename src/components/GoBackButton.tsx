import { useNavigate } from "react-router-dom";
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
  opacity?: boolean;
  text?: string;
  onClick?: () => void;
}

function GoBackButton({ opacity = true, text = "이전", onClick }: IButton) {
  let navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Btn opacity={opacity} onClick={goBack}>
        {text}
      </Btn>
    </>
  );
}

export default GoBackButton;
