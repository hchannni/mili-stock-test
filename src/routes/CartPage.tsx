import styled from "styled-components";
import ScreenContainer from "../components/ScreenContainer";
import PageHeader from "../components/mypage/PageHeader";
import CartProduct from "../components/CartProduct";

const ShoppingNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 24px;
  width: 350px;
`;

const TotalInfo = styled.div`
  display: flex;
  padding: 12px 16px;
  gap: 18px;

  border-radius: 4px;
  background: #ff8200;
`;

const TotalCount = styled.span`
  color: #ffe5cb;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.382px;
`;

const BorderLine = styled.span`
  color: rgba(255, 178, 30, 0.75);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.382px;
`;

const TotalPrice = styled.span`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.382px;
`;

function CartPage() {
  return (
    <ScreenContainer>
      <PageHeader pageTitle="장바구니" />
      <CartProduct name="아사히생맥주" price={2100} stocks={107} count={2} />
      <CartProduct name="아사히생맥주" price={2100} stocks={107} count={4} />
      <CartProduct name="아사히생맥주" price={2100} stocks={107} count={2} />
      <CartProduct name="아사히생맥주" price={2100} stocks={107} count={2} />
      <ShoppingNav>
        <TotalInfo>
          <TotalCount>총 00개</TotalCount>
          <BorderLine>|</BorderLine>
          <TotalPrice>1,234,567 원</TotalPrice>
        </TotalInfo>
      </ShoppingNav>
    </ScreenContainer>
  );
}

export default CartPage;
