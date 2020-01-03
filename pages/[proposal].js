import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import MeactMarkdown from "react-markdown";

import MainLayout from "../layouts/MainLayout";
import {
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

function Proposal({ metadata, summary, legal }) {
  return (
    <MainLayout>
      <Wrapper>
        <Containter>
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
  const metadata = await getProposalMetadata(1);
  const summary = await getProposalSummary(1);
  const legal = await getProposalLegal(1);
  return { metadata, summary, legal };
};

export default Proposal;
