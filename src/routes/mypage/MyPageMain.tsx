import ScreenContainer from "../../components/ScreenContainer";
import styled from "styled-components";
import PageHeader from "../../components/mypage/PageHeader";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 40px 10px;
`;

const ProfileImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #808080;
`;

const Username = styled.h2`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 91.667% */
  letter-spacing: -0.408px;
`;

const Menus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Menu = styled.div`
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
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 110% */
  letter-spacing: -0.408px;
`;

function MyPageMain() {
  return (
    <ScreenContainer>
      <PageHeader pageTitle="My 페이지" />
      <Profile>
        <ProfileImg />
        <Username>OOO 님</Username>
      </Profile>
      <Menus>
        <Link to={`/`}>
          <Menu>
            <MenuTitle>개인정보 수정</MenuTitle>
            <FontAwesomeIcon icon={faChevronRight as IconProp} />
          </Menu>
        </Link>
        <Link to={`/`}>
          <Menu>
            <MenuTitle>개인정보 수정</MenuTitle>
            <FontAwesomeIcon icon={faChevronRight as IconProp} />
          </Menu>
        </Link>
        <Link to={`/`}>
          <Menu>
            <MenuTitle>고객센터</MenuTitle>
            <FontAwesomeIcon icon={faChevronRight as IconProp} />
          </Menu>
        </Link>
        <Link to={`/`}>
          <Menu>
            <MenuTitle>장바구니</MenuTitle>
            <FontAwesomeIcon icon={faChevronRight as IconProp} />
          </Menu>
        </Link>
        <Link to={`/`}>
          <Menu>
            <MenuTitle>개발자에게 커피 후원하기</MenuTitle>
            <FontAwesomeIcon icon={faChevronRight as IconProp} />
          </Menu>
        </Link>
      </Menus>
    </ScreenContainer>
  );
}

export default MyPageMain;
