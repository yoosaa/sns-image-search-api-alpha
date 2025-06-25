import { Context } from 'hono';
import { searchUnsplash } from '../infra/unsplash';
import { getEmbedding } from '../infra/openai';
import { saveVector } from '../infra/vectorize';

export async function handleUnsplashRegister(c: Context, query: string, count: number) {
  const images = await searchUnsplash(c, query, count);
  const results = [];

  for (const img of images) {
    const embedding = await getEmbedding(c, img.caption);
    await saveVector(c, img.id, embedding, {
      imageUrl: img.url,
      caption: img.caption,
    });
    results.push({ id: img.id, caption: img.caption });
  }

  return { registered: results.length };
}