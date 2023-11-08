import styled from "styled-components";
import ScreenContainer from "../../components/ScreenContainer";
import PageHeader from "../../components/mypage/PageHeader";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import ErrorMessage from "../../components/ErrorMessage";
import Input from "../../components/Input";
import BtnList from "../../components/BtnList";
import Button from "../../components/Button";
import ToastPopup from "../../components/ToastPopup";
import DatePicker from "../../components/DatePicker";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

function UpdateUserInfo() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const navigate = useNavigate();
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("Toast Message");

  // BE측에 url 주소 확인하기!!
  // 에러 없을 때 어디로 navigate하면 될지 ..?!
  // 일단 생각은 팝업 창 띄우고 확인 버튼 누르면 개인정보수정 페이지로 이동하는 쪽으로 ..
  const onSubmit = async (data: any) => {
    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_DONG10_BASEURL}`,
      data: data,
    });

    const { status, reason } = response.data;
    if (status !== 200) {
      setToastMessage(reason);
      setToast(true);
      return;
    } else {
      // navigate("/join/idpw", { state: { ...data } });
    }
  };
  // BE 연동 힘들 때 테스트용!
  // const onSubmit = (data: any) => {
  //   navigate("/join/idpw", { state: { ...data } });
  // };

  return (
    <ScreenContainer>
      <PageHeader pageTitle="회원 정보" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          control={control}
          name="name"
          disabled={false}
          rules={{
            required: "'이름'은 필수 항목입니다.",
            pattern: {
              value: /^[a-zA-Z가-힣\\\\s]{2,15}/,
              message:
                "'이름'은 영문자, 한글, 공백포함 2자부터 15자까지 가능합니다.",
            },
          }}
          placeholder="이름"
          validationError={errors.name ? true : false}
        />
        {errors.name && (
          <ErrorMessage message={errors?.name?.message?.toString()} />
        )}
        <Input
          control={control}
          name="phoneNumber"
          rules={{ required: "'휴대전화'는 필수 항목입니다." }}
          placeholder="휴대전화"
          validationError={errors.phoneNumber ? true : false}
        />
        {errors.phoneNumber && (
          <ErrorMessage message={errors?.phoneNumber?.message?.toString()} />
        )}
        <DatePicker
          control={control}
          name="birth"
          rules={{
            required: "'생년월일'은 필수 항목입니다.",
            pattern: {
              value:
                /^(19|20)\d{2}\.(0[1-9]|1[0-2])\.(0[1-9]|[12][0-9]|3[01])$/,
              message: "생년월일 형식을 맞춰 주세요!",
            },
          }}
          placeholder="생년월일"
          validationError={errors.birth ? true : false}
        />
        {errors.birth && (
          <ErrorMessage message={errors?.birth?.message?.toString()} />
        )}
        <Input
          control={control}
          name="email"
          rules={{
            required: "'이메일'은 필수 항목입니다.",
            pattern: {
              value: /^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "이메일 형식이 올바르지 않습니다.",
            },
          }}
          placeholder="이메일"
          validationError={errors.email ? true : false}
        />
        {errors.email && (
          <ErrorMessage message={errors?.email?.message?.toString()} />
        )}
        <BtnList>
          <Button opacity={false} text="저장" />
        </BtnList>
      </Form>
      {toast && (
        <ToastPopup message={toastMessage} toast={toast} setToast={setToast} />
      )}
    </ScreenContainer>
  );
}

export default UpdateUserInfo;
