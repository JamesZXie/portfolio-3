'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Button({
  children,
  type = 'button',
  icon,
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      className={twMerge(
        'font-mono text-[16px] px-4 py-1 border border-[var(--secondary)] rounded-full cursor-pointer bg-[var(--background)] text-[var(--primary)] hover:bg-[var(--background-hover)] transition-colors duration-150 flex items-center',
        className
      )}
      {...props}
    >
      {children}
      {icon && (
        <span className='ml-2 flex items-center'>
          {React.cloneElement(icon, { size: 16 })}
        </span>
      )}
    </button>
  );
}
