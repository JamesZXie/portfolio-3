'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import ContactButton from './ContactButton';

const LINKS = [
  { label: 'HOME', href: '#home', disabled: false },
  { label: 'PROJECTS', href: '#projects', disabled: false },
  { label: 'ABOUT', href: '#about', disabled: true },
  { label: 'ART', href: '/art', disabled: true }, // disabled for now
];

export default function Navigation() {
  const [show, setShow] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY <= 6);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, link) => {
    if (link.disabled) {
      e.preventDefault();
      return;
    }

    const { href } = link;

    if (!href.startsWith('#')) return; // normal links handled by browser

    e.preventDefault();

    const scrollToTarget = () => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (pathname !== '/') {
      router.push('/');
      setTimeout(scrollToTarget, 400);
    } else {
      scrollToTarget();
    }
  };

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
                onClick={(e) => handleClick(e, link)}
                className={`
                  relative font-mono text-[14px] px-2 py-1 transition-colors duration-150 group
                  ${
                    link.disabled
                      ? 'text-stone-500 cursor-not-allowed'
                      : 'text-[var(--primary)] cursor-pointer'
                  }
                `}
              >
                {link.label}
                {!link.disabled && (
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
                )}
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
