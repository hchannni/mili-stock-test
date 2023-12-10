import styled from "styled-components";
import { InputProps } from "./Input";
import { useController } from "react-hook-form";

interface InputTagProps {
  error: boolean;
  accepted: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputTag = styled.input<InputTagProps>`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1.5px solid black;
  font-size: 16px;
  margin-top: 16px;

  transition: all 0.2s ease-in-out;

  color: ${(props) =>
    props.error ? "#E00B03" : props.accepted ? "#008000" : "#000"};
  border-color: ${(props) =>
    props.error ? "#E00B03" : props.accepted ? "#008000" : "#000"};

  &::placeholder {
    text-align: left;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 110% */
    letter-spacing: -0.408px;

    color: inherit;
  }

  &:focus {
    outline: none;
    color: #ff8200;
    border-color: #ff8200;
  }

  &:disabled {
    color: #a0a0a0;
    border-color: #a0a0a0;
    background-color: rgba(255, 255, 255, 0);
  }
`;

interface IdCheckInputProps extends InputProps {
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  accepted: boolean;
}

function IdCheckInput(props: IdCheckInputProps) {
  const { field } = useController(props);
  return (
    <InputTag
      {...field}
      placeholder={props.placeholder}
      disabled={props.disabled}
      type={props.type ?? "text"}
      onBlur={props.onBlur}
      error={props.validationError}
      accepted={props.accepted}
    />
  );
}

export default IdCheckInput;
