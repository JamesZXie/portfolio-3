// Axon case study. Media captured from the app's own Storybook (mock data only).
const study = {
  slug: 'axon',
  title: 'Axon',
  summary:
    'A desktop app where scientists hand computational chemistry to an AI agent, and watch, steer and check its work as it runs.',
  role: 'Design lead, design engineer',
  year: '2026',
  category: 'Product',
  period: 'Jan 2026–Present',
  team: 'Mirror Physics. Me on design and front end, alongside a small team of engineers',
  timeline: '2026, ongoing',
  outcome: [
    'Shipped on macOS, Windows and Linux, in English and Chinese',
    'Moved the whole app onto Fractal tokens, with full dark mode',
    '600+ commits to the production codebase',
  ],
  cover: {
    image: '/work/axon/cover.webp',
    alt: 'The Axon app icon on a near-black background, lit from behind by soft blue, violet and orange light.',
    caption: 'The Axon app icon',
  },
  sections: [
    {
      id: 'context',
      heading: 'Context',
      blocks: [
        {
          type: 'text',
          body: [
            'Axon is the product Mirror Physics builds for computational chemists. You describe a problem in plain language, such as setting up a docking sweep or analysing a molecular dynamics trajectory, and an agent plans the work, writes the code, runs it on your machine or in cloud sandboxes, and reports back with files, plots and structures.',
            'When I joined, the agent was capable but the app read like a developer console. Tool calls dumped raw output, every screen had its own colours, and scientists had no easy way to tell what the agent was doing, what it had touched, or whether its conclusions were grounded. My job was to make that work legible: something a chemist could trust enough to leave running, and share with a colleague afterwards.',
          ],
        },
        {
          type: 'stats',
          items: [
            { value: '10 mo', label: 'From first commit to the latest release' },
            { value: '3', label: 'Desktop platforms from one codebase' },
            { value: '50+', label: 'Storybook files used as the design surface' },
          ],
        },
      ],
    },
    {
      id: 'reading-the-agent',
      heading: 'Reading the agent',
      blocks: [
        {
          type: 'text',
          body: [
            'An agent session can run for an hour and touch hundreds of files. The core problem was density: showing every step without burying the answer. I rebuilt the transcript around a registry of tool renderers, so each kind of action gets its own quiet, one-line form, and expands into a specialised viewer only when you ask.',
            'The labels change tense as the work happens. “Reading local file” becomes “Read local file” when it finishes, or “Tried to read local file” if it fails, so you can scan a long session and know its state from the verbs alone, without colour or icons doing all the work.',
          ],
        },
        {
          type: 'media',
          image: '/work/axon/tool-states.webp',
          alt: 'A specimen sheet of tool call rows: Checking citation, Reviewed citation, Citation review failed; Running command, Completed command, Tried command; and the same pattern for reading, writing, editing and finding files.',
          caption: 'Every tool call in three states: running, done, failed.',
          aspect: 'aspect-[4/5]',
        },
        {
          type: 'text',
          body: [
            'Files the agent produces open beside the chat rather than replacing it: code, CSV, spreadsheets, PDFs, and 3D structures in Mol*, which I re-skinned so its controls, colours and dark mode match the rest of the app. A right-hand panel keeps the agent’s plan and the files it touched in view while the conversation scrolls.',
          ],
        },
      ],
    },
    {
      id: 'plan-mode',
      heading: 'Plan mode',
      blocks: [
        {
          type: 'text',
          body: [
            'For long or expensive runs, scientists wanted to agree on the approach before any compute was spent. I prototyped plan mode as an animated Storybook demo first: the agent investigates the project, writes a plan into the viewer as a document you can edit, and the chat input turns into an approval question. That demo became the spec the engineering team built against.',
          ],
        },
        {
          type: 'media',
          video: '/work/axon/plan-mode.mp4',
          caption: 'Plan mode prototype: Axon reads the simulation files, drafts Plan.md beside the chat, then asks for approval.',
        },
      ],
    },
    {
      id: 'one-system',
      heading: 'One system, two themes',
      blocks: [
        {
          type: 'text',
          body: [
            'The app had grown several colour vocabularies at once: ad-hoc variables, leftovers from Carbon, and a set of shadcn defaults. I replaced them with Fractal, Mirror’s design system, using a two-layer token architecture: primitives underneath, semantic tokens such as surface, accent and border on top. Roughly 400 hard-coded colour references moved onto semantic tokens, which is what made a real dark mode possible rather than an inverted one.',
            'The same pass swapped every icon for the Fractal icon set and gave loading its own grammar: one loader for the interface waiting on itself, another for the agent thinking, so the two never get confused.',
          ],
        },
        {
          type: 'gallery',
          items: [
            {
              image: '/work/axon/usage-light.webp',
              alt: 'Usage page in light mode: a monthly usage bar, a daily usage histogram, a donut chart by category, and a table of sessions by usage.',
              caption: 'Usage, light',
              aspect: 'aspect-[16/10]',
            },
            {
              image: '/work/axon/usage-dark.webp',
              alt: 'The same usage page in dark mode.',
              caption: 'Usage, dark',
              aspect: 'aspect-[16/10]',
            },
          ],
        },
        {
          type: 'media',
          image: '/work/axon/workspace-dark.webp',
          alt: 'The Axon workspace in dark mode with the conversation, code viewer and progress checklist.',
          caption: 'The workspace in dark mode. Semantic tokens remap; the primitives stay the same.',
        },
      ],
    },
    {
      id: 'first-run',
      heading: 'First run',
      blocks: [
        {
          type: 'text',
          body: [
            'Axon installs a full scientific environment on first launch, which can take a while. I designed the setup flow so that wait reads as progress rather than a hang, and an onboarding wizard that asks what kind of research you do, generates starter prompts from your answers, and opens three sessions in parallel so your first minute in the app is already real work.',
          ],
        },
        {
          type: 'gallery',
          items: [
            { image: '/work/axon/setup-light.webp', alt: 'Setup dialog with the Mirror mark, a progress bar at 62 percent reading Installing packages, and a disabled Get Started button.', caption: 'Environment setup', aspect: 'aspect-[16/10]' },
            { image: '/work/axon/setup-dark.webp', alt: 'The same setup dialog in dark mode.', caption: 'Environment setup, dark', aspect: 'aspect-[16/10]' },
          ],
        },
      ],
    },
    {
      id: 'sharing',
      heading: 'Sharing and trust',
      blocks: [
        {
          type: 'text',
          body: [
            'Science is reviewed, so sessions needed to leave the app. I designed shared transcripts: a read-only web view of a session with a replay mode, the files it used, and a one-click import back into Axon for anyone who wants to pick the work up.',
            'Alongside the engineers building citation checking and claim tracing, I designed how that evidence surfaces: citation previews that show the source passage in place, and a review flow for tracing a conclusion back through the steps that produced it, kept quiet enough that it doesn’t compete with the answer.',
          ],
        },
        {
          type: 'media',
          image: '/work/axon/share-transcript.webp',
          alt: 'A shared transcript in the browser: a user question about solvent boiling points, a collapsed Ran agent row, the agent’s answer, and a read-only composer inviting the viewer to try Axon.',
          caption: 'A shared transcript, with replay and import in the header.',
          aspect: 'aspect-video',
        },
        {
          type: 'media',
          image: '/work/axon/share-card.webp',
          alt: 'Link preview card reading Explore ideas, discoveries, and answers in a shared conversation on Axon, on a blue to orange gradient.',
          caption: 'The link preview for a shared session.',
          aspect: 'aspect-[7/4]',
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
            'Axon now ships as one consistent product across three operating systems and two languages, with the interface, transcript and viewers all on Fractal. Working in the production codebase rather than handing off mockups meant design decisions landed at full fidelity, and Storybook became the place where designers and engineers agreed what “done” looked like.',
            'The biggest lesson was that the agent’s output is the interface. Most of the work wasn’t screens; it was deciding how a hundred small steps should read when you only glance at them.',
          ],
        },
      ],
    },
  ],
};

export default study;
