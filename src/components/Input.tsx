import { styled } from "styled-components";
import { useController, UseControllerProps } from "react-hook-form";

const InputTag = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1.5px solid black;
  font-size: 16px;
  margin-top: 16px;

  transition: all 0.2s ease-in-out;

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

// interface InputProps {
//   placeholder: string;
//   disabled?: boolean;
// }

// function Input({ placeholder, disabled = false }: InputProps) {
//   return (
//     <>
//       <InputTag placeholder={placeholder} disabled={disabled} />
//     </>
//   );
// }

interface InputProps extends UseControllerProps {
  placeholder: string;
  type?: string;
}

function Input(props: InputProps) {
  const { field } = useController(props);
  return (
    <InputTag
      {...field}
      placeholder={props.placeholder}
      disabled={props.disabled}
      type={props.type ?? "text"}
    />
  );
}

export default Input;
