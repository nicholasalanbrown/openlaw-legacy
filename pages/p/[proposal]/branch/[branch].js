import React from 'react';
import { ProposalPage } from 'components';

const BranchProposalPage = ({ query }) => (
    <ProposalPage
        query={query}
        sections={[
            {
                label: 'Content',
                href: `/p/${query.proposal}/branch/${query.branch}`,
            },
            {
                label: 'Commits',
                href: `/p/${query.proposal}/commits/${query.branch}`,
            },
        ]}
    />
);

BranchProposalPage.getInitialProps = ({ query }) => ({ query });

export default BranchProposalPage;
