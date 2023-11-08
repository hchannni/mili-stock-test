import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component

function CartPage() {
  const [cart, setCart] = useState<any>(null);

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

  if (!cart) {
    return <div>Loading...</div>;
  }

  const totalPrice = cart.products.reduce(
    (total: number, product: any) => total + product.productPrice,
    0
  );

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
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
}

// const CartPage: React.FC<CartPageProps> = ({ cartItems }) => {
//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <div className="cart-items">
//         {cartItems.map((product) => (
//           <ProductCard
//             key={product.id}
//             title={product.title}
//             price={product.price}
//             stock={product.stock}
//             imageUrl={product.imageUrl}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

export default CartPage;
