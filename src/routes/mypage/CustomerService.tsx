import styled from "styled-components";
import ScreenContainer from "../../components/ScreenContainer";
import PageHeader from "../../components/mypage/PageHeader";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const QuestionBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 32px;
`;

const QuestionBtn = styled(Link)`
  display: inline-flex;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  background: #ff8200;

  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.408px;
`;

const FAPenIcon = styled(FontAwesomeIcon)`
  color: #fff;
  width: 16px;
  height: 16px;
`;

const SectionHeader = styled.h1`
  color: #000;
  text-align: start;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 91.667% */
  letter-spacing: -0.408px;

  margin-bottom: 8px;
`;

const FAQList = styled.div`
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

function CustomerService() {
  return (
    <ScreenContainer>
      <PageHeader pageTitle="고객센터" />
      <QuestionBtnBox>
        <QuestionBtn to="/mypage/cs/qnaboard">
          <FAPenIcon icon={faPen as IconProp} />
          무엇이든 질문해 주세요!(클릭)
        </QuestionBtn>
      </QuestionBtnBox>
      <SectionHeader>자주 묻는 질문 FAQ</SectionHeader>
      <FAQList>
        <Question>
          <QuestionText>질문1로 뭘 넣어야 할지 모르겠어요.</QuestionText>
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
          <QuestionText>질문1로 뭘 넣어야 할지 모르겠어요.</QuestionText>
          <FontAwesomeIcon icon={faChevronDown as IconProp} />
        </Question>
        <Question>
          <QuestionText>질문1로 뭘 넣어야 할지 모르겠어요.</QuestionText>
          <FontAwesomeIcon icon={faChevronDown as IconProp} />
        </Question>
        <Question>
          <QuestionText>질문1로 뭘 넣어야 할지 모르겠어요.</QuestionText>
          <FontAwesomeIcon icon={faChevronDown as IconProp} />
        </Question>
      </FAQList>
    </ScreenContainer>
  );
}

export default CustomerService;
