import Container from './Container';
import { site } from '@/content/site';

export default function SiteFooter() {
  return (
    <footer className='mt-32 border-t border-rule'>
      <Container className='grid gap-8 py-12 md:grid-cols-12'>
        <p className='font-display text-4xl leading-tight md:col-span-7 md:text-5xl'>
          Have something hard to make clear?{' '}
          <a href={`mailto:${site.email}`} className='text-signal underline-offset-4 hover:underline'>
            Write to me.
          </a>
        </p>
        <ul className='label flex flex-col gap-2 text-ink-muted md:col-span-3 md:col-start-10'>
          {site.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className='hover:text-ink'>{l.label} ↗</a>
            </li>
          ))}
        </ul>
      </Container>
      <Container className='label flex justify-between border-t border-rule py-4 text-ink-muted'>
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>Set in Lastik &amp; Manrope</span>
      </Container>
    </footer>
  );
}
