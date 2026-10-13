import MediaFrame from './MediaFrame';

// Renders a case study section's content blocks. See src/content/work/_template.js.
export default function Blocks({ blocks }) {
  return blocks.map((b, i) => {
    switch (b.type) {
      case 'text':
        return (
          <div key={i} className='flex max-w-prose flex-col gap-4 text-lg leading-relaxed'>
            {b.body.map((p, k) => <p key={k}>{p}</p>)}
          </div>
        );
      case 'media':
        return <MediaFrame key={i} media={b} aspect={b.aspect} />;
      case 'gallery':
        return (
          <div key={i} className='grid gap-4 sm:grid-cols-2'>
            {b.items.map((m, k) => <MediaFrame key={k} media={m} aspect={m.aspect ?? 'aspect-square'} />)}
          </div>
        );
      case 'stats':
        return (
          <dl key={i} className='grid grid-cols-2 gap-px border border-rule bg-rule md:grid-cols-3'>
            {b.items.map((s) => (
              <div key={s.label} className='flex flex-col gap-2 bg-paper p-5'>
                <dt className='order-2 label text-ink-muted'>{s.label}</dt>
                <dd className='font-display text-5xl text-signal'>{s.value}</dd>
              </div>
            ))}
          </dl>
        );
      case 'quote':
        return (
          <blockquote key={i} className='border-l-2 border-signal pl-6'>
            <p className='font-display text-3xl leading-snug md:text-4xl'>{b.body}</p>
            {b.cite && <footer className='label mt-4 text-ink-muted'>{b.cite}</footer>}
          </blockquote>
        );
      default:
        return null;
    }
  });
}
