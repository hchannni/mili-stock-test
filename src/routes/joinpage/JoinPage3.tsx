import { styled } from "styled-components";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BtnList from "../../components/BtnList";
import DatePicker from "../../components/DatePicker";
import Dropdown from "../../components/Dropdown";

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

function JoinPage3() {
  return (
    <Container>
      <Logo />
      <Title>회원가입</Title>
      <Form>
        <Dropdown placeholder="신분구분" disabled={true} />
        <DatePicker placeholder="생년월일" />
        <Input placeholder="휴대전화" />
        <Input placeholder="이메일" />
        <Dropdown placeholder="군구분" disabled={true} />
        <Dropdown placeholder="계급" />
        <DatePicker placeholder="임관일자" />
        <DatePicker placeholder="전역일자" />
        <BtnList>
          <Button opacity={true} text="이전" />
          <Button opacity={false} text="가입완료" />
        </BtnList>
      </Form>
    </Container>
  );
}

export default JoinPage3;
