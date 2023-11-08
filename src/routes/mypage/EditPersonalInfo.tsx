import ScreenContainer from "../../components/ScreenContainer";
import PageHeader from "../../components/mypage/PageHeader";
import Menus from "../../components/mypage/Menus";
import Menu from "../../components/mypage/Menu";
import UserInfoMenu from "../../components/mypage/UserInfoMenu";
import { Link } from "react-router-dom";

function EditPersonalInfo() {
  return (
    <ScreenContainer>
      <PageHeader pageTitle="개인정보 수정" />
      <Menus>
        <Link to="/mypage/editpinfo/user">
          <UserInfoMenu
            title="회원 정보"
            name="허찬"
            phoneNumber="010-5266-0448"
            birth="2001.09.10"
            email="22-70010541@af.mil"
          />
        </Link>
        <Link to="/mypage/editpinfo/pw">
          <Menu title="비밀번호 변경" />
        </Link>
      </Menus>
    </ScreenContainer>
  );
}

export default EditPersonalInfo;
