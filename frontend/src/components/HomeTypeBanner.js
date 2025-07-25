'use client';

import React, { useEffect, useState } from 'react';

const LEFT_TEXT = "Hi,\nI'm James X.";
const RIGHT_TEXT = 'A designer\nand coder.';

export default function HomeTypeBanner() {
  const [leftDisplayed, setLeftDisplayed] = useState('');
  const [rightDisplayed, setRightDisplayed] = useState('');
  const [leftDone, setLeftDone] = useState(false);
  const [rightDone, setRightDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let timeout;
    function typeLeft() {
      if (i <= LEFT_TEXT.length) {
        setLeftDisplayed(LEFT_TEXT.slice(0, i));
        i++;
        timeout = setTimeout(typeLeft, 60);
      } else {
        setLeftDone(true);
      }
    }
    typeLeft();
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!leftDone) return;
    let j = 0;
    let timeout;
    function typeRight() {
      if (j <= RIGHT_TEXT.length) {
        setRightDisplayed(RIGHT_TEXT.slice(0, j));
        j++;
        timeout = setTimeout(typeRight, 60);
      } else {
        setRightDone(true);
      }
    }
    typeRight();
    return () => clearTimeout(timeout);
  }, [leftDone]);

  return (
    <div className='absolute inset-0 flex items-center justify-between w-full h-full pointer-events-none'>
      <div className='pl-8 md:pl-[32px] flex-1 flex items-center'>
        <h1
          className='font-sans font-medium text-[clamp(1.5rem,4vw,48px)] text-[var(--secondary)] leading-tight select-none text-left whitespace-pre-line'
          style={{ wordBreak: 'break-word' }}
        >
          {leftDisplayed}
          <span className='inline-block w-4 animate-blink align-baseline'>
            {leftDone ? '' : '|'}
          </span>
        </h1>
      </div>
      <div className='pr-8 md:pr-[32px] flex-1 flex items-center justify-end'>
        <h1
          className='font-sans font-medium text-[clamp(1.5rem,4vw,48px)] text-[var(--secondary)] leading-tight select-none text-right whitespace-pre-line'
          style={{ wordBreak: 'break-word' }}
        >
          {rightDisplayed}
          <span className='inline-block w-4 animate-blink align-baseline'>
            {rightDone ? '' : '|'}
          </span>
        </h1>
      </div>
    </div>
  );
}
