import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";

import MainLayout from "../../../../layouts/MainLayout";
import { ContentContainer } from "components";
import { PROPOSAL_BY_SLUG_QUERY } from "../../../../queries";

function Commits({ query }) {
  const { loading, error, data } = useQuery(PROPOSAL_BY_SLUG_QUERY, {
    variables: { slug: query.proposal }
  });

  return (
    <MainLayout>
      <ContentContainer>
        {!loading &&
          data &&
          data.proposalBySlug.commits.map(commit => <div>{commit.title}</div>)}
      </ContentContainer>
    </MainLayout>
  );
}

Commits.getInitialProps = ({ query }) => {
  return { query };
};

export default Commits;
