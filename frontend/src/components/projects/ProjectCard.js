'use client';

export default function ProjectCard({
  tags = [],
  title,
  role,
  impact = [],
  children,
  video,
  image,
}) {
  return (
    <section className='w-full py-16'>
      <div className='mx-auto max-w-[1830px] px-4 sm:px-6 lg:px-8'>
        <div className='w-full h-auto flex flex-col lg:flex-row gap-8 lg:gap-16'>
          {/* LEFT SECTION – text */}
          <div className='flex-1 flex flex-col max-w-[650px] md:min-w-[440px] overflow-visible'>
            {/* Tags */}
            <div className='flex flex-wrap gap-2 mb-2 text-[var(--secondary)]'>
              {tags.map((tag, i) => (
                <span key={i} className='font-mono text-[14px] break-words'>
                  [{tag}]
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className='font-sans font-medium text-[clamp(1.5rem,4vw,2rem)] leading-tight mb-4 mt-0 break-words'>
              {title}
            </h2>

            {/* Role */}
            <div className='mt-6 font-sans text-[14px]'>
              <div className='font-medium text-[var(--secondary)]'>Role:</div>
              <div className='font-regular text-[18px] break-words'>{role}</div>
            </div>

            {/* Description */}
            <div className='mt-6 font-sans text-[14px]'>
              <div className='font-medium text-[var(--secondary)]'>
                Description:
              </div>
              <div className='font-regular text-[18px] break-words hyphens-auto'>
                {children}
              </div>
            </div>

            {/* Impact */}
            <div className='mt-4 font-sans text-[14px]'>
              <span className='font-medium text-[var(--secondary)]'>
                Impact:
              </span>
              <ul className='space-y-0'>
                {impact.map((item, i) => (
                  <li
                    key={i}
                    className='flex items-start gap-2 text-[18px] break-words'
                  >
                    -<span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SECTION – media */}
          {video ? (
            <div className='flex-1 inline-flex items-start justify-center min-h-[300px]'>
              <div className='relative w-full max-w-[1024px] aspect-[963/764] bg-stone-800 text-white border border-[var(--secondary)] rounded-[35px] p-4 sm:p-6 lg:p-8'>
                <video
                  className='w-full h-full object-contain'
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={`/${video}.mp4`} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ) : (
            <div className='flex-1' />
          )}
        </div>
      </div>
    </section>
  );
}
