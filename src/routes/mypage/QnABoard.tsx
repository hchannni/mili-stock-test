import styled from "styled-components";
import ScreenContainer from "../../components/ScreenContainer";
import PageHeader from "../../components/mypage/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useEffect, useState } from "react";
import QuestionForm from "./QuestionForm";
import Question from "../../components/mypage/Question";
import axios from "axios";

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

function QnABoard() {
  const [onClicked, setOnClicked] = useState(false);
  const [questions, setQuestions] = useState([]);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    async function getQuestions() {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_DONG10_BASEURL}/boards`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
      if (response.status === 200) {
        setQuestions(response.data.content);
      }
    }

    getQuestions();
  }, [token]);

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
          <Question
            questionText="질문1로 뭘 넣어야 할지 모르겠어요."
            isAnswered={true}
            answerText="답변길이테스트 답변길이테스트 답변길이테스트 답변길이테스트 답변길이테스트 답변길이테스트 답변길이테스트 답변길이테스트 답변길이테스트 답변길이테스트 답변길이테스트 답변길이테스트 답변길이테스트 답변길이테스트 답변길이테스트 "
            respondent="허찬"
            responseTime="2024년 01월 17일 15:01"
          />
          <Question
            questionText="질문1로 뭘 넣어야 할지 모르겠어요."
            isAnswered={false}
            answerText="빠른 시일 내에 답변 드리겠습니다."
            respondent="미리스톡 운영진"
            responseTime="-"
          />
          <Question
            questionText="질문1로 뭘 넣어야 할지 모르겠어요."
            isAnswered={false}
            answerText="빠른 시일 내에 답변 드리겠습니다."
            respondent="미리스톡 운영진"
            responseTime="-"
          />
          <Question
            questionText="질문1로 뭘 넣어야 할지 모르겠어요."
            isAnswered={true}
            answerText="답 변"
            respondent="허찬"
            responseTime="2024년 01월 17일 15:01"
          />
        </QuestionList>
      </ScreenContainer>
      {onClicked && (
        <QuestionForm onClicked={onClicked} setOnClicked={setOnClicked} />
      )}
    </>
  );
}

export default QnABoard;
