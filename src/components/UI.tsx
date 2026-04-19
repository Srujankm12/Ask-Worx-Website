import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, icon, className, ...props }: ButtonProps) => {
  const variants = {
    primary: 'bg-[#1A3D2B] text-white hover:bg-[#23533a]',
    secondary: 'bg-white text-black hover:bg-gray-200',
    outline: 'bg-transparent border border-white text-white hover:bg-white/10'
  };

  return (
    <button
      className={cn(
        'pill-button flex items-center justify-center gap-2',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};

export const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn("badge", className)}>
      <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
      {children}
    </div>
  );
};
