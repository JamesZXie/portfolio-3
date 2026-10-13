// Selected work, in display order. Each case study lives in its own file in
// this folder and its media in public/work/<slug>/. See _template.js for the
// full content format.
import axon from './axon';
import fractal from './fractal';
import mirrorWebsite from './mirror-website';

export const studies = [axon, fractal, mirrorWebsite];

export function getStudy(slug) {
  return studies.find((s) => s.slug === slug);
}
