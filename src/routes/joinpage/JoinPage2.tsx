import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BtnList from "../../components/BtnList";
import ScreenContainer from "../../components/ScreenContainer";
import TitleBox from "../../components/Title";
import GoBackButton from "../../components/GoBackButton";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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

function JoinPage2() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  let navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);
    navigate("/join/idpw");
  };

  return (
    <ScreenContainer>
      <Logo />
      <TitleBox TitleText="회원가입" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          control={control}
          name="name"
          disabled={true}
          rules={{ required: true }}
          placeholder="이름"
        />
        <Input
          control={control}
          name="serviceNumber"
          disabled={true}
          rules={{ required: true }}
          placeholder="군번"
        />
        <Input
          control={control}
          name="userId"
          disabled={false}
          rules={{ required: true }}
          placeholder="아이디"
        />
        <Input
          control={control}
          name="password"
          disabled={false}
          rules={{ required: true }}
          placeholder="비밀번호"
        />
        <Input
          control={control}
          name="passwordConfirmation"
          disabled={false}
          rules={{ required: true }}
          placeholder="비밀번호 확인"
        />
        <BtnList>
          <GoBackButton />
          <Button opacity={false} text="다음" />
        </BtnList>
      </Form>
    </ScreenContainer>
  );
}

export default JoinPage2;
