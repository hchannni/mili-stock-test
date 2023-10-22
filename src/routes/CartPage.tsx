import React from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component

interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  imageUrl: string;
}

interface CartPageProps {
  cartItems: Product[];
}

const CartPage: React.FC<CartPageProps> = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            stock={product.stock}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
