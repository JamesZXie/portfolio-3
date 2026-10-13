import Link from 'next/link';
import Container from './Container';
import { site } from '@/content/site';

export default function SiteHeader() {
  return (
    <header className='sticky top-0 z-20 border-b border-rule bg-paper/90 backdrop-blur'>
      <Container className='flex h-14 items-center justify-between'>
        <Link href='/' className='text-sm font-medium tracking-tight'>
          {site.name}
        </Link>
        <nav className='label flex gap-6 text-ink-muted'>
          <Link href='/#work' className='hover:text-ink'>Work</Link>
          <Link href='/about' className='hover:text-ink'>About</Link>
          <a href={`mailto:${site.email}`} className='hover:text-signal'>Contact</a>
        </nav>
      </Container>
    </header>
  );
}
