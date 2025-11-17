export async function GET() {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  return Response.json(data);
}

const query = `{
  user(login: "Moamal-2000") {
    pullRequests(first: 100, states: MERGED, orderBy: {field: CREATED_AT, direction: DESC}) {
      nodes {
        title
        url
        mergedAt
        createdAt
        updatedAt
        number
        state
        body
        bodyHTML
        bodyText

        repository {
          name
          url
          description
          owner {
            login
            url
          }
        }

        author {
          login
          url
        }

        additions
        deletions
        changedFiles

        commits(first: 20) {
          totalCount
          nodes {
            commit {
              message
              committedDate
              url
            }
          }
        }

        labels(first: 10) {
          nodes {
            name
            color
          }
        }

        reviews(first: 10) {
          nodes {
            author {
              login
            }
            state
            submittedAt
          }
        }
      }
    }
  }
}`;
