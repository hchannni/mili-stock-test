import Logo from "../../components/Logo";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BtnList from "../../components/BtnList";
import ScreenContainer from "../../components/ScreenContainer";
import TitleBox from "../../components/Title";
import GoBackButton from "../../components/GoBackButton";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

  margin-top: 16px;
  padding: 10px 0;
  width: 100%;
`;

function JoinPage() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <ScreenContainer>
      <Logo />
      <TitleBox
        TitleText="본인인증"
        CaptionText="회원가입에 앞서 본인인증을 진행합니다."
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Dropdown placeholder="신분구분" />
        <Input
          control={control}
          name="이름"
          disabled={false}
          rules={{ required: true }}
        />
        <Dropdown placeholder="군구분" />
        <Input
          control={control}
          name="군번"
          disabled={false}
          rules={{ required: true }}
        />
        <BtnList>
          <GoBackButton />
          <Button opacity={false} text="본인인증" />
        </BtnList>
      </Form>
    </ScreenContainer>
  );
}

export default JoinPage;
