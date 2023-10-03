import styled from "styled-components";
import ScreenContainer from "../../components/ScreenContainer";
import Logo from "../../components/Logo";
import TitleBox from "../../components/Title";
import BtnList from "../../components/BtnList";
import Button from "../../components/Button";

const MarginBox = styled.div`
  color: inherit;
  width: 100%;
  height: 32px;
`;

function FindPWPage4() {
  return (
    <ScreenContainer>
      <Logo />
      <TitleBox
        TitleText="비밀번호 찾기"
        CaptionText="비밀번호를 성공적으로 변경하였습니다."
      />
      <MarginBox></MarginBox>
      <BtnList>
        <Button text="로그인하러 가기" opacity={false} />
      </BtnList>
    </ScreenContainer>
  );
}

export default FindPWPage4;
