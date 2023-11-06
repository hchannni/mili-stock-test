import styled from "styled-components";
import ScreenContainer from "../../components/ScreenContainer";
import PageHeader from "../../components/mypage/PageHeader";
import Menus from "../../components/mypage/Menus";
import Menu from "../../components/mypage/Menu";

const UserInfoMenu = styled(Menu)``;

function EditPersonalInfo() {
  return (
    <ScreenContainer>
      <PageHeader pageTitle="개인정보 수정" />
      <Menus>
        <Menu title="회원 정보" />
        <Menu title="비밀번호 변경" />
      </Menus>
    </ScreenContainer>
  );
}

export default EditPersonalInfo;
