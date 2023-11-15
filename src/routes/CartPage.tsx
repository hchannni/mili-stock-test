import styled from "styled-components";
import ScreenContainer from "../components/ScreenContainer";
import PageHeader from "../components/mypage/PageHeader";
import CartProduct from "../components/CartProduct";

function CartPage() {
  return (
    <ScreenContainer>
      <PageHeader pageTitle="장바구니" />
      <CartProduct name="아사히생맥주" price={2100} stocks={107} count={2} />
      <CartProduct name="아사히생맥주" price={2100} stocks={107} count={4} />
      <CartProduct name="아사히생맥주" price={2100} stocks={107} count={2} />
      <CartProduct name="아사히생맥주" price={2100} stocks={107} count={2} />
    </ScreenContainer>
  );
}

export default CartPage;
