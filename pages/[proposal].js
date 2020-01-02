import fetch from "isomorphic-unfetch";

import Layout from "../layouts/MyLayout";
import { getProposalContent } from "../queries";

function Proposal({ content }) {
  console.log(content);
  return (
    <Layout>
      <div>{content}</div>
    </Layout>
  );
}

Proposal.getInitialProps = async function(context) {
  const content = await getProposalContent(1);
  return { content };
};

export default Proposal;
