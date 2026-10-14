const study = {
  slug: 'fractal',
  title: 'Fractal',
  summary:
    'A design system written for an AI agent to read. Fractal turns design decisions into routed evidence that Axon loads before it builds an interface, a chart or a report, then ships the result as React components, an icon set and a test bench that scores what the agent makes.',
  role: 'Design and engineering',
  year: '2026',
  category: 'Design system',
  period: 'Mar 2026–Present',
  team: 'Solo lead at Mirror Physics, with a teammate on data visualization',
  timeline: '2026, ongoing',
  outcome: [
    '217 custom icons replaced a generic library',
    '39 shipped React components',
    'Generated page scores up from 3.85 to 4.66 of 5',
  ],
  cover: {
    image: '/work/fractal/cover.webp',
    alt: 'A grid of thin, single-color line icons: molecules, files, charts, arrows and lab equipment, with one molecule highlighted in blue.',
    caption: 'The Fractal icon set',
  },
  sections: [
    {
      id: 'context',
      heading: 'Context',
      blocks: [
        {
          type: 'text',
          body: [
            'Axon, our AI computational chemist, does not only answer questions. It builds things: summary pages, scientific reports, charts, slide decks and whole product screens. Every one of those outputs was a design decision made by a model that had never been told what our design looked like.',
            'A traditional design system is written for people. It assumes someone will browse the docs, absorb the taste and make judgment calls. An agent does the opposite: it reads exactly what it is given, takes every sentence literally and fills any gap with the most generic thing it has seen. So the question became how to write a design system an agent can actually follow.',
          ],
        },
      ],
    },
    {
      id: 'language',
      heading: 'Design as language',
      blocks: [
        {
          type: 'text',
          body: [
            'Fractal is written mostly in prose. Each rule is labelled as a required invariant, an allowed choice, a selection criterion or a forbidden outcome, so the agent knows which decisions are fixed and where it is free to vary. Recreating a button should give the same button; recreating a report should not give the same page.',
            'Dumping the whole system into every prompt made outputs worse, so the system routes instead. A request is first classified into one or more of 16 capabilities, such as a product screen, a chart, a new icon or a deck. Each capability names the evidence it always needs and the evidence that only applies in certain situations. Asking for a line chart of a ship losing weight as it burns fuel loads the visualization guide, the approved colormaps and the line-chart rules, and nothing about buttons.',
          ],
        },
        {
          type: 'quote',
          body: 'A page that reads as colorful is wrong. A page that reads as quiet greyscale punctuated by a few small chromatic moments is right.',
          cite: 'Fractal design philosophy',
        },
        {
          type: 'text',
          body: [
            'The tone of the rules matters as much as the values. The philosophy explains why a border is 1px and why shadows mean elevation, not decoration, because an agent that understands the reason can extend the rule to a case nobody wrote down. Blue marks the one thing on a page you should look at first, orange the second, and that ration is written down explicitly because a model left to itself paints everything blue.',
          ],
        },
        {
          type: 'media',
          image: '/work/fractal/color-scales.webp',
          alt: 'Blue, pink and orange color scales from 0 to 900, each shown above its previous, duller version.',
          caption: 'Scales regenerated in OKLCH (top rows) against the previous ones',
          aspect: 'aspect-[20/11]',
        },
      ],
    },
    {
      id: 'icons',
      heading: 'An icon set built with an agent',
      blocks: [
        {
          type: 'text',
          body: [
            'The product leaned on a generic open-source icon library: 153 different icons imported 458 times across about 136 files. They were built for enterprise software, not chemistry, and had nothing for a ligand in a binding pocket or a solvent shell.',
            'I wrote an icon drawing guide precise enough for an agent to draw from: a 32-unit grid, a 2-unit stroke, round caps and joins, one color, and optical sizes per shape class so circles and squares carry the same visual weight. Then I inventoried every existing icon by what it was for rather than what it looked like, and generated replacements from those purposes.',
            'It took more than twenty review rounds. Each round I scored the icons by hand, had a judge agent score them against the same rubric, and tightened the rubric until the two agreed. Only then did the guide change. Problems I caught by eye became general rules: a node sitting on a line must break the line, and a molecule has to read as a molecule and not as a nut or a hexagon. By the final round the batch averaged 4.72 out of 5.',
          ],
        },
        {
          type: 'media',
          image: '/work/fractal/icon-construction.webp',
          alt: 'Five icons, a molecule, a molecule in a pocket, a protein helix, a flask and a microscope, drawn large on a 32-unit grid with smaller versions below.',
          caption: 'Drawn on the 32 grid, checked from 16px up',
          aspect: 'aspect-[5/2]',
        },
        {
          type: 'stats',
          items: [
            { value: '217', label: 'Icons in the set' },
            { value: '153', label: 'Library icons replaced' },
            { value: '20+', label: 'Review rounds' },
          ],
        },
      ],
    },
    {
      id: 'runtime',
      heading: 'From rules to runtime',
      blocks: [
        {
          type: 'text',
          body: [
            'Rules alone still leave an agent rebuilding components from descriptions, and the results drift. So Fractal UI ships the components themselves: 39 React primitives, from buttons and tables to side panels and a lattice loading animation. It is plain CSS and custom properties with no Tailwind dependency, so any of our apps can adopt it.',
            'This split keeps both halves honest. The design guidance says when to use a table and how it should rank its columns. The package owns the exact props, sizes and pixel values, and the guidance never copies them, so the two cannot fall out of sync. The guidance tells the agent to inspect the installed package instead of guessing.',
          ],
        },
        {
          type: 'media',
          image: '/work/fractal/product-screen.webp',
          alt: 'A laboratory inventory screen with a table of reagents, colored stock-status tags, a stock history line chart and a consumption bar chart.',
          caption: 'A full screen generated by the agent from one prompt, using Fractal components and dummy data',
          aspect: 'aspect-[36/25]',
        },
      ],
    },
    {
      id: 'testing',
      heading: 'Testing taste',
      blocks: [
        {
          type: 'text',
          body: [
            'If the reader of your design system is a model, you can test the system the way you test code. Fractal Testing is a separate bench of 12 eval pipelines and 142 test cases covering summary pages, scientific reports, plot reconstruction, product screens, icons and routing. Each pipeline has a dataset, a rubric, a judge prompt, versioned outputs and scores, and it lives outside Fractal so test answers never leak into what the agent reads.',
            'The first summary-page run averaged 3.85 out of 5. Polish scored perfectly, but every page used the same skeleton, whatever the content, and a chocolate-cake recipe came out looking like a clinical brief. That finding became a rule: the page structure should follow the shape of the content. Four rounds later the same set averaged 4.66.',
          ],
        },
        {
          type: 'media',
          image: '/work/fractal/summary-report.webp',
          alt: 'A generated report comparing eligibility criteria across eight lung-cancer trials in a wide table, with one outlier trial highlighted.',
          caption: 'A generated cross-trial comparison: structure follows content, and one highlight marks the outlier',
          aspect: 'aspect-[36/25]',
        },
        {
          type: 'stats',
          items: [
            { value: '3.85', label: 'Summary pages, first run' },
            { value: '4.66', label: 'Summary pages, fifth run' },
            { value: '142', label: 'Eval cases' },
          ],
        },
      ],
    },
    {
      id: 'lab',
      heading: 'Fractal Lab',
      blocks: [
        {
          type: 'text',
          body: [
            'Rules can describe what is consistent. They are worse at describing what is beautiful. Fractal Lab is a local workspace for that other half: moodboards you paste or drag images into, with tags written for agents to read, such as palette, structure and the kind of scientific signal an image carries.',
            'It is where visual direction gets extracted before it becomes a rule, and it is built on Fractal UI itself, which made it an early test of the components outside the product.',
          ],
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
            'Fractal is now how Axon designs. The agent routes each request to the evidence it needs, builds with the shipped components and icons, and the results are measured rather than eyeballed. Rules change only when the evals show a reason to.',
            'The biggest lesson was that writing for an agent made the design system better for people too. Every vague rule the agent misread was one a new teammate would have misread. Spelling out why, what can vary and what must never happen turned taste into something you can hand over.',
          ],
        },
      ],
    },
  ],
};

export default study;
