import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BtnList from "../../components/BtnList";
import ScreenContainer from "../../components/ScreenContainer";
import TitleBox from "../../components/Title";
import GoBackButton from "../../components/GoBackButton";
import ErrorMessage from "../../components/ErrorMessage";
import ToastPopup from "../../components/ToastPopup";
import IdCheckInput from "../../components/IdCheckInput";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import React, { useState } from "react";

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
    setError,
  } = useForm();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [idAccepted, setIdAccepted] = useState(false);
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("Toast Message");

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_DONG10_BASEURL}/members/idDuplicate`,
      data: e.target.value,
    });

    const { status, reason } = response.data;
    if (status !== 200) {
      console.log(reason);
      setError("userId", { message: reason }, { shouldFocus: true });
      setToastMessage(reason);
      setToast(true);
      return;
    } else {
      setIdAccepted(true);
      return;
    }
  };

  const onSubmit = (data: any) => {
    const stateData = { ...state, ...data };

    // 여기에 토스트 메시지를 쓸까말까쓸까말까쓸말쓸말ㄹㄹ...
    if (data.password !== data.passwordConfirmation) {
      setError(
        "passwordConfirmation",
        {
          message: "비밀번호가 일치하지 않습니다. 다시 확인해 주세요!",
        },
        { shouldFocus: true }
      );
      return;
    }

    // idDuplicate가 성공적으로 이뤄지지 않았을 때 다음 페이지로 넘어가는 것 방지
    if (!idAccepted) {
      setToastMessage("ID 중복체크가 확인되지 않았습니다!");
      setToast(true);
      return;
    }
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
        <IdCheckInput
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
          onChange={onChange}
          accepted={idAccepted ? true : false}
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
      {toast && (
        <ToastPopup message={toastMessage} toast={toast} setToast={setToast} />
      )}
    </ScreenContainer>
  );
}

export default JoinPage2;
