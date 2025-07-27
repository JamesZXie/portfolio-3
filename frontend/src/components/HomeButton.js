'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function HomeButton() {
  const router = useRouter();
  const pathname = usePathname();

  function handleClick(e) {
    if (pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('home');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push('/');
    }
  }

  return (
    <Link
      href='/#home'
      className='fixed top-0 left-0 py-1 px-8 z-50'
      onClick={handleClick}
    >
      <img
        src='/exi_logo.png'
        alt='Home'
        className='w-16 h-16 object-contain'
      />
    </Link>
  );
}
