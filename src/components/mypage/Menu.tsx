import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const MenuBox = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 8px;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid rgba(160, 160, 160, 0.25);
`;

const MenuTitle = styled.span`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 110% */
  letter-spacing: -0.408px;
`;

interface MenuProps {
  title: string;
}

function Menu(props: MenuProps) {
  return (
    <MenuBox>
      <MenuTitle>{props.title}</MenuTitle>
      <FontAwesomeIcon icon={faChevronRight as IconProp} />
    </MenuBox>
  );
}

export default Menu;
