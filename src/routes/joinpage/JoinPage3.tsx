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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

  margin-top: 16px;
  padding: 10px 0;
  width: 100%;
`;

function JoinPage3() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const navigate = useNavigate();
  const { state } = useLocation();

  const onSubmit = (data: any) => {
    console.log(data);
    navigate("/join/success");
  };

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
        />
        <DatePicker
          control={control}
          name="birth"
          rules={{ required: true }}
          placeholder="생년월일"
        />
        <Input
          control={control}
          name="phoneNumber"
          rules={{ required: true }}
          placeholder="휴대전화"
        />
        <Input
          control={control}
          name="email"
          rules={{ required: true }}
          placeholder="이메일"
        />
        <Dropdown
          control={control}
          name="affiliation"
          disabled={true}
          rules={{ required: true }}
          defaultValue={state.affiliation}
          placeholder={state.affiliation}
          options={["육군", "해군", "공군", "해병대"]}
        />
        <Dropdown
          control={control}
          name="militaryRank"
          rules={{ required: true }}
          placeholder="계급"
          options={["병장", "상병", "일병", "이병"]}
        />
        <DatePicker
          control={control}
          name="appointment"
          rules={{ required: true }}
          placeholder="임관일자"
        />
        <DatePicker
          control={control}
          name="discharge"
          rules={{ required: true }}
          placeholder="전역일자"
        />
        <BtnList>
          <GoBackButton />
          <Button opacity={false} text="가입완료" />
        </BtnList>
      </Form>
    </ScreenContainer>
  );
}

export default JoinPage3;
