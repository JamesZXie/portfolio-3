// Reference for the case study content format. Not imported anywhere.
// Copy this shape into src/content/work/<slug>.js.
//
// Media paths are site-relative: put files in public/work/<slug>/ and refer to
// them as '/work/<slug>/file.webp'. Prefer .webp/.avif for stills and short
// muted .mp4 loops for motion; keep each file under ~5MB.

const template = {
  slug: 'example', // URL: /work/example. Must match the file and media folder name.
  title: 'Example', // Large display title.
  summary: 'One or two sentences: what it is and why it mattered.',
  role: 'Design lead', // Short; shown on the home index.
  year: '2026',
  category: 'Product', // Home grid caption: '<category>, <period>'.
  period: 'Jan 2026–Present',
  team: 'Who you worked with, briefly',
  timeline: 'e.g. 6 months',
  outcome: ['One-line result', 'Another result'], // Shown in the meta block.
  cover: { image: '/work/example/cover.webp', alt: 'Describe the image', caption: 'Short caption' },
  // Optional: a different image for the case-study banner (defaults to cover). Shown at 16:10.
  hero: { image: '/work/example/hero.webp', alt: 'Describe the image', caption: 'Short caption' },

  // Sections become the page body and the sticky table of contents.
  // Each section is a heading plus an ordered list of blocks.
  sections: [
    {
      id: 'context', // Anchor id: lowercase, no spaces.
      heading: 'Context',
      blocks: [
        { type: 'text', body: ['Paragraph one.', 'Paragraph two.'] },
        { type: 'media', image: '/work/example/fig.webp', alt: '…', caption: '…' },
        { type: 'media', video: '/work/example/loop.mp4', caption: '…', aspect: 'aspect-[4/3]' },
        { type: 'gallery', items: [{ image: '…', alt: '…', caption: '…' }, { image: '…', alt: '…' }] },
        { type: 'stats', items: [{ value: '80%', label: 'Less time to deploy' }] },
        { type: 'quote', body: 'A short pull quote.', cite: 'Who said it' },
      ],
    },
  ],
};

export default template;
