import App from 'next/app';
import Router from 'next/router';
import { Auth0Provider } from 'use-auth0-hooks';
import { ApolloProvider } from '@apollo/react-hooks';
import { createGlobalStyle } from 'styled-components';

import { withApollo } from '../utils';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap');

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  input, textarea {
    border: 1px solid #ccc;
    outline: none;
  }

  a {
    color: #0366d6;
    font-weight: 600;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

/**
 * Where to send the user after they have signed in.
 */
const onRedirectCallback = (appState) => {
  if (appState && appState.returnTo) {
    Router.push({
      pathname: appState.returnTo.pathname,
      query: appState.returnTo.query,
    });
  }
};

/**
 * When it hasn't been possible to retrieve a new access token.
 * @param {Error} err
 * @param {AccessTokenRequestOptions} options
 */
const onAccessTokenError = (err, options) => {
  console.error('Failed to retrieve access token: ', err);
};

/**
 * When signing in fails for some reason, we want to show it here.
 * @param {Error} err
 */
const onLoginError = (err) => {
  Router.push({
    pathname: '/oops',
    query: {
      message: err.error_description || err.message,
    },
  });
};

/**
 * When redirecting to the login page you'll end up in this state where the login page is still loading.
 * You can render a message to show that the user is being redirected.
 */
const onRedirecting = () => (
  <div>
    <h1>Signing you in</h1>
    <p>
      In order to access this page you will need to sign in. Please wait while
      we redirect you to the login page...
    </p>
  </div>
);

/**
 * Create a page which wraps the Auth0 provider.
 */
class Root extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <GlobalStyles />
        <Auth0Provider
          domain={process.env.AUTH0_DOMAIN}
          clientId={process.env.AUTH0_CLIENT_ID}
          redirectUri={process.env.REDIRECT_URI}
          onLoginError={onLoginError}
          onAccessTokenError={onAccessTokenError}
          onRedirecting={onRedirecting}
          onRedirectCallback={onRedirectCallback}
        >
          <Component {...pageProps} />
        </Auth0Provider>
      </ApolloProvider>
    );
  }
}

export default withApollo(Root);
