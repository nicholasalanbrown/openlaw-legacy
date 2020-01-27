import gql from 'graphql-tag';

const COMMIT_TO_BRANCH_MUTATION = gql`
  mutation CommitToBranch(
    $proposalId: String!
    $branchName: String!
    $title: String!
    $description: String!
    $summary: String!
    $legal: String!
    $message: String!
  ) {
    createProposal(
        proposalId: $proposalId
        branchName: $branchName
        title: $title
        description: $description
        summary: $summary
        legal: $legal
        message: $message
    ) {
      id
      title
    }
  }
`;

export default COMMIT_TO_BRANCH_MUTATION;
