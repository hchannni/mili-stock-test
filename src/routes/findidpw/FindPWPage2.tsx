import Logo from "../../components/Logo";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BtnList from "../../components/BtnList";
import ScreenContainer from "../../components/ScreenContainer";
import TitleBox from "../../components/Title";
import GoBackButton from "../../components/GoBackButton";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import ErrorMessage from "../../components/ErrorMessage";
import { useState } from "react";
import ToastPopup from "../../components/ToastPopup";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-top: 16px;
  padding: 10px 0;
  width: 100%;
`;

function FindPWPage2() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [toast, setToast] = useState(false);
  let toastMessage = "Toast Message";

  const onSubmit = async (data: any) => {
    const submitData = { ...state, ...data };
    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_DONG10_BASEURL}/members/help/pwInquiry`,
      data: submitData,
    });

    const { status, reason } = response.data;
    if (status !== 200) {
      // setError("", { message: reason }, { shouldFocus: true });
      toastMessage = reason;
      setToast(true);
      return;
    } else {
      navigate("/findpw/renewal", { state });
    }
  };
  // BE 연동 힘들 때 테스트용!
  // const onSubmit = (data: any) => {
  //   navigate("/findpw/renewal", { state });
  // };

  return (
    <ScreenContainer>
      <Logo />
      <TitleBox
        TitleText="비밀번호 찾기"
        CaptionText="비밀번호를 찾기 위해 본인인증을 진행합니다."
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Dropdown
          control={control}
          name="job"
          disabled={false}
          rules={{
            required: "'신분구분'은 필수 항목입니다.",
            pattern: {
              value: /(병사|간부|군무원)/,
              message: "'신분구분'은 병사/간부/군무원 만 선택 가능합니다.",
            },
          }}
          placeholder="신분구분"
          options={["간부", "병사", "군무원"]}
          validationError={errors.job ? true : false}
        />
        {errors.job && (
          <ErrorMessage message={errors?.job?.message?.toString()} />
        )}
        <Input
          control={control}
          name="name"
          disabled={false}
          rules={{
            required: "'이름'은 필수 항목입니다.",
            pattern: {
              value: /^[a-zA-Z가-힣 ]{2,15}/,
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
        <Dropdown
          control={control}
          name="affiliation"
          disabled={false}
          rules={{
            required: "'군구분'은 필수 항목입니다.",
            pattern: {
              value: /(공군|육군|해군|해병대)/,
              message: "'군구분'은 육군/해군/공군/해병대 만 선택 가능합니다.",
            },
          }}
          placeholder="군구분"
          options={["육군", "해군", "공군", "해병대"]}
          validationError={errors.affiliation ? true : false}
        />
        {errors.affiliation && (
          <ErrorMessage message={errors?.affiliation?.message?.toString()} />
        )}
        <Input
          control={control}
          name="serviceNumber"
          disabled={false}
          rules={{
            required: "'군번'은 필수 항목입니다.",
            pattern: {
              value: /\d{2}-\d{4,}/,
              message: "군번 형식을 다시 확인해 주세요!!",
            },
          }}
          placeholder="군번"
          validationError={errors.serviceNumber ? true : false}
        />
        {errors.serviceNumber && (
          <ErrorMessage message={errors?.serviceNumber?.message?.toString()} />
        )}
        <BtnList>
          <GoBackButton />
          <Button opacity={false} text="본인인증" />
        </BtnList>
      </Form>
      {toast && (
        <ToastPopup message={toastMessage} toast={toast} setToast={setToast} />
      )}
    </ScreenContainer>
  );
}

export default FindPWPage2;
