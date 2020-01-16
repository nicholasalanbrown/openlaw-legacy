import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import { ContentContainer, RichTextEditor, ProposalForm } from "components";
import MainLayout from "../layouts/MainLayout";
import { CREATE_PROPOSAL_MUTATION } from "../mutations";

function NewProposal() {
  return <ProposalForm formTitle="New Proposal" />;
}

export default NewProposal;
