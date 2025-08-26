const GRAPHQL_ENDPOINT = "https://demo.dotcms.com/api/v1/graphql";
export const BASE_URL = "https://demo.dotcms.com";

export async function fetchGraphQL<T>(
  query: string,
  variables = {},
): Promise<T> {
  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch GraphQL data");
  const { data } = await res.json();
  return data;
};
