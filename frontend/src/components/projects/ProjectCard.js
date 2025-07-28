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
    <div className='w-screen p-1 lg:p-8 box-border h-auto lg:h-screen min-h-screen'>
      <div className='h-full w-full p-8 flex flex-col lg:flex-row gap-10 lg:gap-32'>
        {/* LEFT SECTION – text */}
        <div className='flex-1 flex flex-col max-w-[550px] md:min-w-[440px]'>
          {/* Tags */}
          <div className='flex flex-wrap gap-2 mb-2 text-[var(--secondary)]'>
            {tags.map((tag, i) => (
              <span key={i} className='font-mono text-[14px]'>
                [{tag}]
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className='font-sans font-medium text-[32px] mb-4 mt-0'>
            {title}
          </h2>

          {/* Role */}
          <div className='mt-6 font-sans text-[14px]'>
            <div className='font-medium text-[var(--secondary)]'>Role:</div>
            <div className='font-regular text-[18px]'>{role}</div>
          </div>

          {/* Description */}
          <div className='mt-6 font-sans text-[14px]'>
            <div className='font-medium text-[var(--secondary)]'>
              Description:
            </div>
            <div className='font-regular text-[18px]'>{children}</div>
          </div>

          {/* Impact */}
          <div className='mt-4 font-sans text-[14px]'>
            <span className='font-medium text-[var(--secondary)]'>Impact:</span>
            <ul className='space-y-0'>
              {impact.map((item, i) => (
                <li key={i} className='flex items-start gap-2 text-[18px]'>
                  -<span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION – placeholder carousel */}
        {video ? (
          <div className='inline-flex items-start justify-center overflow-hidden min-h-[300px] max-w-[1024px]'>
            <div className='relative aspect-[963/764] bg-stone-800 text-white border border-[var(--secondary)] rounded-[35px] p-8  '>
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
          <div>hi</div>
        )}
      </div>
    </div>
  );
}
