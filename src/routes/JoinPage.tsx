import { styled } from "styled-components";
import Logo from "./Logo";
import JoinForm from "./JoinForm";
import JoinDropdown from "./JoinDropdown";
import JoinInput from "./JoinInput";
import Button from "./Button";
import BtnList from "./BtnList";

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
      <JoinForm>
        <JoinDropdown placeholder="신분구분" />
        <JoinInput placeholder="이름" disabled={true} />
        <JoinDropdown placeholder="군구분" />
        <JoinInput placeholder="군번" disabled={false} />
        <BtnList>
          <Button opacity={true} text="이전" />
          <Button opacity={false} text="본인인증" />
        </BtnList>
      </JoinForm>
    </Container>
  );
}

export default JoinPage;
