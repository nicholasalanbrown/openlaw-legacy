import MainLayout from "../layouts/MainLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import { ContentContainer } from "components";
import { getProposals } from "../queries";

const SubNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

const Title = styled.h1`
  line-height: 1;
  margin: 0;
`;

const CreateButton = styled.button`
  border: none;
  background: #372237;
  border-radius: 2px;
  color: white;
  font-size: 18px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;

function Index({ proposals }) {
  return (
    <MainLayout>
      <ContentContainer>
        <SubNav>
          <Title>Home</Title>
          <CreateButton>New proposal</CreateButton>
        </SubNav>
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
