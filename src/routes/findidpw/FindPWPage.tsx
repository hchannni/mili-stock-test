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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

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

  const onSubmit = (data: any) => {
    console.log(data);
    navigate("/findpw/auth");
  };

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
          rules={{ required: true }}
          placeholder="ID"
        />
        <BtnList>
          <GoBackButton />
          <Button opacity={false} text="다음" />
        </BtnList>
        <FindIdLink to="/findid/auth">
          ID를 찾고 싶으신가요? (아이디 찾기)
        </FindIdLink>
      </Form>
    </ScreenContainer>
  );
}

export default FindPWPage;
