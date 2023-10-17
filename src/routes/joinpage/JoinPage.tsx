import Logo from "../../components/Logo";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BtnList from "../../components/BtnList";
import ScreenContainer from "../../components/ScreenContainer";
import TitleBox from "../../components/Title";
import GoBackButton from "../../components/GoBackButton";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

  margin-top: 16px;
  padding: 10px 0;
  width: 100%;
`;

function JoinPage() {
  const {
    handleSubmit,
    formState: { errors },
    control,
    setError,
  } = useForm();
  const navigate = useNavigate();
  const [toast, setToast] = useState(false);

  const onSubmit = async (data: any) => {
    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_DONG10_BASEURL}/members/identity`,
      data: data,
    });

    console.log(response);
    const { status, reason } = response.data;
    if (status !== 200) {
      // 에러 발생시키기 -> 단, 어디서 발생했는지는 알 수가 없다... 아숩
      // setError의 name은 일단 job으로 두고, shouldFocus는 false로 해 두자(임시방편).
      setError("job", { message: reason }, { shouldFocus: false });
      setToast(true);
      return;
    } else {
      navigate("/join/idpw", { state: { ...data } });
    }
  };

  return (
    <ScreenContainer>
      <Logo />
      <TitleBox
        TitleText="본인인증"
        CaptionText="회원가입에 앞서 본인인증을 진행합니다."
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
        />
        <Input
          control={control}
          name="name"
          disabled={false}
          rules={{
            required: "'이름'은 필수 항목입니다.",
            pattern: {
              value: /^[a-zA-Z가-힣\\\\s]{2,15}/,
              message:
                "'이름'은 영문자, 한글, 공백포함 2자부터 15자까지 가능합니다.",
            },
          }}
          placeholder="이름"
        />
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
        />
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
        />
        <BtnList>
          <GoBackButton />
          <Button opacity={false} text="본인인증" />
        </BtnList>
      </Form>
      {/* {toast && } */}
    </ScreenContainer>
  );
}

export default JoinPage;
