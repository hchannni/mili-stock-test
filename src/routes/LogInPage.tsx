import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ErrorMessage from "../components/ErrorMessage";
import { useState } from "react";
import ToastPopup from "../components/ToastPopup";

const LogInScreenContainer = styled.div`
  max-width: 390px;
  margin: 0 auto;

  background-color: #ff8200;
  height: 100vh;
  padding: 0px 55px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
`;

const LogInForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const LogInInput = styled.input`
  border: none;
  width: 100%;
  height: 40px;
  padding: 10px 10px 8px 20px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;

  display: flex;
  align-items: center;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #a0a0a0;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 110% */
    letter-spacing: -0.408px;
  }
`;

const LogInBtnList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const LogInBtn = styled.button`
  display: flex;
  padding: 8px 32px;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
  background: #fff;
  border: none;
  font-size: 18px;
  font-weight: 500;
`;

const FindLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

const FindLink = styled(Link)`
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.408px;

  border-bottom: 1px solid black;
`;

function LogInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [toast, setToast] = useState(false);
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState("Toast Message");

  const onSubmit = async (data: any) => {
    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_DONG10_BASEURL}/members/login`,
      data: data,
    });

    const { status, reason } = response.data;
    if (status !== 200) {
      setToastMessage(reason);
      setToast(true);
      return;
    } else {
      // 유저 데이터 넘기는 방법은 ..?? BE에 물어보기
      navigate("/main");
    }
  };

  return (
    <LogInScreenContainer>
      <Logo></Logo>
      <LogInForm onSubmit={handleSubmit(onSubmit)}>
        <LogInInput
          {...register("userId", { required: "ID를 입력해 주세요." })}
          placeholder="ID"
        />
        {errors.userId && (
          <ErrorMessage message={errors.userId.message?.toString()} />
        )}
        <LogInInput
          {...register("password", { required: "비밀번호를 입력해 주세요." })}
          placeholder="Password"
          type="password"
        />
        {errors.password && (
          <ErrorMessage message={errors.password.message?.toString()} />
        )}
        <LogInBtnList>
          <LogInBtn>로그인</LogInBtn>
          <LogInBtn as={Link} to={"/join/auth"}>
            회원가입
          </LogInBtn>
        </LogInBtnList>
      </LogInForm>
      <FindLinks>
        <FindLink to={"/findid/auth"}>ID 찾기</FindLink>
        <FindLink to={"/findpw/idcheck"}>PW 찾기</FindLink>
      </FindLinks>
      {toast && (
        <ToastPopup message={toastMessage} toast={toast} setToast={setToast} />
      )}
    </LogInScreenContainer>
  );
}

export default LogInPage;
