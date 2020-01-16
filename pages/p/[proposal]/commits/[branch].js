import React from 'react';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import { ContentContainer, ProposalHeader, Row } from 'components';
import MainLayout from '../../../../layouts/MainLayout';
import { PROPOSAL_BY_SLUG_QUERY } from '../../../../queries';

function Commits({ query }) {
  const { loading, error, data } = useQuery(PROPOSAL_BY_SLUG_QUERY, {
    variables: {
      slug: query.proposal,
      branchName: query.branch,
    },
  });

  if (loading) {
    return <div />;
  }

  return (
    <MainLayout>
      <ContentContainer>
        <ProposalHeader
          title={data.proposalBySlug.title}
          description={data.proposalBySlug.description}
          branches={data.proposalBySlug.branches}
          currentBranch={query.branch || 'master'}
          sections={[
            {
              label: 'Content',
              href: `/p/${query.proposal}`,
            },
            {
              label: 'Commits',
              href: `/p/${query.proposal}/commits/${query.branch}`,
            },
          ]}
        />
        {!loading
          && data
          && data.proposalBySlug.commits.map((commit) => (
            <Row key={commit.id}>{commit.title}</Row>
          ))}
      </ContentContainer>
    </MainLayout>
  );
}

Commits.getInitialProps = ({ query }) => ({ query });

export default Commits;
