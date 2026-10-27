import { GITHUB_API } from "@/constants/global";

export async function fetchGithubGraphQL(query) {
  try {
    const response = await fetch(`${GITHUB_API}/graphql`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 }, // 1 hour
    });

    if (!response.ok) {
      throw new Error(`GitHub HTTP Error: ${response.status}`);
    }

    const { data, errors } = await response.json();

    if (errors && errors.length > 0) {
      console.error("GitHub GraphQL Errors:", errors);
      throw new Error("Failed to fetch GraphQL data");
    }

    return data;
  } catch (error) {
    console.error("fetchGithubGraphQL Execution Failed:", error);
    return null;
  }
}
