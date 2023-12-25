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

  transition: all 0.2s ease;
`;

interface PageButtonProps {
  isCurrent: boolean;
  pageNum: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function PageButton({ isCurrent, pageNum, onClick }: PageButtonProps) {
  return (
    <Btn isCurrent={isCurrent} onClick={onClick}>
      {pageNum}
    </Btn>
  );
}
export default PageButton;
