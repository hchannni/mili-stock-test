import Logo from "../../components/Logo";
import Form from "../../components/Form";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BtnList from "../../components/BtnList";
import ScreenContainer from "../../components/ScreenContainer";
import TitleBox from "../../components/Title";

import styled from "styled-components";

const PopupBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Popup = styled.div`
  width: 320px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 53px 20px 97px 20px;
  border-radius: 16px;
  opacity: 0.95;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.05);
`;

function FindPWPage3() {
  return (
    <ScreenContainer>
      <PopupBackground>
        <Popup>
          <Form>
            <Input placeholder="새 비밀번호" />
            <Input placeholder="새 비밀번호 확인" />
            <BtnList>
              <Button opacity={true} text="취소" />
              <Button opacity={false} text="변경" />
            </BtnList>
          </Form>
        </Popup>
      </PopupBackground>
      <Logo />
      <TitleBox
        TitleText="비밀번호 찾기"
        CaptionText="비밀번호를 찾기 위해 본인인증을 진행합니다."
      />
      <Form>
        <Dropdown placeholder="신분구분" />
        <Input placeholder="이름" disabled={false} />
        <Dropdown placeholder="군구분" />
        <Input placeholder="군번" disabled={false} />
        <BtnList>
          <Button opacity={true} text="이전" />
          <Button opacity={false} text="본인인증" />
        </BtnList>
      </Form>
    </ScreenContainer>
  );
}

export default FindPWPage3;
