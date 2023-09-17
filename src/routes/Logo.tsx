import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  padding-top: 50px;
`;

const LogoImg = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;

  border-radius: 50%;
  background-color: #ff8200;
`;

const ServiceName = styled.h1`
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 110% */
  letter-spacing: -0.408px;
  color: #ff8200;
`;

function Logo() {
  return (
    <Container>
      <LogoImg />
      <ServiceName>미리스톡 Mili-Stock</ServiceName>
    </Container>
  );
}

export default Logo;
