import { Context } from 'hono';
import { getEmbedding } from '../infra/openai';

export async function handleSearch(c: Context, query: string) {
  const embedding = await getEmbedding(c, query);

  // 仮の検索結果（ベクトル検索の代替）
  return [
    {
      imageUrl: 'https://placekitten.com/300/300',
      caption: 'かわいい猫 in カフェ',
      score: 0.91,
    },
    {
      imageUrl: 'https://placekitten.com/301/301',
      caption: '窓辺の猫と珈琲',
      score: 0.88,
    },
  ];
}
