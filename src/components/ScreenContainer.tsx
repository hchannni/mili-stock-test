import { ReactNode } from "react";
import styled from "styled-components";

const Screen = styled.div`
  max-width: 390px;
  padding: 0 20px;
  margin: 0 auto;

  background-color: #ffffff;
  height: 1000vh;
`;

interface ScreenContainerProps {
  children: ReactNode;
}

function ScreenContainer(props: ScreenContainerProps) {
  return <Screen>{props.children}</Screen>;
}

export default ScreenContainer;
