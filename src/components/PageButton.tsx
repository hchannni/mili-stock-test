import styled from "styled-components";

interface BtnProps {
  isCurrent: boolean;
}

const Btn = styled.button<BtnProps>`
  border: none;
  background-color: inherit;

  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => (props.isCurrent ? "#fff" : "#000")};
  font-weight: ${(props) => (props.isCurrent ? 600 : 400)};
  background-color: ${(props) => (props.isCurrent ? "#ff8200" : "#EDEDED")};
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  line-height: normal;

  transition: color 0.5s ease-in-out;
`;

interface PageButtonProps {
  isCurrent: boolean;
  pageNum: number;
}

function PageButton({ isCurrent, pageNum }: PageButtonProps) {
  return <Btn isCurrent={isCurrent}>{pageNum}</Btn>;
}
export default PageButton;
