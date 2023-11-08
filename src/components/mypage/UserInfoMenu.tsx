import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const MenuBox = styled.div`
  display: flex;
  width: 100%;
  padding: 0 8px;
  justify-content: space-between;
  align-items: center;
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

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  border-bottom: 1px solid rgba(160, 160, 160, 0.25);
  padding-bottom: 16px;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 16px;
`;

const InfoTitle = styled.span`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;

const InfoContent = styled.span`
  color: #767676;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

interface UserInfoMenuProps {
  title: string;
  name: string;
  phoneNumber: string;
  birth: string;
  email: string;
}

function UserInfoMenu(props: UserInfoMenuProps) {
  return (
    <>
      <MenuBox>
        <MenuTitle>{props.title}</MenuTitle>
        <FontAwesomeIcon icon={faChevronRight as IconProp} />
      </MenuBox>
      <Ul>
        <Li>
          <InfoTitle>이름</InfoTitle>
          <InfoContent>{props.name}</InfoContent>
        </Li>
        <Li>
          <InfoTitle>휴대전화</InfoTitle>
          <InfoContent>{props.phoneNumber}</InfoContent>
        </Li>
        <Li>
          <InfoTitle>생년월일</InfoTitle>
          <InfoContent>{props.birth}</InfoContent>
        </Li>
        <Li>
          <InfoTitle>이메일</InfoTitle>
          <InfoContent>{props.email}</InfoContent>
        </Li>
      </Ul>
    </>
  );
}

export default UserInfoMenu;
