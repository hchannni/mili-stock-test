import styled from "styled-components";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BtnList from "../../components/BtnList";
import ScreenContainer from "../../components/ScreenContainer";
import TitleBox from "../../components/Title";
import GoBackButton from "../../components/GoBackButton";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
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

const FindIdLink = styled(Link)`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 183.333% */
  letter-spacing: -0.408px;

  border-bottom: 1px solid black;
`;

function FindPWPage() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const navigate = useNavigate();
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("Toast Message");

  const onSubmit = async (data: any) => {
    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_DONG10_BASEURL}/members/help/idCheck`,
      data: data,
    });

    const { status, reason } = response.data;
    if (status !== 200) {
      // setError("", { message: reason }, { shouldFocus: true });
      setToastMessage(reason);
      setToast(true);
      return;
    } else {
      navigate("/findpw/auth", { state: { ...data } });
    }
  };
  // BE 연동 힘들 때 테스트용!
  // const onSubmit = (data: any) => {
  //   navigate("/findpw/auth", { state: { ...data } });
  // };

  return (
    <ScreenContainer>
      <Logo />
      <TitleBox
        TitleText="비밀번호 찾기"
        CaptionText="비밀번호를 찾고자 하는 ID를 입력해 주세요"
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          control={control}
          name="userId"
          rules={{ required: "아이디를 입력해 주세요!" }}
          placeholder="ID"
          validationError={errors.userId ? true : false}
        />
        {errors.userId && (
          <ErrorMessage message={errors.userId?.message?.toString()} />
        )}
        <BtnList>
          <GoBackButton />
          <Button opacity={false} text="다음" />
        </BtnList>
        <FindIdLink to="/findid/auth">
          ID를 찾고 싶으신가요? (아이디 찾기)
        </FindIdLink>
      </Form>
      {toast && (
        <ToastPopup message={toastMessage} toast={toast} setToast={setToast} />
      )}
    </ScreenContainer>
  );
}

export default FindPWPage;
