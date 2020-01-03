import fetch from "isomorphic-unfetch";

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
