'use client';

import Button from './Button';
import { ArrowSquareOut } from '@phosphor-icons/react/dist/icons/ArrowSquareOut';

export default function ContactButton(props) {
  const handleClick = () => {
    window.location.href = 'mailto:james.zm.xie@gmail.com';
    console.log('hi?');
  };

  return (
    <Button icon={<ArrowSquareOut />} onClick={handleClick} {...props}>
      CONTACT
    </Button>
  );
}
