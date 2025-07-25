'use client';

import Link from 'next/link';

export default function HomeButton() {
  return (
    <Link href='/' className='fixed top-0 left-0 py-1 px-8 z-50'>
      <img
        src='/exi_logo.png'
        alt='Home'
        className='w-16 h-16 object-contain'
      />
    </Link>
  );
}
