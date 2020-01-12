import MainLayout from "../layouts/MainLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";

import { ContentContainer } from "components";
import { getProposals, PROPOSALS_QUERY } from "../queries";

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
  const { data, loading, error } = useQuery(PROPOSALS_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return (
    <MainLayout>
      <ContentContainer>
        <SubNav>
          <Title>Home</Title>
          <CreateButton>New proposal</CreateButton>
        </SubNav>
        {data.proposals.map(proposal => (
          <div key={proposal.id}>
            <Link href={`/p/${proposal.slug}`}>
              <a>{proposal.title}</a>
            </Link>
          </div>
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
