import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Btn = styled.button`
  border: none;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  padding: 4px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Desc = styled.span`
  color: #767676;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 200% */
  letter-spacing: -0.408px;
  white-space: nowrap;
`;

const Frame = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PageName = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 200% */
  letter-spacing: -0.408px;
`;

const FAIcon = styled(FontAwesomeIcon)`
  width: 16px;
  height: 16px;
`;

interface HookingBtnProps {
  desc: string;
  pageName: string;
  link: string;
}

function HookingButton({ desc, pageName, link }: HookingBtnProps) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`${link}`);
  };
  return (
    <Btn onClick={onClick}>
      <Desc>{desc}</Desc>
      <Frame>
        <PageName>{pageName}</PageName>
        <FAIcon icon={faChevronCircleRight as IconProp} />
      </Frame>
    </Btn>
  );
}

export default HookingButton;
