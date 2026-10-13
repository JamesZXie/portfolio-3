import Container from '@/components/Container';
import { site } from '@/content/site';

export const metadata = { title: 'About' };

export default function About() {
  return (
    <Container className='grid gap-10 pt-16 md:grid-cols-12 md:pt-24'>
      <h1 className='font-display text-6xl leading-[0.9] md:col-span-12 md:text-8xl'>About</h1>
      <div className='flex max-w-prose flex-col gap-4 text-lg leading-relaxed md:col-span-7'>
        <p>{site.intro}</p>
        <p className='text-ink-muted'>DRAFT. Background, how I work, and what I am looking for.</p>
      </div>
      <dl className='label grid grid-cols-[auto_1fr] content-start gap-x-6 gap-y-2 border-t border-rule pt-4 text-ink-muted md:col-span-4 md:col-start-9'>
        <dt>Now</dt><dd className='text-ink'>{site.now}</dd>
        <dt>Email</dt><dd className='text-ink'><a href={`mailto:${site.email}`}>{site.email}</a></dd>
      </dl>
    </Container>
  );
}
