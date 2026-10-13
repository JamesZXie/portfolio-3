// A figure with a specimen-style caption strip. Renders a labelled placeholder
// until real media (image or looping video) is supplied.
export default function MediaFrame({ media, index, aspect = 'aspect-[16/10]', className = '' }) {
  return (
    <figure className={`border border-rule bg-paper-raised ${className}`}>
      <div className={`relative overflow-hidden ${aspect}`}>
        {media?.video ? (
          <video src={media.video} autoPlay muted loop playsInline className='h-full w-full object-cover' />
        ) : media?.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={media.image} alt={media.alt ?? ''} className='h-full w-full object-cover' />
        ) : (
          <div className='graph-paper flex h-full w-full items-center justify-center opacity-70'>
            <span className='label text-ink-muted'>Media pending</span>
          </div>
        )}
      </div>
      {(media?.caption || index) && (
        <figcaption className='label flex justify-between gap-4 border-t border-rule px-3 py-2 text-ink-muted'>
          <span>{media?.caption ?? ''}</span>
          {index && <span>Fig. {index}</span>}
        </figcaption>
      )}
    </figure>
  );
}
