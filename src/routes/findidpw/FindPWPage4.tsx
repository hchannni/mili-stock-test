import styled from "styled-components";
import ScreenContainer from "../../components/ScreenContainer";
import Logo from "../../components/Logo";
import TitleBox from "../../components/Title";
import BtnList from "../../components/BtnList";
import { Link } from "react-router-dom";

const MarginBox = styled.div`
  color: inherit;
  width: 100%;
  height: 32px;
`;

const StyledLink = styled(Link)`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;

  background-color: #ff8200;
  color: white;
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
        <StyledLink to={"/"}>로그인하러 가기</StyledLink>
      </BtnList>
    </ScreenContainer>
  );
}

export default FindPWPage4;
