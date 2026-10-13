import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/Container';
import MediaFrame from '@/components/MediaFrame';
import Blocks from '@/components/Blocks';
import { studies, getStudy } from '@/content/work';

export function generateStaticParams() {
  return studies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const study = getStudy((await params).slug);
  return study ? { title: study.title, description: study.summary } : {};
}

export default async function CaseStudy({ params }) {
  const study = getStudy((await params).slug);
  if (!study) notFound();

  const i = studies.indexOf(study);
  const next = studies[(i + 1) % studies.length];
  const meta = [
    ['Role', study.role],
    ['Team', study.team],
    ['Timeline', study.timeline],
    ['Year', study.year],
  ];

  return (
    <article>
      <Container className='grid gap-10 pb-12 pt-16 md:grid-cols-12 md:pt-24'>
        <div className='md:col-span-8'>
          <p className='label mb-6 text-signal'>
            {String(i + 1).padStart(2, '0')} / {String(studies.length).padStart(2, '0')}
          </p>
          <h1 className='font-display text-6xl leading-[0.9] md:text-9xl'>{study.title}</h1>
          <p className='mt-8 max-w-2xl text-xl leading-relaxed text-ink-muted md:text-2xl'>{study.summary}</p>
        </div>
        <dl className='label grid grid-cols-[auto_1fr] content-end gap-x-6 gap-y-2 border-t border-rule pt-4 text-ink-muted md:col-span-4'>
          {meta.map(([k, v]) => (
            <div key={k} className='contents'>
              <dt>{k}</dt>
              <dd className='text-ink'>{v}</dd>
            </div>
          ))}
          <dt>Outcome</dt>
          <dd className='text-ink'>
            <ul>{study.outcome.map((o) => <li key={o}>{o}</li>)}</ul>
          </dd>
        </dl>
      </Container>

      <Container>
        <MediaFrame media={study.cover} aspect='aspect-[16/9]' />
      </Container>

      <Container className='mt-20 grid gap-10 md:grid-cols-12'>
        <nav className='label hidden md:col-span-3 md:block'>
          <ol className='sticky top-24 flex flex-col gap-2 text-ink-muted'>
            {study.sections.map((s, n) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className='hover:text-signal'>
                  {String(n + 1).padStart(2, '0')} {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className='flex flex-col gap-20 md:col-span-8 md:col-start-5'>
          {study.sections.map((s) => (
            <section key={s.id} id={s.id} className='scroll-mt-20'>
              <h2 className='font-display text-4xl md:text-5xl'>{s.heading}</h2>
              <div className='mt-6 flex flex-col gap-10'>
                <Blocks blocks={s.blocks} />
              </div>
            </section>
          ))}
        </div>
      </Container>

      <Container className='mt-32'>
        <Link href={`/work/${next.slug}`} className='group block border-t border-rule pt-6'>
          <span className='label text-ink-muted'>Next</span>
          <span className='mt-2 block font-display text-5xl group-hover:text-signal md:text-7xl'>
            {next.title} →
          </span>
        </Link>
      </Container>
    </article>
  );
}
