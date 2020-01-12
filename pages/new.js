import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import styled from "styled-components";
import { ContentContainer, RichTextEditor } from "components";

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

const Form = styled.form`
  padding: 40px 0;
`;

const TitleInput = styled.input`
  font-size: 18px;
  padding: 12px 10px;
  width: 100%;
`;

const DescriptionInput = styled.textarea`
  font-size: 18px;
  margin-top: 30px;
  resize: none;
  padding: 12px 10px;
  width: 100%;
`;

const SummaryInput = styled(RichTextEditor)`
  font-size: 18px;
  margin-top: 30px;
`;

const LegalInput = styled(RichTextEditor)`
  font-size: 18px;
  margin-top: 30px;
`;

function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [legal, setLegal] = useState("");

  return (
    <MainLayout>
      <ContentContainer>
        <SubNav>
          <Title>New Proposal</Title>
          <CreateButton>Create</CreateButton>
        </SubNav>
        <Form>
          <TitleInput
            placeholder="Title"
            onChange={e => setTitle(e.target.value)}
          />
          <DescriptionInput
            placeholder="Description"
            rows={4}
            onChange={e => setDescription(e.target.value)}
          />
          <SummaryInput placeholder="Summary" onChange={setSummary} />
          <LegalInput placeholder="Legal" onChange={setLegal} />
        </Form>
      </ContentContainer>
    </MainLayout>
  );
}

export default New;