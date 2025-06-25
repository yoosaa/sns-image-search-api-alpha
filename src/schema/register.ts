import { z } from 'zod';

export const registerBodySchema = z.object({
  id: z.string(),
  imageUrl: z.string().url(),
  caption: z.string().min(1),
});
