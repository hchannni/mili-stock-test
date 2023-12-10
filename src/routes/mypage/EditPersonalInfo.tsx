import ScreenContainer from "../../components/ScreenContainer";
import PageHeader from "../../components/mypage/PageHeader";
import Menus from "../../components/mypage/Menus";
import Menu from "../../components/mypage/Menu";
import UserInfoMenu from "../../components/mypage/UserInfoMenu";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

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

function EditPersonalInfo() {
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
      <PageHeader pageTitle="개인정보 수정" />
      {userInfo && (
        <Menus>
          <Link to="/mypage/editpinfo/user" state={userInfo}>
            <UserInfoMenu
              title="회원 정보"
              name={userInfo.name}
              phoneNumber={userInfo.phoneNumber}
              birth={userInfo.birth}
              email={userInfo.email}
            />
          </Link>
          <Link to="/mypage/editpinfo/pw">
            <Menu title="비밀번호 변경" />
          </Link>
        </Menus>
      )}
    </ScreenContainer>
  );
}

export default EditPersonalInfo;
