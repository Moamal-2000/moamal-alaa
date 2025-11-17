export const contributionsQuery = `{
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
