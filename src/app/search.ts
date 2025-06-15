import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { searchQuerySchema } from '../schema/search';
import { handleSearch } from '../domain/search';

export const searchRoute = new Hono();

searchRoute.get(
  '/search',
  zValidator('query', searchQuerySchema),
  async (c) => {
    const { q } = c.req.valid('query');
    const results = await handleSearch(c, q);
    return c.json(results);
  }
);
