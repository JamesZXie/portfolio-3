'use client';

import React, { useEffect, useState } from 'react';

const TYPED_TEXT = "HI. I'M JAMES X, A PRODUCT DESIGNER WHO ALSO CODES.";

export default function HomeTypeBanner() {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let timeout;
    function type() {
      if (i <= TYPED_TEXT.length) {
        setDisplayed(TYPED_TEXT.slice(0, i));
        i++;
        timeout = setTimeout(type, 80);
      } else {
        setDone(true);
      }
    }
    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <h1
      className='font-sans font-medium text-[clamp(.5rem,9vw,232px)] text-[var(--secondary)] leading-tight whitespace-pre-line select-none'
      style={{ wordBreak: 'break-word' }}
    >
      {displayed}
      <span className='inline-block w-6 animate-blink align-baseline'>
        {done ? '' : '|'}
      </span>
    </h1>
  );
}
