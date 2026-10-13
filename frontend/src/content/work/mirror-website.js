const study = {
  slug: 'mirror-website',
  title: 'Mirror Physics',
  summary:
    'The public website for Mirror Physics and Axon, its drug discovery agent. Instead of describing the product, the site replays real Axon sessions inside a working copy of the app, with live 3D molecules, so scientists can judge the agent by its actual work.',
  role: 'Design and engineering',
  year: '2026',
  team: 'Lead designer and front-end engineer, with a teammate on early product pages',
  timeline: 'December 2025 to October 2026, ongoing',
  outcome: [
    '22 real agent sessions replayed in the browser',
    'One color palette shared with the app and design system',
    'Light and dark themes on every page',
  ],
  cover: {
    video: '/work/mirror-website/cover.mp4',
    alt: 'The homepage demo: a copy of the Axon app switching between sessions on protein binding sites, a membrane simulation, reduction potentials and patent compounds.',
    caption: 'The homepage demo, clicking through real sessions',
  },
  sections: [
    {
      id: 'context',
      heading: 'Context',
      blocks: [
        {
          type: 'text',
          body: [
            'Axon is an AI agent for drug discovery. It runs cheminformatics, physics-based simulation and machine learning tools on behalf of medicinal chemists and computational scientists. The website had one job: get those scientists to try it.',
            'That audience has heard every AI claim already. Most sites in the space look the same: a gradient, a headline about accelerating discovery, a stock render of a molecule. A scientist reading one learns nothing about whether the tool can dock a ligand or read a patent. So the site had to stop describing Axon and start showing it work.',
            'The first version, shipped in January, was a conventional marketing site: hero, evidence table, a D3 chart, FAQ. It got us live. Everything after that was about replacing claims with evidence.',
          ],
        },
      ],
    },
    {
      id: 'product-as-hero',
      heading: 'The product is the hero',
      blocks: [
        {
          type: 'text',
          body: [
            'In March I replaced the homepage video with the interface itself. The hero is a faithful copy of Axon’s layout, with sessions on the left, the conversation in the middle, the artifact viewer and the working files on the right, filled with real data. Visitors click between sessions the same way they would in the app.',
            'Molecules render in Mol*, the same viewer scientists already use, loading the actual structure files the agent produced. You can rotate the TSHR receptor and see the pockets the agent found, or watch a GLP-1 receptor sit in a lipid membrane it built. On mobile I dropped the video fallback too and shipped a real viewer, because a recording of a molecule is exactly the stock image we were trying to avoid.',
          ],
        },
        {
          type: 'media',
          image: '/work/mirror-website/session-admet.webp',
          alt: 'A homepage section titled Benchmark ADMET profiles, with the Axon interface showing the agent planning a kinase inhibitor comparison next to the red and green liability heatmap it produced.',
          caption: 'Each capability is shown as a real session, not a feature list',
          aspect: 'aspect-[200/151]',
        },
        {
          type: 'media',
          image: '/work/mirror-website/value-props.webp',
          alt: 'Three line illustrations under the heading The leading agent for drug discovery: shapes passing through rings, a box of tool logos, and stacked panels growing in size.',
          caption: 'Claims stay short, and sit above the evidence',
          aspect: 'aspect-[200/119]',
        },
      ],
    },
    {
      id: 'real-sessions',
      heading: 'Real transcripts, edited presentation',
      blocks: [
        {
          type: 'text',
          body: [
            'Every demo is a real agent run: the transcript plus everything it produced, from PDB and SDF structures to CSV tables, heatmaps and HTML reports. A build script turns each transcript into plain session data. It maps every raw tool call to the same label the app shows, such as “Fetched web page” or “Completed command”, so the website and the product read identically, and it picks the artifact to open first by file type.',
            'Some transcripts needed tidying to read well on a marketing page. Those edits live in a separate, reviewed copy file, and the raw transcripts are never touched. What a visitor reads is what the agent did, presented cleanly rather than rewritten.',
            'Adding a demo is now a content task: record a session in Axon, drop the folder in, run the script. The same sessions feed a use case library filtered by role, and a grid of 40 short headlines drawn from them. The count is a multiple of the eight grid columns, so the scrolling grid loops without a seam.',
          ],
        },
        {
          type: 'gallery',
          items: [
            {
              image: '/work/mirror-website/session-patent.webp',
              alt: 'An Axon session extracting structures from a patent, with an HTML report showing the patent title and summary statistics such as 25 compounds and a best binding IC50 of 16.5 nM.',
              caption: 'Patent extraction, with the agent’s own report',
              aspect: 'aspect-[50/39]',
            },
            {
              image: '/work/mirror-website/session-binder.webp',
              alt: 'An Axon session refining a cyclic peptide binder, with a purple and blue 3D integrin complex in the viewer.',
              caption: 'Binder refinement, with the predicted complex',
              aspect: 'aspect-[50/39]',
            },
          ],
        },
        {
          type: 'stats',
          items: [
            { value: '22', label: 'Real Axon sessions on the site' },
            { value: '5', label: 'Drug modalities covered' },
            { value: '340+', label: 'Commits, from first sketch to now' },
          ],
        },
        {
          type: 'media',
          image: '/work/mirror-website/use-cases.webp',
          alt: 'The Axon at work page: cards for small molecule workflows such as generating 3D conformers and docking, each with a preview of its result.',
          caption: 'The use case library, built from the same sessions',
        },
      ],
    },
    {
      id: 'one-system',
      heading: 'One system with the app',
      blocks: [
        {
          type: 'text',
          body: [
            'A demo that looks slightly off from the real product undermines the whole idea, so the site does not keep its own copy of the visual language. The color palette is owned by the app. A sync script copies it into Fractal, our design system, the shared component package and the website, and a check mode fails if any of them drift. Website-only decisions, like keeping primary buttons neutral instead of blue, live in a separate override file so a sync can never wipe them.',
            'The site uses the same icon package as the app, and both light and dark themes run through every page, including the illustrations, which swap their art with the theme.',
          ],
        },
        {
          type: 'gallery',
          items: [
            {
              image: '/work/mirror-website/session-docking.webp',
              alt: 'A homepage section titled Dock and analyze binding poses, with a docking conversation next to an orange 3D protein with imatinib in its pocket, in the light theme.',
              caption: 'Light',
              aspect: 'aspect-[50/39]',
            },
            {
              image: '/work/mirror-website/session-docking-dark.webp',
              alt: 'The same docking section in the dark theme, with the protein still orange against a near-black interface.',
              caption: 'Dark',
              aspect: 'aspect-[50/39]',
            },
          ],
        },
      ],
    },
    {
      id: 'details',
      heading: 'Details',
      blocks: [
        {
          type: 'text',
          body: [
            'The company page is a long letter with footnotes rather than a grid of values. Beside it, the Mirror logo turns as you scroll: a 60-frame turntable render drawn to a canvas and scrubbed by scroll position, which stays sharp and is far lighter than a live 3D scene.',
          ],
        },
        {
          type: 'media',
          video: '/work/mirror-website/company-logo.mp4',
          alt: 'Scrolling the company page: paragraphs about the opportunity in medicine pass by while a chrome Mirror logo rotates beside them.',
          caption: 'The logo turns with the reader',
        },
        {
          type: 'quote',
          body: 'Building the layer between intelligence and medicine.',
          cite: 'Company page headline',
        },
        {
          type: 'text',
          body: [
            'The blog’s thumbnail art and side ornaments are crystal lattices made by a generator from the design system. It is deterministic from a seed, so any illustration can be regenerated exactly or varied on purpose, instead of being redrawn by hand.',
          ],
        },
        {
          type: 'media',
          image: '/work/mirror-website/blog.webp',
          alt: 'The blog page with a featured post on SOC 2 and a thumbnail of translucent hexagonal crystal shapes.',
          caption: 'Generated lattice art on the blog',
        },
      ],
    },
    {
      id: 'outcome',
      heading: 'Outcome',
      blocks: [
        {
          type: 'text',
          body: [
            'The site went from describing an agent to letting people watch one. Every claim on the homepage sits directly above a session that backs it up, and the transcripts are real enough that scientists can check the tools, the parameters and the results for themselves.',
            'It is still changing. New capabilities reach the site by recording a session rather than writing a page, and because it shares its palette and icons with the app, the website keeps up with the product instead of drifting behind it.',
          ],
        },
        {
          type: 'media',
          image: '/work/mirror-website/home-dark.webp',
          alt: 'The homepage in the dark theme: the headline Drug design intelligence above the Axon interface showing the TSHR receptor.',
          caption: 'The homepage in the dark theme',
        },
      ],
    },
  ],
};

export default study;
