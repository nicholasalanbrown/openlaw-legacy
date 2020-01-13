import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";

import MainLayout from "../../../../layouts/MainLayout";
import { ContentContainer } from "components";

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

function Commit({ query }) {
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
        Changes for {query.commit} go here
      </ContentContainer>
    </MainLayout>
  );
}

Commit.getInitialProps = ({ query }) => {
  return { query };
};

export default Commit;
