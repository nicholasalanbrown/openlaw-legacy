import gql from "graphql-tag";

const CREATE_PROPOSAL_MUTATION = gql`
  mutation CreateProposal(
    $title: String!
    $description: String!
    $summary: String
    $legal: String
  ) {
    createProposal(
      title: $title
      description: $description
      summary: $summary
      legal: $legal
    ) {
      id
      title
      slug
    }
  }
`;

export default CREATE_PROPOSAL_MUTATION;
