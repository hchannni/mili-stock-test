import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component

function CartPage() {
  const [cart, setCart] = useState<any>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);

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

      console.log(cart);

    }
    else {
      console.error("Token is null. Please log in to access the cart.");
    }
  }, []);

  useEffect(() => {
    if (cart) {
      // Calculate total price when the cart changes
      let totalPrice = 0;

      for (const product of cart.products) {
        totalPrice += product.productPrice;
      }
      setTotalPrice(totalPrice);

    }
  }, [cart]);

  if (!cart) {
    return <div>Loading...</div>;
  }

  // const totalPrice = 10;  

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.products.map((product: any) => (
        <ProductCard
          key={product.productNumber}
          title={product.productTitle}
          price={product.productPrice}
          stock={product.productStock}
          imageUrl={product.product_image_url}
        />
      ))}
      <p>Total Price: {totalPrice}원</p>
    </div>
  );
}

export default CartPage;
