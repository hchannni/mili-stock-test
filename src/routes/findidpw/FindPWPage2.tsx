import Logo from "../../components/Logo";
import Form from "../../components/Form";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BtnList from "../../components/BtnList";
import ScreenContainer from "../../components/ScreenContainer";
import TitleBox from "../../components/Title";
import GoBackButton from "../../components/GoBackButton";

function FindPWPage2() {
  return (
    <ScreenContainer>
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
          <GoBackButton />
          <Button opacity={false} text="본인인증" />
        </BtnList>
      </Form>
    </ScreenContainer>
  );
}

export default FindPWPage2;
