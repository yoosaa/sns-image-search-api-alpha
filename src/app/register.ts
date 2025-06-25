import { Hono} from 'hono';
import { zValidator } from '@hono/zod-validator';
import { registerBodySchema } from '../schema/register';
import { registerVector } from '../domain/register';

export const registerRoute = new Hono<{}>();

registerRoute.post(
  '/vectorize/register',
  zValidator('json', registerBodySchema),
  async (c) => {
    const body = c.req.valid('json');
    const result = await registerVector(c, body);
    return c.json({ success: true, result });
  }
);
