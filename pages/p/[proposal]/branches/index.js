import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";

import MainLayout from "../../../../layouts/MainLayout";
import { ContentContainer } from "components";
import { PROPOSAL_BY_SLUG_QUERY } from "../../../../queries";

function Branches({ query }) {
  const { loading, error, data } = useQuery(PROPOSAL_BY_SLUG_QUERY, {
    variables: { slug: query.proposal }
  });

  console.log(data);

  return (
    <MainLayout>
      <ContentContainer>
        {!loading &&
          data &&
          data.proposalBySlug.branches.map(branch => <div>{branch}</div>)}
      </ContentContainer>
    </MainLayout>
  );
}

Branches.getInitialProps = ({ query }) => {
  return { query };
};

export default Branches;
