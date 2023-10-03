import { styled } from "styled-components";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BtnList from "../../components/BtnList";

const Container = styled.div`
  max-width: 390px;
  padding: 0 20px;
  margin: 0 auto;

  background-color: #ffffff;
  height: 1000vh;
`;

const Title = styled.h1`
  text-align: left;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 78.571% */
  letter-spacing: -0.408px;
`;

function JoinPage() {
  return (
    <Container>
      <Logo />
      <Title>본인인증</Title>
      <Form>
        <Dropdown placeholder="신분구분" />
        <Input placeholder="이름" disabled={true} />
        <Dropdown placeholder="군구분" />
        <Input placeholder="군번" disabled={false} />
        <BtnList>
          <Button opacity={true} text="이전" />
          <Button opacity={false} text="본인인증" />
        </BtnList>
      </Form>
    </Container>
  );
}

export default JoinPage;
