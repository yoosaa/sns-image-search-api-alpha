import { Context } from "hono";

const VECTORIZE_INDEX = 'image-index'; // 事前に作成しておく必要あり

export type VectorizeResponse = {
	success: boolean;
  errors?: any[];
};

export const saveVector = async (
	c: Context,
  id: string,
  embedding: number[],
  metadata: Record<string, any>
): Promise<VectorizeResponse> => {
	const VECTORIZE_API_TOKEN = c.env.VECTORIZE_API_TOKEN;
	const CLOUDFLARE_ACCOUNT_ID = c.env.CLOUDFLARE_ACCOUNT_ID;
	
  const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/vectorize/indexes/${VECTORIZE_INDEX}/vectors`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${VECTORIZE_API_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify([
      {
        id,
        values: embedding,
        metadata
      }
    ])
  });
	console.log(await res.text());

  const json = await res.json();
  if (!json.success) throw new Error(JSON.stringify(json.errors));
  return json;
}
