// 11.27 TODO: Make product be deleted when cnt=0 (ask chatgpt)

import { useState, useEffect } from "react";
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
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setCart(data))
        .catch((error) => console.error(error));
    } else {
      console.error("Token is null. Please log in to access the cart.");
    }
  }, []);

  // totalPrice & totalCount 변경
  useEffect(() => {
    if (cart) {
      // Calculate total price when the cart changes
      let totalPrice = 0;
      let totalCount = 0;

      for (const cartItem of cart.cartItems) {
        totalPrice += cartItem.product.productPrice;
        totalCount += cartItem.quantity;
      }
      setTotalPrice(totalPrice);
      setTotalCount(totalCount);
    }
  }, [cart]);

  if (!cart) {
    return <div>Loading...</div>;
  }

  const handleDeleteProduct = (productNumber: any) => {
    const token = localStorage.getItem("accessToken");

    fetch(
      `${process.env.REACT_APP_DONG10_BASEURL}/carts/productNumber/${productNumber}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setCart((prevCart: any) => ({
            ...prevCart,
            cartItems: prevCart.cartItems.filter(
              (cartItem: { product: { productNumber: any } }) =>
                cartItem.product.productNumber !== productNumber
            ), // filter: 삭제된 productNumber를 제외한 상품들만 새 배열에
          }));
        }, 100);
        console.log(`Product ${productNumber} deleted. Response:`, data);
      })
      .catch((error) => console.error(error));
  };

  const handleIncreaseCount = (productNumber: any, quantityAdded: number) => {
    const token = localStorage.getItem("accessToken");

    fetch(
      `${process.env.REACT_APP_DONG10_BASEURL}/carts/increaseCount/productNumber/${productNumber}/by/${quantityAdded}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Parsed JSON Data:", data);

        setCart((prevCart: any) => ({
          // prevCart = current state of "cart"
          ...prevCart,
          cartItems: prevCart.cartItems.map(
            (cartItem: {
              product: { productNumber: any };
              quantity: number;
            }) => {
              if (cartItem.product.productNumber === productNumber) {
                // Update the quantity of the specific cart item
                return {
                  ...cartItem,
                  quantity: data,
                };
              }
              return cartItem;
            }
          ),
        }));
      })
      .catch((error) => console.error(error));
  };

  const handleDecreaseCount = (
    productNumber: any,
    quantitySubtracted: number
  ) => {
    const token = localStorage.getItem("accessToken");

    fetch(
      `${process.env.REACT_APP_DONG10_BASEURL}/carts/decreaseCount/productNumber/${productNumber}/by/${quantitySubtracted}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Parsed JSON Data:", data);

        setCart((prevCart: any) => {
          const updatedCartItems = prevCart.cartItems.map(
            (cartItem: {
              product: { productNumber: any };
              quantity: number;
            }) => {
              if (cartItem.product.productNumber === productNumber) {
                // Update the quantity of the specific cart item
                return {
                  ...cartItem,
                  quantity: data,
                };
              }
              return cartItem;
            }
          );

          // Check if the new quantity is less than or equal to 0
          const updatedCartItem = updatedCartItems.find(
            (cartItem: any) => cartItem.product.productNumber === productNumber
          );
          if (updatedCartItem && updatedCartItem.quantity <= 0) {
            // If the quantity is less than or equal to 0, call handleDeleteProduct
            handleDeleteProduct(productNumber);
          }

          return {
            ...prevCart,
            cartItems: updatedCartItems,
          };
        });
      })
      .catch((error) => console.error(error));
  };

  const handleHeartClick = async (productNumber: any, heart: any) => {
    // 하트 x -> 하트 추가
    if (heart == null) {
      console.log("heart==null");
      try {
        const token = localStorage.getItem("accessToken");
        const response = await fetch(
          `${process.env.REACT_APP_DONG10_BASEURL}/hearts/product/${productNumber}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();

          setCart((prevCart: any) => ({
            ...prevCart, // Shallow copy of prevCart
            cartItems: prevCart.cartItems.map(
              (cartItem: { product: { productNumber: any }; heart: any }) => {
                if (cartItem.product.productNumber === productNumber) {
                  // Update the heart of the specific cart item
                  return {
                    ...cartItem,
                    heart: data,
                  };
                }
                return cartItem;
              }
            ),
          }));
        } else {
          // Handle error response
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        // Handle network error
        console.error("Error:", error);
      }
    }
    // 하트 o -> 하트 해제
    else {
      try {
        console.log("heart!=null");
        const token = localStorage.getItem("accessToken");
        const response = await fetch(
          `${process.env.REACT_APP_DONG10_BASEURL}/hearts/product/${productNumber}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          setCart((prevCart: any) => ({
            ...prevCart,
            cartItems: prevCart.cartItems.map(
              (cartItem: { product: { productNumber: any }; heart: any }) => {
                if (cartItem.product.productNumber === productNumber) {
                  // Update the heart of the specific cart item
                  return {
                    ...cartItem,
                    heart: null,
                  };
                }
                return cartItem;
              }
            ),
          }));
        } else {
          // Handle error response
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        // Handle network error
        console.error("Error:", error);
      }
    }
  };

  return (
    <ScreenContainer>
      <PageHeader pageTitle="장바구니" />
      {cart &&
        cart.cartItems.map((cartItem: any) => (
          <CartProduct
            key={cartItem.product.productNumber}
            name={cartItem.product.productTitle}
            price={cartItem.product.productPrice - cartItem.product.productDiscountPrice}
            stocks={cartItem.product.productStock}
            count={cartItem.quantity}
            imageUrl={cartItem.product.productImageUrl}
            onDelete={() => handleDeleteProduct(cartItem.product.productNumber)}
            increaseCount={() =>
              handleIncreaseCount(cartItem.product.productNumber, 1)
            }
            decreaseCount={() =>
              handleDecreaseCount(cartItem.product.productNumber, 1)
            }
            onHeartClick={() =>
              handleHeartClick(cartItem.product.productNumber, cartItem.heart)
            }
            liked={cartItem.heart != null}
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
