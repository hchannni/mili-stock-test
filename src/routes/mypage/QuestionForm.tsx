import styled, { css, keyframes } from "styled-components";
import BtnList from "../../components/BtnList";
import Button from "../../components/Button";

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
  gap: 16px;
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

const TitleInput = styled.input``;

const ContentInput = styled.input``;

interface QuestionFormProps {
  onClicked: boolean;
  setOnClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

function QuestionForm(props: QuestionFormProps) {
  return (
    <Container onClicked={props.onClicked}>
      <Form>
        <Msg>무엇이 궁금하신가요?</Msg>
        <TitleInput placeholder="제목을 입력해 주세요" />
        <ContentInput placeholder="내용을 입력해 주세요" />
        <BtnList>
          <Button opacity={false} text="질문하기" />
        </BtnList>
      </Form>
    </Container>
  );
}

export default QuestionForm;
