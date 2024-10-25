// Cart.tsx
import React from 'react';
import useCartStore from './utils/useCartStore'; // Adjust the import path as needed

const Cart: React.FC = () => {
  const items = useCartStore((state) => state.items);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id} className="flex justify-between mb-2">
              <span>{item.model}</span>
              <span>${item.price.toFixed(2)} x {item.quantity}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
