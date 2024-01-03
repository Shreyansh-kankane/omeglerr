import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className='bg-[#3c99fc] text-white rounded-md p-3 font-bold'>
      {children}
    </button>
  );
};

export default Button;