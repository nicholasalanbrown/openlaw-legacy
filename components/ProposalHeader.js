import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Sections = styled.div`
  display: flex;
  padding: 30px 0 10px 0;
`;

const SectionLink = styled.a`
  background: ${(props) => (props.active ? '#0366d6' : 'none')};
  color: ${(props) => (props.active ? 'white' : '#0366d6')};
  margin-right: 16px;
  padding: 8px;
`;

function ProposalHeader({
  title,
  description,
  branches,
  onBranchSelect,
  currentBranch,
  sections,
}) {
  const router = useRouter();

  console.log(router);


  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <select
        onChange={(e) => onBranchSelect(e.target.value)}
        defaultValue={currentBranch}
      >
        {branches.map((branch) => (
          <option key={branch} value={branch}>
            {branch}
          </option>
        ))}
      </select>
      <Sections>
        {sections.map((section) => (
          <Link href={section.href} key={section.label} passHref>
            <SectionLink active={router.asPath === section.href}>
              {section.label}
            </SectionLink>
          </Link>
        ))}
      </Sections>
    </div>
  );
}

export default ProposalHeader;
