import fetch from "isomorphic-unfetch";

export const getProposalContent = async (
  gitlabProjectId,
  refName = "master"
) => {
  const res = await fetch(
    `${process.env.GITLAB_BASE_URL}/projects/${gitlabProjectId}/repository/files/content%2Emd/raw?ref=${refName}`
  )
    .then(response => response.text())
    .then(data => data);
  return res;
};
