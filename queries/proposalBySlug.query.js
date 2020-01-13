import gql from "graphql-tag";

const PROPOSAL_BY_SLUG_QUERY = gql`
  query getProposalBySlug($slug: String!) {
    proposalBySlug(slug: $slug) {
      id
      title
      description
      summary
      legal
      branches
      commits {
        id
        title
      }
    }
  }
`;

export default PROPOSAL_BY_SLUG_QUERY;
