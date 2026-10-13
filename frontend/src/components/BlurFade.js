// Progressive blur along the bottom of the viewport: stacked backdrop blurs,
// each masked to a band, so content melts out as it scrolls off.
const layers = [
  { blur: 0.5, from: 0, to: 25 },
  { blur: 1, from: 12, to: 37 },
  { blur: 2, from: 25, to: 50 },
  { blur: 4, from: 37, to: 62 },
  { blur: 8, from: 50, to: 75 },
  { blur: 16, from: 62, to: 87 },
  { blur: 32, from: 75, to: 100 },
];

export default function BlurFade() {
  return (
    <div aria-hidden className='pointer-events-none fixed inset-x-0 bottom-0 z-30 h-24'>
      {layers.map(({ blur, from, to }) => {
        const mask = `linear-gradient(to bottom, transparent ${from}%, black ${(from + to) / 2}%, black ${to}%, transparent ${Math.min(to + 12, 100)}%)`;
        return (
          <div
            key={blur}
            className='absolute inset-0'
            style={{ backdropFilter: `blur(${blur}px)`, WebkitBackdropFilter: `blur(${blur}px)`, maskImage: mask, WebkitMaskImage: mask }}
          />
        );
      })}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-paper/60' />
    </div>
  );
}
