import styled from "styled-components";
import ScreenContainer from "../../components/ScreenContainer";
import PageHeader from "../../components/mypage/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import QuestionForm from "./QuestionForm";

const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8px;
`;

const AddQuestionBtn = styled.button`
  border: none;
  background-color: inherit;

  font-size: 18px;
  font-weight: 600;
  color: #ff8200;
  border: 1.5px solid #ff8200;
  border-radius: 24px;
  padding: 4px 16px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Question = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8px;
  padding: 10px 4px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(160, 160, 160, 0.25);
`;

const QuestionInfo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`;

const QuestionText = styled.span`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.408px;
`;

interface QuestionStateProps {
  isAnswered: boolean;
}

const QuestionState = styled.span<QuestionStateProps>`
  /* 답변 달렸는지 여부 표시 */
  /* 답변완료 시 초록색으로 표시, 답변예정은 회색 */
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => (props.isAnswered ? "#008000" : "#a0a0a0")};
`;

const AnswerSheet = styled.div`
  width: 100%;
  padding: 16px 12px;
  background: rgba(160, 160, 160, 0.1);

  display: flex;
  gap: 8px;
  flex-direction: column;
`;

const AnswerText = styled.p``;

const ResponseInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Respondent = styled.p`
  align-self: stretch;

  color: #000;
  text-align: right;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 160% */
  letter-spacing: -0.408px;
`;

const ResponseTime = styled.p`
  align-self: stretch;

  color: #000;
  text-align: right;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 160% */
  letter-spacing: -0.408px;
`;

function QnABoard() {
  const [onClicked, setOnClicked] = useState(false);

  const onAddQuestionBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOnClicked(true);
  };

  return (
    <>
      <ScreenContainer>
        <PageHeader pageTitle="고객센터" />
        <BtnBox>
          <AddQuestionBtn onClick={onAddQuestionBtnClick}>
            질문 남기기
            <FontAwesomeIcon icon={faPenToSquare as IconProp} />
          </AddQuestionBtn>
        </BtnBox>
        <QuestionList>
          <Question>
            <QuestionInfo>
              <QuestionText>질문1로 뭘 넣어야 할지 모르겠어요.</QuestionText>
              <QuestionState isAnswered={true}>답변완료</QuestionState>
            </QuestionInfo>
            <FontAwesomeIcon icon={faChevronDown as IconProp} />
          </Question>
          <AnswerSheet>
            <AnswerText>답 변</AnswerText>
            <ResponseInfo>
              <Respondent>답변자: 허찬</Respondent>
              <ResponseTime>2023년 12월 28일 20:22</ResponseTime>
            </ResponseInfo>
          </AnswerSheet>
          <Question>
            <QuestionInfo>
              <QuestionText>질문1로 뭘 넣어야 할지 모르겠어요.</QuestionText>
              <QuestionState isAnswered={false}>답변예정</QuestionState>
            </QuestionInfo>
            <FontAwesomeIcon icon={faChevronDown as IconProp} />
          </Question>
          <Question>
            <QuestionInfo>
              <QuestionText>질문1로 뭘 넣어야 할지 모르겠어요.</QuestionText>
              <QuestionState isAnswered={false}>답변예정</QuestionState>
            </QuestionInfo>
            <FontAwesomeIcon icon={faChevronDown as IconProp} />
          </Question>
          <Question>
            <QuestionInfo>
              <QuestionText>질문1로 뭘 넣어야 할지 모르겠어요.</QuestionText>
              <QuestionState isAnswered={false}>답변예정</QuestionState>
            </QuestionInfo>
            <FontAwesomeIcon icon={faChevronDown as IconProp} />
          </Question>
        </QuestionList>
      </ScreenContainer>
      {onClicked && (
        <QuestionForm onClicked={onClicked} setOnClicked={setOnClicked} />
      )}
    </>
  );
}

export default QnABoard;
