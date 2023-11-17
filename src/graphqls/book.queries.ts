import { graphql } from '../gql-codegen';

export const BOOKS_QUERY = graphql(`
  query BooksQuery {
    books {
      title
      author
    }
  }
`);
