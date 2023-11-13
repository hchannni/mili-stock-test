import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface MenusProp {
  children: ReactNode;
}

function Menus(props: MenusProp) {
  return <Container>{props.children}</Container>;
}

export default Menus;
