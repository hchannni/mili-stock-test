import { styled } from "styled-components";

const Input = styled.input.attrs({ required: true })`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1.5px solid black;
  font-size: 16px;

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
`;

interface InputProps {
  placeholder: string;
}

function JoinInput({ placeholder }: InputProps) {
  return (
    <>
      <Input placeholder={placeholder} />
    </>
  );
}

export default JoinInput;
