import styled from "styled-components";

interface BtnProps {
  iscurrent: boolean;
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

  color: ${(props) => (props.iscurrent ? "#fff" : "#000")};
  font-weight: ${(props) => (props.iscurrent ? 600 : 400)};
  background-color: ${(props) => (props.iscurrent ? "#ff8200" : "#EDEDED")};
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  line-height: normal;

  transition: all 0.2s ease;
`;

interface PageButtonProps {
  iscurrent: boolean;
  pageNum: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function PageButton({ iscurrent, pageNum, onClick }: PageButtonProps) {
  return (
    <Btn iscurrent={iscurrent} onClick={onClick}>
      {pageNum}
    </Btn>
  );
}
export default PageButton;
