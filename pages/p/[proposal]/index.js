import React from 'react';
import { ProposalPage } from 'components';

const MainProposalPage = ({ query }) => (
  <ProposalPage
    query={query}
    sections={[
      {
        label: 'Content',
        href: `/p/${query.proposal}`,
      },
      {
        label: 'Commits',
        href: `/p/${query.proposal}/commits/master`,
      },
    ]}
  />
);

MainProposalPage.getInitialProps = ({ query }) => ({ query });

export default MainProposalPage;
