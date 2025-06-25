import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { unsplashRegisterSchema } from '../schema/unsplash-register';
import { handleUnsplashRegister } from '../domain/unsplash-register';

export const unsplashRegisterRoute = new Hono<{}>();

unsplashRegisterRoute.post(
  '/unsplash-register',
  zValidator('json', unsplashRegisterSchema),
  async (c) => {
    const { query, count } = c.req.valid('json');
    const result = await handleUnsplashRegister(c, query, count);
    return c.json(result);
  }
);