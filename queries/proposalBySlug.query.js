import gql from 'graphql-tag';

const PROPOSAL_BY_SLUG_QUERY = gql`
  query getProposalBySlug($slug: String!, $branchName: String) {
    proposalBySlug(slug: $slug, branchName: $branchName) {
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
