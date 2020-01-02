import Layout from "../layouts/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import styled from "styled-components";

const Title = styled.h1`
  color: purple;
`;

const Index = props => (
  <Layout>
    <Title>Batman TV Shows</Title>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;
