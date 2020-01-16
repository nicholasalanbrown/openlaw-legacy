import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  display: inline-block;
`;

const Description = styled.h2`
  color: #888888;
  font-size: 24px;
  font-weight: 300;
`;

const Sections = styled.div`
  display: flex;
  padding: 30px 0 10px 0;
`;

const SectionLink = styled.a`
  background: ${(props) => (props.active ? '#0366d6' : 'none')};
  color: ${(props) => (props.active ? 'white' : '#0366d6')};
  margin-right: 16px;
  padding: 8px;
  border-radius: 2px;
  pointer-events: ${(props) => props.active && 'none'};
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

  return (
    <div>
      <TitleRow>
        <Title>{title}</Title>
        <Link href={`${router.asPath}/edit`} passHref>
          <a>Edit</a>
        </Link>
      </TitleRow>
      <Description>{description}</Description>
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
