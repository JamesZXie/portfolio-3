import Link from 'next/link';
import MediaFrame from './MediaFrame';

export default function WorkIndex({ studies }) {
  return (
    <ol className='flex flex-col'>
      {studies.map((s, i) => (
        <li key={s.slug} className='border-t border-rule'>
          <Link href={`/work/${s.slug}`} className='group grid gap-6 py-10 md:grid-cols-12 md:gap-8 md:py-14'>
            <div className='flex flex-col gap-4 md:col-span-4'>
              <span className='label text-signal'>{String(i + 1).padStart(2, '0')}</span>
              <h3 className='font-display text-4xl leading-none md:text-5xl'>
                {s.title}
                <span className='ml-2 inline-block text-ink-muted transition-transform group-hover:translate-x-1 group-hover:text-signal'>→</span>
              </h3>
              <p className='max-w-sm text-ink-muted'>{s.summary}</p>
              <dl className='label mt-auto grid grid-cols-2 gap-y-1 text-ink-muted'>
                <dt>Role</dt><dd className='text-ink'>{s.role}</dd>
                <dt>Year</dt><dd className='text-ink'>{s.year}</dd>
              </dl>
            </div>
            <MediaFrame media={s.cover} className='md:col-span-8 transition-colors group-hover:border-ink' />
          </Link>
        </li>
      ))}
    </ol>
  );
}
