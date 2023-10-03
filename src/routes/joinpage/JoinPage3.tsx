import Logo from "../../components/Logo";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BtnList from "../../components/BtnList";
import DatePicker from "../../components/DatePicker";
import Dropdown from "../../components/Dropdown";
import ScreenContainer from "../../components/ScreenContainer";
import TitleBox from "../../components/Title";

function JoinPage3() {
  return (
    <ScreenContainer>
      <Logo />
      <TitleBox TitleText="회원가입" />
      <Form>
        <Dropdown placeholder="신분구분" disabled={true} />
        <DatePicker placeholder="생년월일" />
        <Input placeholder="휴대전화" />
        <Input placeholder="이메일" />
        <Dropdown placeholder="군구분" disabled={true} />
        <Dropdown placeholder="계급" />
        <DatePicker placeholder="임관일자" />
        <DatePicker placeholder="전역일자" />
        <BtnList>
          <Button opacity={true} text="이전" />
          <Button opacity={false} text="가입완료" />
        </BtnList>
      </Form>
    </ScreenContainer>
  );
}

export default JoinPage3;
