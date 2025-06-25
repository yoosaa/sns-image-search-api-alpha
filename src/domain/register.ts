import { Context } from 'hono';
import { getEmbedding } from '../infra/openai';
import { saveVector } from '../infra/vectorize';

type RegisterInput = {
  id: string;
  imageUrl: string;
  caption: string;
};

export const registerVector = async (c: Context, input: RegisterInput) => {
  const embedding = await getEmbedding(c, input.caption);
  return await saveVector(c, input.id, embedding, {
    imageUrl: input.imageUrl,
    caption: input.caption,
  });
}
