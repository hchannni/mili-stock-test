import styled, { css, keyframes } from "styled-components";
import BtnList from "../../components/BtnList";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import React from "react";
import axios from "axios";

const popup = keyframes`
  0% {opacity: 0; transform: translate(0, 0);}
  100% {opacity: 1; transform: translate(0, -100%);}
`;

const popdown = keyframes`
  0% {opacity: 1; transform: translate(0, -100%);}
  100% {opacity: 0; transform: translate(0, 0);}
`;

interface ContainerProps {
  onClicked: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 390px;
  padding: 0 20px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ onClicked }) =>
    onClicked
      ? css`
          animation: ${popup} 0.5s forwards;
        `
      : css`
          animation: ${popdown} 0.5s forwards;
        `}
`;

const Form = styled.form`
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  width: 75%;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Msg = styled.h1`
  align-self: stretch;
  color: var(--Main, #ff8200);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.24px;
`;

const TitleInput = styled.input`
  border: 1px solid #ff8200;
  border-radius: 8px;
  padding: 4px 8px;
  width: 100%;

  &:focus {
    outline: none;

    &::placeholder {
      color: transparent;
    }
  }
`;

const ContentInput = styled.input`
  border: 1px solid #ff8200;
  border-radius: 8px;
  padding: 4px 8px;
  width: 100%;
  height: 120px;

  &:focus {
    outline: none;

    &::placeholder {
      color: transparent;
    }
  }

  &::placeholder {
    transform: translateY(-40px);
  }
`;

interface QuestionFormProps {
  onClicked: boolean;
  setOnClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

function QuestionForm(props: QuestionFormProps) {
  const { register, handleSubmit } = useForm();
  const token = localStorage.getItem("accessToken");

  const onContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Container의 바깥 배경 부분(회색 부분)을 누르면, onClicked를 false로 만들면서, 질문 form이 밑으로 내려가도록 구현한다.
    e.preventDefault();
    props.setOnClicked(false);
  };

  const onFormClick = (e: React.MouseEvent<HTMLFormElement>) => {
    e.stopPropagation(); // Form을 클릭하는 이벤트가 Container로 전파되지 않도록 차단
  };

  const onSubmit = async (data: any) => {
    console.log(data);

    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_DONG10_BASEURL}/boards/post`,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // status 201 나오면서 성공!
    console.log(response);
    props.setOnClicked(false);
  };

  return (
    <Container onClicked={props.onClicked} onClick={onContainerClick}>
      <Form onSubmit={handleSubmit(onSubmit)} onClick={onFormClick}>
        <Msg>무엇이 궁금하신가요?</Msg>
        <TitleInput {...register("title")} placeholder="제목을 입력해 주세요" />
        <ContentInput
          {...register("content")}
          type="textarea"
          placeholder="내용을 입력해 주세요"
        />
        <BtnList>
          <Button opacity={false} text="질문하기" />
        </BtnList>
      </Form>
    </Container>
  );
}

export default QuestionForm;
