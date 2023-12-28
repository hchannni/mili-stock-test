import ScreenContainer from "../../components/ScreenContainer";
import styled from "styled-components";
import PageHeader from "../../components/mypage/PageHeader";
import { Link, useLocation } from "react-router-dom";
import Menus from "../../components/mypage/Menus";
import Menu from "../../components/mypage/Menu";
import axios from "axios";
import { useEffect, useState } from "react";

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 0 10px 40px 10px;
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

interface IUserInfo {
  status: number;
  memberId: number;
  serviceNumber: string;
  name: string;
  userId: string;
  job: string;
  affiliation: string;
  militaryRank: string;
  birth: string;
  phoneNumber: string;
  email: string;
  gender: string;
  appointment: string;
  discharge: string;
}

function MyPageMain() {
  const { state } = useLocation();
  const accessToken = localStorage.getItem("accessToken");
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  useEffect(() => {
    const getUserInfo = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_DONG10_BASEURL}/members/edit/getInfo`,
        data: null,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUserInfo(response.data);
    };

    getUserInfo();
  }, [accessToken]);

  return (
    <ScreenContainer>
      <PageHeader pageTitle="My 페이지" />
      <Profile>
        <ProfileImg />
        <Username>{`${state ? state.name : userInfo?.name} 님`}</Username>
      </Profile>
      <Menus>
        <Link to={`/mypage/editpinfo/pwcheck`}>
          <Menu title="개인정보 수정" />
        </Link>
        <Link to={`/likeproduct`}>
          <Menu title="관심상품" />
        </Link>
        <Link to={`/mypage/cs`}>
          <Menu title="고객센터" />
        </Link>
        <Link to={`/cartpage`}>
          <Menu title="장바구니" />
        </Link>
        <Link to={`/`}>
          <Menu title="개발자에게 커피 후원하기" />
        </Link>
      </Menus>
    </ScreenContainer>
  );
}

export default MyPageMain;
