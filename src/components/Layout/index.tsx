import { Outlet } from "react-router-dom";

import bgPattern from "@assets/desktop/bg-pattern-header.svg";
import GlobalStyles from "@src/styles/globalStyle";
import Header from "@src/components/Header";
import { BG, Container } from "./style";

const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <BG src={bgPattern} alt="bg-pattern" />
      <Container>
        <Header />
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
