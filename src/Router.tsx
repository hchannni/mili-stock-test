import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./routes/MainPage";
import JoinPage from "./routes/joinpage/JoinPage";
import JoinPage2 from "./routes/joinpage/JoinPage2";
import JoinPage3 from "./routes/joinpage/JoinPage3";
import FindIdPage from "./routes/findidpw/FindIdPage";
import FindIdPage2 from "./routes/findidpw/FindIdPage2";
import FindPWPage from "./routes/findidpw/FindPWPage";
import FindPWPage2 from "./routes/findidpw/FindPWPage2";
import FindPWPage3 from "./routes/findidpw/FindPWPage3";
import FindPWPage4 from "./routes/findidpw/FindPWPage4";
import LogInPage from "./routes/LogInPage";

// Switch : 한 번에 하나의 Route를 렌더링할 수 있는 방법.
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/join/auth" element={<JoinPage />} />
        <Route path="/join/idpw" element={<JoinPage2 />} />
        <Route path="/join/detail" element={<JoinPage3 />} />
        {/* <Route path="/join/success" element={<JoinPage4 />} /> */}
        <Route path="/findid/auth" element={<FindIdPage />} />
        {/* <Route path="/findid/군번" element={<FindIdPage2 />} /> */}
        <Route path="/findpw/idcheck" element={<FindPWPage />} />
        <Route path="/findpw/auth" element={<FindPWPage2 />} />
        <Route path="/findpw/renewal" element={<FindPWPage3 />} />
        <Route path="/findpw/success" element={<FindPWPage4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
