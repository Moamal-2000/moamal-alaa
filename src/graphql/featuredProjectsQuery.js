export const featuredProjectsQuery = `{
  user(login: "Moamal-2000") {
    repositories(first: 100, orderBy: {field: STARGAZERS, direction: DESC}) {
      nodes {
        name
        stargazerCount
        forkCount
        url
        homepageUrl
        defaultBranchRef {
          target {
            ... on Commit {
              history {
                totalCount
              }
            }
          }
        }
      }
    }
  }
}`;
