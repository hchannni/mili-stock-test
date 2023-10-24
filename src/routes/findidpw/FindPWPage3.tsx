import Logo from "../../components/Logo";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BtnList from "../../components/BtnList";
import ScreenContainer from "../../components/ScreenContainer";
import TitleBox from "../../components/Title";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import GoBackButton from "../../components/GoBackButton";
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

const PopupBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Popup = styled.div`
  width: 320px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 53px 20px 97px 20px;
  border-radius: 16px;
  opacity: 0.95;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.05);
`;

function FindPWPage3() {
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
    // 1. '새 비밀번호' & '새 비밀번호 확인' 같은지 체크
    if (data.newPassword !== data.newPasswordConfirmation) {
      setError(
        "newPasswordConfirmation",
        {
          message: "비밀번호가 일치하지 않습니다. 다시 확인해 주세요!",
        },
        { shouldFocus: true }
      );
      return;
    }

    // 2. 1번 통과했으면, BE에 request 보내기
    const submitData = { ...state, ...data };
    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_DONG10_BASEURL}/members/help/pwChange`,
      data: submitData,
    });

    const { status, reason } = response.data;
    if (status !== 200) {
      toastMessage = reason;
      setToast(true);
      return;
    }

    navigate("/findpw/success");
  };
  // BE 연동 힘들 때 테스트용!
  // const onSubmit = (data: any) => {
  //   navigate("/findpw/success");
  // };

  return (
    <ScreenContainer>
      <PopupBackground>
        <Popup>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              control={control}
              name="newPassword"
              rules={{
                required: "'새 비밀번호'는 필수 항목입니다.",
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{7,16}$/,
                  message:
                    "비밀번호는 영문+숫자+특수문자를 포함한 8~20자여야 합니다",
                },
              }}
              placeholder="새 비밀번호"
              type="password"
              validationError={errors.newPassword ? true : false}
            />
            {errors.newPassword && (
              <ErrorMessage message={errors.newPassword?.message?.toString()} />
            )}
            <Input
              control={control}
              name="newPasswordConfirmation"
              rules={{
                required: "'새 비밀번호 확인'은 필수 항목입니다.",
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{7,16}$/,
                  message:
                    "비밀번호는 영문+숫자+특수문자를 포함한 8~20자여야 합니다",
                },
              }}
              placeholder="새 비밀번호 확인"
              type="password"
              validationError={errors.newPasswordConfirmation ? true : false}
            />
            {errors.newPasswordConfirmation && (
              <ErrorMessage
                message={errors.newPasswordConfirmation?.message?.toString()}
              />
            )}
            <BtnList>
              <GoBackButton />
              {/* <Button opacity={true} text="취소" /> */}
              <Button opacity={false} text="변경" />
            </BtnList>
          </Form>
        </Popup>
        {toast && (
          <ToastPopup
            message={toastMessage}
            toast={toast}
            setToast={setToast}
          />
        )}
      </PopupBackground>
      {/* <Logo />
      <TitleBox
        TitleText="비밀번호 찾기"
        CaptionText="비밀번호를 찾기 위해 본인인증을 진행합니다."
      />
      <Form>
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
          <Button opacity={true} text="이전" />
          <Button opacity={false} text="본인인증" />
        </BtnList>
      </Form> */}
    </ScreenContainer>
  );
}

export default FindPWPage3;
