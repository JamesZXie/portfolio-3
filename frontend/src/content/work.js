// Case studies, in display order. Placeholder copy is marked DRAFT until
// James confirms the projects and supplies the real story and media.
//
// Shape:
//   slug, title, summary, role, year, team, timeline, outcome[],
//   cover: { image | video, alt, caption },
//   sections: [{ id, heading, body: string[], media? }]

export const studies = [
  {
    slug: 'axon',
    title: 'Axon',
    summary: 'DRAFT. An agent that does computational chemistry, and the interface scientists use to steer it.',
    role: 'Design lead',
    year: '2026',
    team: 'DRAFT',
    timeline: 'DRAFT',
    outcome: ['DRAFT outcome'],
    cover: { caption: 'Axon' },
    sections: [
      { id: 'context', heading: 'Context', body: ['DRAFT.'] },
      { id: 'problem', heading: 'Problem', body: ['DRAFT.'] },
      { id: 'approach', heading: 'Approach', body: ['DRAFT.'] },
      { id: 'outcome', heading: 'Outcome', body: ['DRAFT.'] },
    ],
  },
  {
    slug: 'fractal',
    title: 'Fractal',
    summary: 'DRAFT. A design system written for agents as much as people: tokens, components, icons, and the evidence that routes them.',
    role: 'Design and engineering',
    year: '2026',
    team: 'DRAFT',
    timeline: 'DRAFT',
    outcome: ['DRAFT outcome'],
    cover: { caption: 'Fractal' },
    sections: [
      { id: 'context', heading: 'Context', body: ['DRAFT.'] },
      { id: 'problem', heading: 'Problem', body: ['DRAFT.'] },
      { id: 'approach', heading: 'Approach', body: ['DRAFT.'] },
      { id: 'outcome', heading: 'Outcome', body: ['DRAFT.'] },
    ],
  },
  {
    slug: 'mirror-identity',
    title: 'Mirror Identity',
    summary: 'DRAFT. A visual language for a physics company, from a rendered molecule mark to the blueprint deck system.',
    role: 'Brand and visual design',
    year: '2026',
    team: 'DRAFT',
    timeline: 'DRAFT',
    outcome: ['DRAFT outcome'],
    cover: { caption: 'Mirror Physics' },
    sections: [
      { id: 'context', heading: 'Context', body: ['DRAFT.'] },
      { id: 'approach', heading: 'Approach', body: ['DRAFT.'] },
      { id: 'outcome', heading: 'Outcome', body: ['DRAFT.'] },
    ],
  },
];

export function getStudy(slug) {
  return studies.find((s) => s.slug === slug);
}
