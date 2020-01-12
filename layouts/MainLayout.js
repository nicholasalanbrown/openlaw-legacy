import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600&display=swap');

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
