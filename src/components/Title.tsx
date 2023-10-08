import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Title = styled.h1`
  text-align: left;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 78.571% */
  letter-spacing: -0.408px;
`;

const Caption = styled.span`
  color: #767676;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.408px;
`;

interface TitleBoxProps {
  TitleText: string;
  CaptionText?: string;
}

function TitleBox({ TitleText, CaptionText = "" }: TitleBoxProps) {
  return (
    <Container>
      <Title>{TitleText}</Title>
      {CaptionText === "" ? <></> : <Caption>{CaptionText}</Caption>}
    </Container>
  );
}

export default TitleBox;
