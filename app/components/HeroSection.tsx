// HeroSection.tsx
import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618407781065-d2c88be9dbd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3Mjh8MHwxfGFsbHwxfHx8fHx8fHwxNjE3MTczNjA1&ixlib=rb-1.2.1&q=80&w=1080')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Second Round</h1>
        <p className="text-lg md:text-xl mb-8">Experience cutting-edge technology and design with the new iPhone models.</p>
        <Link href="#iphones" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:bg-blue-500">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
