import { error } from '@sveltejs/kit';

import { default as newsIndex } from '../index.js';

export const load = async ({ params }) =>
  newsIndex.has(params.slug) ? newsIndex.get(params.slug) : error(404);
