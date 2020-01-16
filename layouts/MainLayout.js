import Header from "../components/Header";

const MainLayout = props => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default MainLayout;
