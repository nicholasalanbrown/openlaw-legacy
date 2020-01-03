import MainLayout from "../layouts/MainLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import { ContentContainer } from "components";
import { getProposals } from "../queries";

function Index({ proposals }) {
  return (
    <MainLayout>
      <ContentContainer>
        {proposals &&
          proposals.map(proposal => (
            <Link key={proposal.id} href="/proposal">
              <a>{proposal.name}</a>
            </Link>
          ))}
      </ContentContainer>
    </MainLayout>
  );
}

Index.getInitialProps = async function() {
  const proposals = await getProposals();
  return { proposals };
};

export default Index;
