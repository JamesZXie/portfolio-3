'use client';

export default function Button({ children, type = 'button' }) {
  return (
    <button
      type={type}
      className='font-mono text-[16px] px-4 py-1 border border-[var(--secondary)] rounded-full cursor-pointer bg-[var(--secondary)] text-[var(--primary)] hover:bg-[var(--background-hover)] transition-colors duration-150'
    >
      {children}
    </button>
  );
}
