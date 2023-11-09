import styled from "styled-components";
import ScreenContainer from "../../components/ScreenContainer";
import PageHeader from "../../components/mypage/PageHeader";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import ErrorMessage from "../../components/ErrorMessage";
import Input from "../../components/Input";
import BtnList from "../../components/BtnList";
import Button from "../../components/Button";
import ToastPopup from "../../components/ToastPopup";
import DatePicker from "../../components/DatePicker";
import Dropdown from "../../components/Dropdown";

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
  const { state } = useLocation();
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("Toast Message");
  const accessToken = localStorage.getItem("accessToken");

  // BE측에 url 주소 확인하기!!
  // 에러 없을 때 어디로 navigate하면 될지 ..?!
  // 일단 생각은 팝업 창 띄우고 확인 버튼 누르면 개인정보수정 페이지로 이동하는 쪽으로 ..
  const onSubmit = async (data: any) => {
    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_DONG10_BASEURL}/members/edit/infoChange`,
      data: data,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
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

  return (
    <ScreenContainer>
      <PageHeader pageTitle="회원 정보" />
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
