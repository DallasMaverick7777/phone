"use client"
// PhoneList.tsx
import React, { useState, useEffect } from 'react';
import IPhoneCard from './iPhoneCard'; // Adjust the import path as needed

interface iPhone {
  id: string; // Add this to capture the id
  model: string;
  color: string;
  storage: string;
  quantity: number;
  price: number;
  description: string;
  icon: string; // Add this to capture the icon path
}

const PhoneList: React.FC = () => {
  const [iphones, setIphones] = useState<iPhone[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data from the server...');
        const response = await fetch('http://localhost:3000/data/'); // Update the path to your JSON data
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Received data:', data);

        const iphoneList: iPhone[] = data.iPhones.iPhone.map((iphone: any) => ({
          model: iphone.model[0],
          color: iphone.color[0],
          storage: iphone.storage[0],
          quantity: parseInt(iphone.quantity[0]),
          price: parseFloat(iphone.price[0]),
          description: iphone.description[0],
          icon: iphone.icon[0], // Extract icon if needed
        }));

        console.log('Constructed iPhone list:', iphoneList);

        setIphones(iphoneList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">iPhone Catalog</h1>
      <div className="flex flex-col space-y-4">
        {iphones.length === 0 ? (
          <div>Loading...</div>
        ) : (
          iphones.map((iphone, index) => <IPhoneCard key={index} iphone={iphone} />)
        )}
      </div>
    </div>
  );
};

export default PhoneList;
