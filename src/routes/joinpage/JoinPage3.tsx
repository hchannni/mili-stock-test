import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BtnList from "../../components/BtnList";
import DatePicker from "../../components/DatePicker";
import Dropdown from "../../components/Dropdown";
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

function JoinPage3() {
  const {
    handleSubmit,
    formState: { errors },
    control,
    setError,
  } = useForm();
  const navigate = useNavigate();
  const { state } = useLocation();

  const [toast, setToast] = useState(false);
  let toastMessage = "Toast Message";

  const onSubmit = async (data: any) => {
    const submitData = { ...state, ...data };

    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_DONG10_BASEURL}/members/signup`,
      data: submitData,
    });
    const { status, reason } = response.data;
    if (status !== 200) {
      // setError("", { message: reason }, { shouldFocus: true });
      toastMessage = reason;
      setToast(true);
    } else {
      navigate("/join/success");
    }
  };
  // BE 연동 힘들 때 테스트용!
  // const onSubmit = (data: any) => {
  //   const submitData = { ...state, ...data };
  //   console.log(submitData);
  //   navigate("/join/success");
  // };

  return (
    <ScreenContainer>
      <Logo />
      <TitleBox TitleText="회원가입" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Dropdown
          control={control}
          name="job"
          disabled={true}
          rules={{ required: true }}
          defaultValue={state.job}
          placeholder={state.job}
          options={["장교", "부사관", "병사", "군무원"]}
          shouldUnregister={true}
          validationError={errors.job ? true : false}
        />
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
        <Dropdown
          control={control}
          name="gender"
          rules={{ required: "'성별'은 필수 항목입니다." }}
          placeholder="성별"
          options={["남", "여"]}
          validationError={errors.gender ? true : false}
        />
        {errors.gender && (
          <ErrorMessage message={errors?.gender?.message?.toString()} />
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
        <Dropdown
          control={control}
          name="affiliation"
          disabled={true}
          rules={{ required: true }}
          defaultValue={state.affiliation}
          placeholder={state.affiliation}
          options={["육군", "해군", "공군", "해병대"]}
          shouldUnregister={true}
          validationError={errors.affiliation ? true : false}
        />
        <Dropdown
          control={control}
          name="militaryRank"
          rules={{ required: "'계급'은 필수 항목입니다." }}
          placeholder="계급"
          options={["병장", "상병", "일병", "이병"]}
          validationError={errors.militaryRank ? true : false}
        />
        {errors.militaryRank && (
          <ErrorMessage message={errors?.militaryRank?.message?.toString()} />
        )}
        <DatePicker
          control={control}
          name="appointment"
          rules={{
            required: "'임관일자'는 필수 항목입니다.",
            pattern: {
              value:
                /^(19|20)\d{2}\.(0[1-9]|1[0-2])\.(0[1-9]|[12][0-9]|3[01])$/,
              message: "임관일자 형식이 올바르지 않습니다.",
            },
          }}
          placeholder="임관일자"
          validationError={errors.appointment ? true : false}
        />
        {errors.appointment && (
          <ErrorMessage message={errors?.appointment?.message?.toString()} />
        )}
        <DatePicker
          control={control}
          name="discharge"
          rules={{
            required: "'전역일자'는 필수 항목입니다.",
            pattern: {
              value:
                /^(19|20)\d{2}\.(0[1-9]|1[0-2])\.(0[1-9]|[12][0-9]|3[01])$/,
              message: "전역일자 형식이 올바르지 않습니다.",
            },
          }}
          placeholder="전역일자"
          validationError={errors.discharge ? true : false}
        />
        {errors.discharge && (
          <ErrorMessage message={errors?.discharge?.message?.toString()} />
        )}
        <BtnList>
          <GoBackButton />
          <Button opacity={false} text="가입완료" />
        </BtnList>
      </Form>
      {toast && (
        <ToastPopup message={toastMessage} toast={toast} setToast={setToast} />
      )}
    </ScreenContainer>
  );
}

export default JoinPage3;
