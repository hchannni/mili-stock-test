import Logo from "../../components/Logo";
import Form from "../../components/Form";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BtnList from "../../components/BtnList";
import ScreenContainer from "../../components/ScreenContainer";
import TitleBox from "../../components/Title";

function JoinPage() {
  return (
    <ScreenContainer>
      <Logo />
      <TitleBox
        TitleText="본인인증"
        CaptionText="회원가입에 앞서 본인인증을 진행합니다."
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

export default JoinPage;
