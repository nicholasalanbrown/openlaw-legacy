import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import MeactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import { withAuth, withLoginRequired } from "use-auth0-hooks";
import { useQuery } from "@apollo/react-hooks";

import MainLayout from "../layouts/MainLayout";
import { ContentContainer } from "components";
import {
  getProposalBranches,
  getProposalMetadata,
  getProposalSummary,
  getProposalLegal,
  PROPOSAL_BY_SLUG_QUERY
} from "../queries";
import ReactMarkdown from "react-markdown";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Containter = styled.div`
  font-size: 18px;
  line-height: 1.4;
  max-width: 900px;
  padding: 60px 20px 0;
`;

function Proposal({ auth, query }) {
  const { loading, error, data } = useQuery(PROPOSAL_BY_SLUG_QUERY, {
    variables: { slug: query.proposal }
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  console.log(data);

  const router = useRouter();

  const handleBranchSelect = e => {
    const selectedBranch = e.target.value;
    if (selectedBranch !== currentBranch) {
      if (selectedBranch !== "master") {
        router.push(`/hello/tree/${selectedBranch}`);
      } else {
        router.push("/hello");
      }
    }
  };

  return (
    <MainLayout>
      <ContentContainer>
        {/*
        <select
          onChange={e => handleBranchSelect(e)}
          defaultValue={currentBranch || "master"}
        >
          {branches.map(branch => (
            <option key={branch.name} value={branch.name}>
              {branch.name}
            </option>
          ))}
        </select>
          */}
        <h1>{data.proposalBySlug.title}</h1>
        <h2>{data.proposalBySlug.description}</h2>
        <ReactMarkdown source={data.proposalBySlug.summary} />
        <ReactMarkdown source={data.proposalBySlug.legal} />
      </ContentContainer>
    </MainLayout>
  );
}

Proposal.getInitialProps = ({ query }) => {
  return { query };
};

export default Proposal;
