import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import MeactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import { withAuth, withLoginRequired } from "use-auth0-hooks";
import { useQuery } from "@apollo/react-hooks";

import MainLayout from "../layouts/MainLayout";
import { ContentContainer } from "components";
import { PROPOSAL_BY_SLUG_QUERY } from "../queries";
import ReactMarkdown from "react-markdown";

function Proposal({ auth, query }) {
  const { loading, error, data } = useQuery(PROPOSAL_BY_SLUG_QUERY, {
    variables: { slug: query.proposal, branchName: query.branch }
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  const router = useRouter();

  const handleBranchSelect = e => {
    const selectedBranch = e.target.value;
    if (selectedBranch !== query.branch) {
      if (selectedBranch !== "master") {
        router.push(`/p/${query.proposal}/branch/${selectedBranch}`);
      } else {
        router.push(`/p/${query.proposal}`);
      }
    }
  };

  return (
    <MainLayout>
      <ContentContainer>
        <select
          onChange={e => handleBranchSelect(e)}
          defaultValue={query.branch || "master"}
        >
          {data.proposalBySlug.branches.map(branch => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>
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
