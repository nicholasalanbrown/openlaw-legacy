import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ContentContainer, RichTextEditor, ProposalForm } from 'components';
import MainLayout from 'layouts//MainLayout';
import { CREATE_PROPOSAL_MUTATION } from 'mutations';
import { PROPOSAL_BY_SLUG_QUERY } from 'queries';

function EditBranch({ query }) {
  const { loading, error, data } = useQuery(PROPOSAL_BY_SLUG_QUERY, {
    variables: { slug: query.proposal, branchName: 'master' },
  });

  if (loading) {
    return <div />;
  }

  return (
    <ProposalForm
      formTitle="Edit Proposal"
      submitText="Save"
      initialDescription={data.proposalBySlug.description}
      initialSummary={data.proposalBySlug.summary}
      initialLegal={data.proposalBySlug.legal}
    />
  );
}

EditBranch.getInitialProps = ({ query }) => ({ query });

export default EditBranch;
