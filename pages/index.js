import MainLayout from "../layouts/MainLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import styled from "styled-components";

const Index = props => (
  <MainLayout>
    <Link href="/proposal">
      <a>Proposal Template</a>
    </Link>
  </MainLayout>
);

export default Index;
