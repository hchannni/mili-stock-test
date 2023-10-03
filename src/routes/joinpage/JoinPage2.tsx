import { styled } from "styled-components";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
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

function JoinPage2() {
  return (
    <Container>
      <Logo />
      <Title>회원가입</Title>
      <Form>
        <Input placeholder="이름" disabled={true} />
        <Input placeholder="군번" disabled={true} />
        <Input placeholder="아이디" />
        <Input placeholder="비밀번호" />
        <Input placeholder="비밀번호 확인" />
        <BtnList>
          <Button opacity={true} text="이전" />
          <Button opacity={false} text="다음" />
        </BtnList>
      </Form>
    </Container>
  );
}

export default JoinPage2;
