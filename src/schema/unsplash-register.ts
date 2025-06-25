import { z } from 'zod';

export const unsplashRegisterSchema = z.object({
  query: z.string().min(1),
  count: z.number().min(1).max(10).default(3),
});
