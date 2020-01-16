import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import ContentContainer from "./ContentContainer";
import RichTextEditor from "./RIchTextEditor";
import MainLayout from "../layouts/MainLayout";
import { CREATE_PROPOSAL_MUTATION } from "../mutations";

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

function ProposalForm({
  formTitle,
  submitText,
  initialDescription,
  initialSummary,
  initialLegal
}) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [legal, setLegal] = useState("");
  const [createProposal, { data }] = useMutation(CREATE_PROPOSAL_MUTATION, {
    onCompleted() {
      router.push("/", "/", {
        getInitialProps: true
      });
    }
  });

  const handleSubmit = () => {
    createProposal({
      variables: {
        title,
        description,
        summary,
        legal
      }
    });
  };

  return (
    <MainLayout>
      <ContentContainer>
        <SubNav>
          <Title>{formTitle}</Title>
          <CreateButton onClick={() => handleSubmit()}>
            {submitText}
          </CreateButton>
        </SubNav>
        <Form onSubmit={() => handleSubmit()}>
          <TitleInput
            placeholder="Title"
            onChange={e => setTitle(e.target.value)}
          />
          <DescriptionInput
            placeholder="Description"
            value={description || initialDescription}
            rows={4}
            onChange={e => setDescription(e.target.value)}
          />
          <SummaryInput
            placeholder="Summary"
            initialValue={initialSummary}
            value={summary || initialSummary}
            onChange={setSummary}
          />
          <LegalInput
            placeholder="Legal"
            initialValue={initialLegal}
            value={legal}
            onChange={setLegal}
          />
        </Form>
      </ContentContainer>
    </MainLayout>
  );
}

export default ProposalForm;
