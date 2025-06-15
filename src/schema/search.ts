import { z } from 'zod';

export const searchQuerySchema = z.object({
  q: z.string().min(1, '検索ワードを入力してください'),
});
