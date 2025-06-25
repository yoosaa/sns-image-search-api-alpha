import { Context } from 'hono';

const UNSPLASH_API_BASE = 'https://api.unsplash.com';

export async function searchUnsplash(c: Context, query: string, count = 3) {
  const UNSPLASH_ACCESS_KEY = c.env.UNSPLASH_ACCESS_KEY;
  const res = await fetch(`${UNSPLASH_API_BASE}/search/photos?query=${encodeURIComponent(query)}&per_page=${count}`, {
    headers: {
      Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
    },
  });

  const json = await res.json();
  return json.results.map((photo: any) => ({
    id: photo.id,
    url: photo.urls.small,
    caption: photo.description || photo.alt_description || 'No caption',
  }));
}
