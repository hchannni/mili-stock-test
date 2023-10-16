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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

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

  const onSubmit = async (data: any) => {
    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_DONG10_BASEURL}/members/help/pwInquiry`,
      data: data,
    });

    console.log(response);
    navigate("/findpw/renewal", { state });
  };

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
          rules={{ required: true }}
          placeholder="신분구분"
          options={["장교", "부사관", "병사", "군무원"]}
        />
        <Input
          control={control}
          name="name"
          disabled={false}
          rules={{ required: true }}
          placeholder="이름"
        />
        <Dropdown
          control={control}
          name="affiliation"
          disabled={false}
          rules={{ required: true }}
          placeholder="군구분"
          options={["육군", "해군", "공군", "해병대"]}
        />
        <Input
          control={control}
          name="serviceNumber"
          disabled={false}
          rules={{ required: true }}
          placeholder="군번"
        />
        <BtnList>
          <GoBackButton />
          <Button opacity={false} text="본인인증" />
        </BtnList>
      </Form>
    </ScreenContainer>
  );
}

export default FindPWPage2;
