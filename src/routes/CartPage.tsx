import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import ScreenContainer from "../components/ScreenContainer";
import PageHeader from "../components/mypage/PageHeader";
import CartProduct from "../components/CartProduct";

function CartPage() {
  const [cart, setCart] = useState<any>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);

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

  // totalPrice 변경
  useEffect(() => {
    if (cart) {
      // Calculate total price when the cart changes
      let totalPrice = 0;

      for (const product of cart.products) {
        totalPrice += product.productPrice;
      }
      setTotalPrice(totalPrice);

      console.log(cart);

    }
  }, [cart]);

  if (!cart) {
    return <div>Loading...</div>;
  }

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
        />
      ))}

    </ScreenContainer>
  );
}

export default CartPage;
