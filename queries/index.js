import fetch from "isomorphic-unfetch";

export const getProposals = async () => {
  const res = await fetch(`${process.env.GITLAB_BASE_URL}/projects`)
    .then(response => response.json())
    .then(data => data);
  return res;
};

export const getProposalBranches = async gitlabProjectId => {
  const res = await fetch(
    `${process.env.GITLAB_BASE_URL}/projects/${gitlabProjectId}/repository/branches`
  )
    .then(response => response.json())
    .then(data => data);
  return res;
};

export const getProposalMetadata = async (
  gitlabProjectId,
  refName = "master"
) => {
  const res = await fetch(
    `${process.env.GITLAB_BASE_URL}/projects/${gitlabProjectId}/repository/files/metadata%2Ejson/raw?ref=${refName}`
  )
    .then(response => response.json())
    .then(data => data);
  return res;
};

export const getProposalSummary = async (
  gitlabProjectId,
  refName = "master"
) => {
  const res = await fetch(
    `${process.env.GITLAB_BASE_URL}/projects/${gitlabProjectId}/repository/files/summary%2Emd/raw?ref=${refName}`
  )
    .then(response => response.text())
    .then(data => data);
  return res;
};

export const getProposalLegal = async (gitlabProjectId, refName = "master") => {
  const res = await fetch(
    `${process.env.GITLAB_BASE_URL}/projects/${gitlabProjectId}/repository/files/legal%2Emd/raw?ref=${refName}`
  )
    .then(response => response.text())
    .then(data => data);
  return res;
};

export { default as PROPOSALS_QUERY } from "./proposals.query";
export { default as PROPOSAL_BY_SLUG_QUERY } from "./proposalBySlug.query";
