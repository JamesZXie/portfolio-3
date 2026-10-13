import Container from '@/components/Container';
import WorkIndex from '@/components/WorkIndex';
import { site } from '@/content/site';
import { studies } from '@/content/work';

export default function Home() {
  return (
    <>
      <section className='relative border-b border-rule'>
        <div className='graph-paper pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]' />
        <Container className='relative grid gap-10 pb-16 pt-24 md:grid-cols-12 md:pb-24 md:pt-40'>
          <h1 className='font-display text-5xl leading-[0.95] tracking-tight md:col-span-10 md:text-8xl'>
            {site.intro.split('. ')[0]}.{' '}
            <em className='not-italic text-ink-muted'>{site.intro.split('. ').slice(1).join('. ')}</em>
          </h1>
          <dl className='label grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-ink-muted md:col-span-4'>
            <dt>Now</dt><dd className='text-ink'>{site.now}</dd>
            <dt>Index</dt><dd className='text-ink'>{studies.length} selected works</dd>
          </dl>
        </Container>
      </section>

      <section id='work' className='scroll-mt-14'>
        <Container>
          <div className='label flex justify-between py-6 text-ink-muted'>
            <h2>Selected work</h2>
            <span>{new Date().getFullYear()}</span>
          </div>
          <WorkIndex studies={studies} />
        </Container>
      </section>
    </>
  );
}
