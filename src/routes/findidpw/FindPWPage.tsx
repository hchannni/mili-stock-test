import styled from "styled-components";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BtnList from "../../components/BtnList";
import ScreenContainer from "../../components/ScreenContainer";
import TitleBox from "../../components/Title";
import { Link } from "react-router-dom";

const FindIdLink = styled(Link)`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 183.333% */
  letter-spacing: -0.408px;

  border-bottom: 1px solid black;
`;

function FindPWPage() {
  return (
    <ScreenContainer>
      <Logo />
      <TitleBox
        TitleText="비밀번호 찾기"
        CaptionText="비밀번호를 찾고자 하는 ID를 입력해 주세요"
      />
      <Form>
        <Input placeholder="ID" disabled={false} />
        <BtnList>
          <Button opacity={true} text="이전" />
          <Button opacity={false} text="다음" />
        </BtnList>
        <FindIdLink to="/">ID를 찾고 싶으신가요? (아이디 찾기)</FindIdLink>
      </Form>
    </ScreenContainer>
  );
}

export default FindPWPage;
