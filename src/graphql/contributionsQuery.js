export const contributionsQuery = `{
  user(login: "Moamal-2000") {
    pullRequests(first: 100, states: MERGED, orderBy: {field: CREATED_AT, direction: DESC}) {
      nodes {
        title
        url
        mergedAt

        repository {
          name
          url
          owner {
            login
            url
          }
        }

        commits(first: 20) {
          nodes {
            commit {
              message
              committedDate
              url
            }
          }
        }
      }
    }
  }
}`;
