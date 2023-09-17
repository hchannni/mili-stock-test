import { styled } from "styled-components";
import JoinInput from "./JoinInput";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

  margin-top: 16px;
  padding: 10px 0;
  width: 100%;
`;

const BtnList = styled.div`
  display: flex;
  gap: 8px;
`;

function JoinForm() {
  return (
    <Container>
      <JoinInput />
      <JoinInput />
      <JoinInput />
      <JoinInput />
      <BtnList>
        <Button opacity={true} text="이전" />
        <Button opacity={false} text="본인인증" />
      </BtnList>
    </Container>
  );
}

export default JoinForm;
