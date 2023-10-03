import { styled } from "styled-components";
import Logo from "./Logo";
import JoinForm from "./JoinForm";
import JoinInput from "./JoinInput";
import Button from "./Button";
import BtnList from "./BtnList";
import DatePicker from "./DatePicker";
import JoinDropdown from "./JoinDropdown";

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
      <JoinForm>
        <JoinDropdown placeholder="신분구분" disabled={true} />
        <DatePicker placeholder="생년월일" />
        <JoinInput placeholder="휴대전화" />
        <JoinInput placeholder="이메일" />
        <JoinDropdown placeholder="군구분" disabled={true} />
        <JoinDropdown placeholder="계급" />
        <DatePicker placeholder="임관일자" />
        <DatePicker placeholder="전역일자" />
        <BtnList>
          <Button opacity={true} text="이전" />
          <Button opacity={false} text="가입완료" />
        </BtnList>
      </JoinForm>
    </Container>
  );
}

export default JoinPage3;
