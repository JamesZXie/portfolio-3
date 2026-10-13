import Link from 'next/link';
import Container from '@/components/Container';

export default function NotFound() {
  return (
    <Container className='pt-24'>
      <h1 className='font-display text-6xl'>Nothing here.</h1>
      <Link href='/' className='label mt-6 inline-block text-signal'>Back to work →</Link>
    </Container>
  );
}
