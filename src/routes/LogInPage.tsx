import { Link } from "react-router-dom";
import ScreenContainer from "../components/ScreenContainer";

function LogInPage() {
  return (
    <ScreenContainer>
      <Link to={"/join/auth"}>회원가입</Link>
      <Link to={"/findid/auth"}>ID 찾기</Link>
      <Link to={"/findpw/idcheck"}>PW 찾기</Link>
    </ScreenContainer>
  );
}

export default LogInPage;
