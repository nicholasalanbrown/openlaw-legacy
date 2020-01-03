import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import MeactMarkdown from "react-markdown";
import { useRouter } from "next/router";

import MainLayout from "../layouts/MainLayout";
import {
  getProposalBranches,
  getProposalMetadata,
  getProposalSummary,
  getProposalLegal
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

function Proposal({ branches, currentBranch, metadata, summary, legal }) {
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
      <Wrapper>
        <Containter>
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
          <h1>{metadata.title}</h1>
          <h2>{metadata.description}</h2>
          <ReactMarkdown source={summary} />
          <ReactMarkdown source={legal} />
        </Containter>
      </Wrapper>
    </MainLayout>
  );
}

Proposal.getInitialProps = async function(context) {
  const allBranches = await getProposalBranches(1);
  const branches = allBranches.filter(branch => branch.merged === false);
  console.log(branches);
  const currentBranch = context.query.branch || "master";
  const metadata = await getProposalMetadata(1, currentBranch);
  const summary = await getProposalSummary(1, currentBranch);
  const legal = await getProposalLegal(1, currentBranch);
  return { branches, currentBranch, metadata, summary, legal };
};

export default Proposal;
