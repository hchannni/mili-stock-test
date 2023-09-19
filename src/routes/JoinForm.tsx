import { styled } from "styled-components";
import { ReactNode } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

  margin-top: 16px;
  padding: 10px 0;
  width: 100%;
`;

interface JoinFormProps {
  children: ReactNode;
}

function JoinForm(props: JoinFormProps) {
  return <Container>{props.children}</Container>;
}

export default JoinForm;
