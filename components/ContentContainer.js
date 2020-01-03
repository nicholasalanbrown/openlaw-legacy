import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Containter = styled.div`
  font-size: 18px;
  line-height: 1.4;
  max-width: 900px;
  width: 900px;
  padding: 60px 20px 160px;
`;

function ContentContainer({ children }) {
  return (
    <Wrapper>
      <Containter>{children}</Containter>
    </Wrapper>
  );
}

export default ContentContainer;
