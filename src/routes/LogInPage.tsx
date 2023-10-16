import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  gap: 20px;

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

  const onSubmit = (data: any) => {
    console.log(data);
    // navigate to 'main' page
  };

  return (
    <LogInScreenContainer>
      <Logo></Logo>
      <LogInForm onSubmit={handleSubmit(onSubmit)}>
        <LogInInput
          {...register("userId", { required: true })}
          placeholder="ID"
        />
        <LogInInput
          {...register("password", { required: true })}
          placeholder="Password"
          type="password"
        />
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
    </LogInScreenContainer>
  );
}

export default LogInPage;
