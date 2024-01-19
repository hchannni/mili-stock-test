import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

// 각 Question마다 Answer 내용이 open되어 있는지를 판단하는 props 달아주기(boolean)
// 이 값이 true면,
// 1. 각 Question마다 연동되어 있는 Answer Sheet를 화면에 보이게 한다.
//   1-1. Question과 Answer을 연동하는 방법??
//    -> useState로 boolean의 배열을 만들어서 인덱스 번호로 관리?
//    -> 위 방법은 배열 길이를 모른다는 문제점 등이 있어서 힘들 것 같고 ...
//      그냥 Question과 Answer를 component로 따로 빼서 거기서 state로 관리하는 게 나을 듯!
// 2. Question에 있는 Chevron을 down에서 up으로 바꾼다.
// 3. 자연스러운 애니메이션까지 추가 -> 굳이 없어도 될 듯...?
const QuestionBox = styled.div`
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

const AnswerToggleBtn = styled.button`
  background-color: inherit;
  border: none;
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

interface QuestionProps {
  questionText: string;
  isAnswered: boolean;
  answerText: string;
  respondent: string;
  responseTime: string;
}

function Question(props: QuestionProps) {
  const [isAnswerOpen, setIsAnswerOpened] = useState(false);

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(e);
    setIsAnswerOpened((v) => !v);
  };

  return (
    <>
      <QuestionBox>
        <QuestionInfo>
          <QuestionText>{props.questionText}</QuestionText>
          <QuestionState isAnswered={props.isAnswered}>
            {props.isAnswered ? "답변완료" : "답변예정"}
          </QuestionState>
        </QuestionInfo>
        <AnswerToggleBtn onClick={onClick}>
          <FontAwesomeIcon icon={isAnswerOpen ? faChevronUp : faChevronDown} />
        </AnswerToggleBtn>
      </QuestionBox>
      {isAnswerOpen && (
        <AnswerSheet>
          <AnswerText>{props.answerText}</AnswerText>
          <ResponseInfo>
            <Respondent>{`답변자: ${props.respondent}`}</Respondent>
            <ResponseTime>{props.responseTime}</ResponseTime>
          </ResponseInfo>
        </AnswerSheet>
      )}
    </>
  );
}

export default Question;
