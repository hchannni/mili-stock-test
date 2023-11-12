import styled from "styled-components";
import ScreenContainer from "../../components/ScreenContainer";
import PageHeader from "../../components/mypage/PageHeader";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import ErrorMessage from "../../components/ErrorMessage";
import Input from "../../components/Input";
import BtnList from "../../components/BtnList";
import Button from "../../components/Button";
import ToastPopup from "../../components/ToastPopup";
import PopupMessage from "../../components/mypage/PopupMessage";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

function ChangePassword() {
  const {
    handleSubmit,
    formState: { errors },
    control,
    setError,
  } = useForm();
  const navigate = useNavigate();
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("Toast Message");
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  const accessToken = localStorage.getItem("accessToken");

  const onSubmit = async (data: any) => {
    // 1. '기존 비밀번호'와 '새 비밀번호'가 다른지 검사 (같으면 에러 표시)
    if (data.currentPassword === data.newPassword) {
      setError(
        "newPassword",
        { message: "기존 비밀번호와 같은 비밀번호로 변경할 수 없습니다." },
        { shouldFocus: true }
      );
      return;
    }

    // 2. '새 비밀번호'와 '새 비밀번호 확인'이 같은지 검사 (다르면 에러 표시)
    if (data.newPassword !== data.newPasswordConfirmation) {
      setError(
        "newPasswordConfirmation",
        {
          message: "새 비밀번호가 일치하지 않습니다. 다시 확인해 주세요!",
        },
        { shouldFocus: true }
      );
      return;
    }

    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_DONG10_BASEURL}/members/edit/pwChange`,
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
      setModalOpen(true);
      <PopupMessage
        modalOpen={modalOpen}
        message="비밀번호가 변경되었습니다!"
        onAfterClose={() => {
          navigate("/mypage/editpinfo/home", { state: { data } });
        }}
        onRequestClose={closeModal}
        onClickfn={closeModal}
      />;
    }
  };

  return (
    <ScreenContainer>
      <PageHeader pageTitle="비밀번호 변경" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          control={control}
          name="currentPassword"
          rules={{
            required: "'기존 비밀번호'는 필수 항목입니다.",
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{7,16}$/,
              message:
                "비밀번호는 영문+숫자+특수문자를 포함한 8~20자여야 합니다",
            },
          }}
          placeholder="기존 비밀번호"
          type="password"
          validationError={errors.currentPassword ? true : false}
        />
        {errors.currentPassword && (
          <ErrorMessage message={errors.currentPassword?.message?.toString()} />
        )}
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
          <Button opacity={false} text="변경" />
        </BtnList>
      </Form>
      {toast && (
        <ToastPopup message={toastMessage} toast={toast} setToast={setToast} />
      )}
    </ScreenContainer>
  );
}

export default ChangePassword;
