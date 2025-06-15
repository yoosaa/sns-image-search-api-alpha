import { Context } from 'hono';

export async function getEmbedding(c: Context, text: string): Promise<number[]> {
  const OPENAI_API_KEY = c.env.OPENAI_API_KEY;

  const res = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      input: text,
      model: 'text-embedding-3-small',
    }),
  });

  const json = await res.json();
  return json.data[0].embedding;
}
