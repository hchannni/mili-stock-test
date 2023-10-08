import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

interface BtnListProps {
  children: ReactNode;
}

function BtnList(props: BtnListProps) {
  return <Container>{props.children}</Container>;
}

export default BtnList;
