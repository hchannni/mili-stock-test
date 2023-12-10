import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./routes/MainPage";
import Main from "./pages/main/Main"
import JoinPage from "./routes/JoinPage";


// Switch : 한 번에 하나의 Route를 렌더링할 수 있는 방법.
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
