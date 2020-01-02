import Layout from "../layouts/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import styled from "styled-components";

const Index = props => (
  <Layout>
    <Link href="/proposal">
      <a>Proposal Template</a>
    </Link>
  </Layout>
);

export default Index;
