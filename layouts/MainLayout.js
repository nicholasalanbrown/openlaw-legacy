import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Cabin:400,500,600&display=swap');

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Cabin', sans-serif;
  }
`;

import Header from "../components/Header";

const MainLayout = props => (
  <div>
    <GlobalStyles />
    <Header />
    {props.children}
  </div>
);

export default MainLayout;
