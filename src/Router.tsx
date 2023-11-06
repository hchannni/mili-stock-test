import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import MainPage from "./routes/MainPage";
import JoinPage from "./routes/joinpage/JoinPage";
import JoinPage2 from "./routes/joinpage/JoinPage2";
import JoinPage3 from "./routes/joinpage/JoinPage3";
import JoinPage4 from "./routes/joinpage/JoinPage4";
import FindIdPage from "./routes/findidpw/FindIdPage";
import FindIdPage2 from "./routes/findidpw/FindIdPage2";
import FindPWPage from "./routes/findidpw/FindPWPage";
import FindPWPage2 from "./routes/findidpw/FindPWPage2";
import FindPWPage3 from "./routes/findidpw/FindPWPage3";
import FindPWPage4 from "./routes/findidpw/FindPWPage4";
import LogInPage from "./routes/LogInPage";
import "./transition.css";
import MyPageMain from "./routes/mypage/MyPageMain";

function Router() {
  const location = useLocation();
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname} classNames="slide" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<LogInPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/join/auth" element={<JoinPage />} />
          <Route path="/join/idpw" element={<JoinPage2 />} />
          <Route path="/join/detail" element={<JoinPage3 />} />
          <Route path="/join/success" element={<JoinPage4 />} />
          <Route path="/findid/auth" element={<FindIdPage />} />
          <Route path="/findid/milnum" element={<FindIdPage2 />} />
          <Route path="/findpw/idcheck" element={<FindPWPage />} />
          <Route path="/findpw/auth" element={<FindPWPage2 />} />
          <Route path="/findpw/renewal" element={<FindPWPage3 />} />
          <Route path="/findpw/success" element={<FindPWPage4 />} />
          <Route path="/mypage/main" element={<MyPageMain />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Router;
