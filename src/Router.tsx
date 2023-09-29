import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./routes/MainPage";
import JoinPage from "./routes/JoinPage";
import JoinPage2 from "./routes/JoinPage2";
import JoinPage3 from "./routes/JoinPage3";

// Switch : 한 번에 하나의 Route를 렌더링할 수 있는 방법.
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <JoinPage3 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
