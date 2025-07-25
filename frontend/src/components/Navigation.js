'use client';

import React, { useEffect, useState } from 'react';
import ContactButton from './ContactButton';

const LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'ABOUT', href: '/about' },
  { label: 'RESUME', href: '/resume' },
  { label: 'ART', href: '/art' },
];

export default function Navigation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY <= 6);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-transform duration-300 ease-in-out
        ${show ? 'translate-y-0' : '-translate-y-full'}
        hidden md:flex
        bg-transparent
        py-6
      `}
    >
      <div className='relative w-full flex items-center justify-center'>
        <ul className='flex gap-10'>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className='relative font-mono text-[14px] text-[var(--primary)] px-2 py-1 transition-colors duration-150 group'
              >
                {link.label}
                <span
                  className='
                    pointer-events-none
                    absolute left-0 bottom-0 h-[2px] w-0
                    bg-[var(--primary)]
                    transition-all duration-300 ease-in-out
                    group-hover:w-full
                  '
                  style={{ borderRadius: 2 }}
                />
              </a>
            </li>
          ))}
        </ul>
        <div className='absolute right-8 top-1/2 -translate-y-1/2'>
          <ContactButton />
        </div>
      </div>
    </nav>
  );
}
