import { GRAPHQL_ENDPOINT } from "@/constants/endpoints";

export async function fetchGraphQL<T>(
  query: string,
  variables = {}
): Promise<T> {
  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: {
      revalidate: 300,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch GraphQL data");
  const { data } = await res.json();
  return data;
}
