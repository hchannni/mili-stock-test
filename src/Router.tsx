import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./routes/MainPage";
import JoinPage from "./routes/joinpage/JoinPage";
import JoinPage2 from "./routes/joinpage/JoinPage2";
import JoinPage3 from "./routes/joinpage/JoinPage3";
import FindIdPage from "./routes/findidpw/FindIdPage";
import FindIdPage2 from "./routes/findidpw/FindIdPage2";

// Switch : 한 번에 하나의 Route를 렌더링할 수 있는 방법.
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <FindIdPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
