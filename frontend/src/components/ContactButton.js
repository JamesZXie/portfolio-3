'use client';

import Button from './Button';
import { ArrowSquareOut } from '@phosphor-icons/react/dist/icons/ArrowSquareOut';

export default function ContactButton(props) {
  return (
    <a
      href='https://www.linkedin.com/in/jameszexie/'
      target='_blank'
      rel='noopener noreferrer'
    >
      <Button icon={<ArrowSquareOut />} {...props}>
        LINKEDIN
      </Button>
    </a>
  );
}
