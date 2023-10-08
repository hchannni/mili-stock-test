import Logo from "../../components/Logo";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BtnList from "../../components/BtnList";
import ScreenContainer from "../../components/ScreenContainer";
import TitleBox from "../../components/Title";
import GoBackButton from "../../components/GoBackButton";

function JoinPage2() {
  return (
    <ScreenContainer>
      <Logo />
      <TitleBox TitleText="회원가입" />
      <Form>
        <Input placeholder="이름" disabled={true} />
        <Input placeholder="군번" disabled={true} />
        <Input placeholder="아이디" />
        <Input placeholder="비밀번호" />
        <Input placeholder="비밀번호 확인" />
        <BtnList>
          <GoBackButton />
          <Button opacity={false} text="다음" />
        </BtnList>
      </Form>
    </ScreenContainer>
  );
}

export default JoinPage2;
