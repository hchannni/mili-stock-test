
import React, { useState, useEffect } from 'react';
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
  const [cart, setCart] = useState<any>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);

  // 페이지 새로고침: 카트 불러옴
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      fetch(`${process.env.REACT_APP_DONG10_BASEURL}/carts`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setCart(data))
        .catch((error) => console.error(error));

    }
    else {
      console.error("Token is null. Please log in to access the cart.");
    }
  }, []);

  // totalPrice & totalCount 변경
  useEffect(() => {
    if (cart) {
      // Calculate total price when the cart changes
      let totalPrice = 0;
      let totalCount = 0;

      for (const product of cart.products) {
        totalPrice += product.productPrice;
        totalCount += product.productStock;
      }
      setTotalPrice(totalPrice);
      setTotalCount(totalCount);

      console.log(cart);

    }
  }, [cart]);

  if (!cart) {
    return <div>Loading...</div>;
  }

  const handleDeleteProduct = (productNumber: any) => {
    const token = localStorage.getItem("accessToken");

    fetch(`${process.env.REACT_APP_DONG10_BASEURL}/carts/productNumber/${productNumber}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCart((prevCart: any) => ({
          ...prevCart,
          products: prevCart.products.filter((product: { productNumber: any; }) => product.productNumber !== productNumber), // filter: 삭제된 productNumber를 제외한 상품들만 새 배열에
        }));
        console.log(`Product ${productNumber} deleted. Response:`, data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <ScreenContainer>
      <PageHeader pageTitle="장바구니" />
      {cart.products.map((product: any) => (
        <CartProduct
          key={product.productNumber}
          name={product.productTitle}
          price={product.productPrice}
          stocks={product.productStock}
          count={1}
          imageUrl={product.productImageUrl}
          onDelete={() => handleDeleteProduct(product.productNumber)}
        />
      ))}
      <ShoppingNav>
        <TotalInfo>
          <TotalCount>{`총 ${totalCount}개`}</TotalCount>
          <BorderLine>|</BorderLine>
          <TotalPrice>{`총합: ${totalPrice}원`}</TotalPrice>
        </TotalInfo>
      </ShoppingNav>
    </ScreenContainer>
  );
}

export default CartPage;
