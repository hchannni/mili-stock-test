import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Main from "../src/pages/main/Main";
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
import ProductForm from "./routes/ProductForm";
import LogInPage from "./routes/LogInPage";
import CartPage from "./routes/CartPage";
import MyPageMain from "./routes/mypage/MyPageMain";
import PWCheck from "./routes/mypage/PWCheck";
import EditPersonalInfo from "./routes/mypage/EditPersonalInfo";
import UpdateUserInfo from "./routes/mypage/UpdateUserInfo";
import ChangePassword from "./routes/mypage/ChangePassword";
import SearchPage from "./routes/SearchPage";
import ItemsPage from "./routes/ItemsPage";
import "./transition.css";
import LikeProductPage from "./routes/LikeProductPage";
import CustomerService from "./routes/mypage/CustomerService";

function Router() {
  const location = useLocation();
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname} classNames="slide" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<LogInPage />} />
          <Route path="/main" element={<Main />} />
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
          <Route path="/mypage/editpinfo/pwcheck" element={<PWCheck />} />
          <Route path="/mypage/editpinfo/home" element={<EditPersonalInfo />} />
          <Route path="/mypage/editpinfo/user" element={<UpdateUserInfo />} />
          <Route path="/mypage/editpinfo/pw" element={<ChangePassword />} />
          <Route path="/mypage/cs" element={<CustomerService />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/likeproduct" element={<LikeProductPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/allitems/:category" element={<ItemsPage />} />
          <Route path="/product/create" element={<ProductForm />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Router;
