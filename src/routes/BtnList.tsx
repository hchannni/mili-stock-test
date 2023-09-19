import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 8px;
`;

interface BtnListProps {
  children: ReactNode;
}

function BtnList(props: BtnListProps) {
  return <Container>{props.children}</Container>;
}

export default BtnList;
