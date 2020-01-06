import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useAuth } from "use-auth0-hooks";

const Nav = styled.div`
  border-bottom: 1px solid #ccc;
  height: 60px;
  width: 100%;
`;

function Header() {
  const { pathname, query } = useRouter();
  const { isAuthenticated, isLoading, login, logout } = useAuth();
  return (
    <Nav>
      {!isLoading &&
        (isAuthenticated ? (
          <button
            onClick={() =>
              logout({ returnTo: process.env.POST_LOGOUT_REDIRECT_URI })
            }
          >
            Log out
          </button>
        ) : (
          <button
            onClick={() =>
              login({ appState: { returnTo: { pathname, query } } })
            }
          >
            Log in
          </button>
        ))}
    </Nav>
  );
}

export default Header;
