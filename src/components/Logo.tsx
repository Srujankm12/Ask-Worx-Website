import React from 'react';
import Image from 'next/image';

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <Image 
        src="/logo.png" 
        alt="ASKworX Logo" 
        width={500} 
        height={500} 
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
};

export default Logo;
