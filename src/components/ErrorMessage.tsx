import styled from "styled-components";

const Text = styled.p`
  width: 100%;
  margin-top: 4px;

  color: #e00b03;
  font-size: 12px;
  text-align: left;
`;

interface ErrorMessageProps {
  message: string | undefined;
}

function ErrorMessage(props: ErrorMessageProps) {
  return <Text>{props.message}</Text>;
}

export default ErrorMessage;
