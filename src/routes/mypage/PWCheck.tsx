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

const FindPWLink = styled(Link)`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 183.333% */
  letter-spacing: -0.408px;

  border-bottom: 1px solid black;
  margin-top: 8px;
`;

function PWCheck() {
  const {
    handleSubmit,
    formState: { errors },
    control,
    setError,
  } = useForm();
  const navigate = useNavigate();
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("Toast Message");

  const onSubmit = async (data: any) => {
    // API Call url 체크!!
    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_DONG10_BASEURL}/members/edit`,
      data: data,
    });

    const { status, reason } = response.data;
    if (status !== 200) {
      setError("password", { message: reason }, { shouldFocus: true });
      setToastMessage(reason);
      setToast(true);
      return;
    } else {
      navigate("/mypage/editpinfo/home");
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
        TitleText="비밀번호 확인"
        CaptionText="본인인증을 위해 비밀번호를 한 번 더 
        입력해 주세요."
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          control={control}
          name="password"
          rules={{ required: "비밀번호를 입력해 주세요!" }}
          placeholder="비밀번호"
          type="password"
          validationError={errors.password ? true : false}
        />
        {errors.password && (
          <ErrorMessage message={errors.password?.message?.toString()} />
        )}
        <BtnList>
          <GoBackButton />
          <Button opacity={false} text="확인" />
        </BtnList>
        <FindPWLink to="/findpw/idCheck">
          비밀번호를 찾고 싶으신가요? (비밀번호 찾기)
        </FindPWLink>
      </Form>
      {toast && (
        <ToastPopup message={toastMessage} toast={toast} setToast={setToast} />
      )}
    </ScreenContainer>
  );
}

export default PWCheck;
