import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BtnList from "../../components/BtnList";
import ScreenContainer from "../../components/ScreenContainer";
import TitleBox from "../../components/Title";
import GoBackButton from "../../components/GoBackButton";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ErrorMessage from "../../components/ErrorMessage";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

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
  const navigate = useNavigate();
  const { state } = useLocation();

  const onSubmit = (data: any) => {
    const stateData = { ...state, ...data };
    console.log(stateData);
    navigate("/join/detail", { state: { ...stateData } });
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
          defaultValue={state.name}
          placeholder={`${state.name} (이름)`}
          shouldUnregister={true}
          validationError={errors.name ? true : false}
        />
        <Input
          control={control}
          name="serviceNumber"
          disabled={true}
          rules={{ required: true }}
          defaultValue={state.serviceNumber}
          placeholder={`${state.serviceNumber} (군번)`}
          shouldUnregister={true}
          validationError={errors.serviceNumber ? true : false}
        />
        <Input
          control={control}
          name="userId"
          disabled={false}
          rules={{
            required: "'아이디'는 필수 항목입니다.",
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,20}$/,
              message: "아이디는 영문자+숫자를 포함한 2~20자여야 합니다.",
            },
          }}
          placeholder="아이디"
          validationError={errors.userId ? true : false}
        />
        {errors.userId && (
          <ErrorMessage message={errors?.userId?.message?.toString()} />
        )}
        <Input
          control={control}
          name="password"
          disabled={false}
          rules={{
            required: "'비밀번호'는 필수 항목입니다.",
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{7,16}$/,
              message:
                "비밀번호는 영문+숫자+특수문자를 포함한 8~20자여야 합니다",
            },
          }}
          placeholder="비밀번호"
          type="password"
          validationError={errors.password ? true : false}
        />
        {errors.password && (
          <ErrorMessage message={errors?.password?.message?.toString()} />
        )}
        <Input
          control={control}
          name="passwordConfirmation"
          disabled={false}
          rules={{
            required: "'비밀번호 확인'은 필수 항목입니다.",
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{7,16}$/,
              message:
                "비밀번호는 영문+숫자+특수문자를 포함한 8~20자여야 합니다",
            },
          }}
          placeholder="비밀번호 확인"
          type="password"
          validationError={errors.passwordConfirmation ? true : false}
        />
        {errors.passwordConfirmation && (
          <ErrorMessage
            message={errors?.passwordConfirmation?.message?.toString()}
          />
        )}
        <BtnList>
          <GoBackButton />
          <Button opacity={false} text="다음" />
        </BtnList>
      </Form>
    </ScreenContainer>
  );
}

export default JoinPage2;
