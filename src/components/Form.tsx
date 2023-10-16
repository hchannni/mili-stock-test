import { styled } from "styled-components";
import { ReactNode } from "react";

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

  margin-top: 16px;
  padding: 10px 0;
  width: 100%;
`;

interface FormProps {
  children: ReactNode;
}

function Form(props: FormProps) {
  return <FormBox>{props.children}</FormBox>;
}

export default Form;
