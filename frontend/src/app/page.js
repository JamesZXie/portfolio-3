import Link from 'next/link';
import SocialIcon from '@/components/SocialIcon';
import { site } from '@/content/site';
import { studies } from '@/content/work';

// Cover shapes alternate so the two columns stagger.
const aspects = ['aspect-[4/5]', 'aspect-[4/3]', 'aspect-[4/3]', 'aspect-[4/5]'];

function Cover({ media }) {
  const cls = 'h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]';
  if (media?.video) return <video src={media.video} autoPlay muted loop playsInline className={cls} />;
  // eslint-disable-next-line @next/next/no-img-element
  if (media?.image) return <img src={media.image} alt={media.alt ?? ''} className={cls} />;
  return <div className='graph-paper h-full w-full opacity-60' />;
}

export default function Home() {
  return (
    <div className='mx-auto grid max-w-[1600px] gap-12 px-4 pb-32 pt-8 md:px-8 lg:grid-cols-[minmax(280px,360px)_1fr] lg:gap-16'>
      <aside className='flex flex-col gap-6 lg:sticky lg:top-8 lg:self-start'>
        <h1 className='mark flex items-center gap-2'>
          <span className='inline-block size-2 bg-signal' />
          {site.name}
        </h1>
        <p className='max-w-sm text-[15px] leading-relaxed'>{site.intro}</p>
        <ul className='flex gap-4 text-ink-muted'>
          {site.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} aria-label={s.label} className='hover:text-ink'>
                <SocialIcon name={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <section aria-label='Selected work' className='columns-1 gap-6 md:columns-2'>
        {studies.map((s, i) => (
          <Link key={s.slug} href={`/work/${s.slug}`} className='group mb-10 block break-inside-avoid'>
            <div className={`overflow-hidden rounded-sm bg-paper-raised ${aspects[i % aspects.length]}`}>
              <Cover media={s.cover} />
            </div>
            <p className='mt-3 text-[15px] font-semibold'>{s.title}</p>
            <p className='text-[15px] text-ink-muted'>
              {s.category}, {s.period}
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}
