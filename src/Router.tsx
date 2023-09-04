import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./routes/MainPage";

// Switch : 한 번에 하나의 Route를 렌더링할 수 있는 방법.
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
