// IPhoneCard.tsx
import React from 'react';
import useCartStore from '../utils/useCartStore'; // Adjust the import path as needed
interface IPhoneCardProps {
  iphone: {
    id: string; // Ensure the ID is included for tracking
    model: string;
    color: string;
    storage: string;
    quantity: number;
    price: number;
    description: string;
  };
}

const IPhoneCard: React.FC<IPhoneCardProps> = ({ iphone }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleShopClick = async () => {
    // Use a non-blocking approach to avoid UI lag
    await new Promise((resolve) => setTimeout(resolve, 0));
    addItem({ id: iphone.id, model: iphone.model, price: iphone.price, quantity: 1 });
    alert(`${iphone.model} added to cart!`);
  };

  return (
    <div className="flex items-center bg-white rounded-lg shadow-lg p-4 transition-transform duration-200 hover:shadow-xl hover:scale-105">
      <div className="flex flex-grow justify-between">
        <div className="flex-grow flex flex-col md:flex-row">
          <div className="flex-1">
            <strong>Model:</strong> {iphone.model}
          </div>
          <div className="flex-1">
            <strong>Color:</strong> {iphone.color}
          </div>
          <div className="flex-1">
            <strong>Storage:</strong> {iphone.storage}
          </div>
          <div className="flex-1">
            <strong>Quantity:</strong> {iphone.quantity}
          </div>
          <div className="flex-1">
            <strong>Price:</strong> ${iphone.price.toFixed(2)}
          </div>
        </div>
        <div className="flex-shrink-0 mt-2 md:mt-0">
          <button
            onClick={handleShopClick}
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white transition-all duration-200 hover:bg-blue-500">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPhoneCard;