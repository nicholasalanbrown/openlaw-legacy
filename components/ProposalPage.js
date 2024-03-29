import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

import { ContentContainer, ProposalHeader } from 'components';
import ReactMarkdown from 'react-markdown';
import MainLayout from '../layouts/MainLayout';
import { PROPOSAL_BY_SLUG_QUERY } from '../queries';

function ProposalPage({ query, sections }) {
  const { loading, error, data } = useQuery(PROPOSAL_BY_SLUG_QUERY, {
    variables: { slug: query.proposal, branchName: query.branch },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
Error:
        {' '}
        {JSON.stringify(error)}
      </p>
    );
  }

  const router = useRouter();

  const handleBranchSelect = (selectedBranch) => {
    if (selectedBranch !== query.branch) {
      if (selectedBranch !== 'master') {
        router.push(`/p/${query.proposal}/branch/${selectedBranch}`);
      } else {
        router.push(`/p/${query.proposal}`);
      }
    }
  };

  return (
    <MainLayout>
      <ContentContainer>
        <ProposalHeader
          title={data.proposalBySlug.title}
          description={data.proposalBySlug.description}
          branches={data.proposalBySlug.branches}
          onBranchSelect={handleBranchSelect}
          currentBranch={query.branch || 'master'}
          sections={sections}
        />
        <ReactMarkdown source={data.proposalBySlug.summary} />
        <ReactMarkdown source={data.proposalBySlug.legal} />
      </ContentContainer>
    </MainLayout>
  );
}

ProposalPage.getInitialProps = ({ query }) => ({ query });

export default ProposalPage;
