import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useAuth } from 'use-auth0-hooks';

const Nav = styled.div`
  border-bottom: 1px solid #ccc;
  align-items: center;
  justify-content: space-between;
  display: flex;
  height: 60px;
  padding: 0 20px;
  width: 100%;
`;

const AccountButton = styled.button`
  background: none;
  border: none;
  box-shadow: none;
  font-size: 18px;
  outline: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

function Header() {
  const { pathname, query } = useRouter();
  const {
    isAuthenticated, isLoading, login, logout,
  } = useAuth();
  return (
    <Nav>
      <Link href="/" prefetch>
        <a>Home</a>
      </Link>
      {!isLoading
        && (isAuthenticated ? (
          <AccountButton
            onClick={() => logout({ returnTo: process.env.POST_LOGOUT_REDIRECT_URI })}
          >
            Log out
          </AccountButton>
        ) : (
            <AccountButton
              onClick={() => login({ appState: { returnTo: { pathname, query } } })}
            >
              Log in
          </AccountButton>
          ))}
    </Nav>
  );
}

export default Header;
