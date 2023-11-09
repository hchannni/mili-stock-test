import ScreenContainer from "../../components/ScreenContainer";
import PageHeader from "../../components/mypage/PageHeader";
import Menus from "../../components/mypage/Menus";
import Menu from "../../components/mypage/Menu";
import UserInfoMenu from "../../components/mypage/UserInfoMenu";
import { Link, useLocation } from "react-router-dom";

function EditPersonalInfo() {
  const { state } = useLocation();
  return (
    <ScreenContainer>
      <PageHeader pageTitle="개인정보 수정" />
      <Menus>
        <Link to="/mypage/editpinfo/user" state={state}>
          <UserInfoMenu
            title="회원 정보"
            name={state.name}
            phoneNumber={state.phoneNumber}
            birth={state.birth}
            email={state.email}
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
