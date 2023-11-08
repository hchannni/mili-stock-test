import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component

function CartPage() {
  const [cart, setCart] = useState<any>(null);
  const [carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isChecked, setIsChecked] = useState(true);
  const [allBtnCheck, setAllBtnCheck] = useState(true);
  const [isAllChecked, setIsAllChecked] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getCartItem();
    } else {
      alert("로그인을 해주세요!");
      // Assuming you have access to the history object via a hook or context, replace this line accordingly.
      // For example, you can use the useHistory hook from 'react-router-dom'.
      // history.push("/main");
    }
  }, []);

  const getCartItem = () => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${URL}cart`, {
        headers: {
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then(({ carts }) => {
          let totalPrice = 0;
          let emptyArr = [];
          for (let i = 0; carts.length > i; i++) {
            totalPrice += carts[i].price * carts[i].count;
            emptyArr.push(true);
          }

          setCarts(carts);
          setTotalPrice(totalPrice);
          // setIsAllChecked(emptyArr);
        });
    }
    else {
      console.error("Token is null. Please log in to access the cart.");
    }
  };

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
