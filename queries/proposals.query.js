import gql from "graphql-tag";

const PROPOSALS_QUERY = gql`
  query Proposals {
    proposals {
      id
      title
      summary
      legal
      slug
    }
  }
`;

export default PROPOSALS_QUERY;
