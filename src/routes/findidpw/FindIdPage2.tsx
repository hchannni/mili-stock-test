import styled from "styled-components";
import ScreenContainer from "../../components/ScreenContainer";
import Logo from "../../components/Logo";
import TitleBox from "../../components/Title";
import BtnList from "../../components/BtnList";
import Button from "../../components/Button";

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  margin: 32px 0;
`;

const Content = styled.h2`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 91.667% */
  letter-spacing: -0.408px;
`;

function FindIdPage2() {
  return (
    <ScreenContainer>
      <Logo />
      <TitleBox TitleText="아이디 찾기" />
      <ContentBox>
        <Content>회원님의 아이디는</Content>
        <Content>OOOOOOOO</Content>
        <Content>입니다.</Content>
        <BtnList>
          <Button text="로그인하러 가기" opacity={false} />
        </BtnList>
      </ContentBox>
    </ScreenContainer>
  );
}

export default FindIdPage2;
