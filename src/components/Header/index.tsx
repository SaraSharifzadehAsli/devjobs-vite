import React from "react";
import { HeaderContainer } from "./style";
import logoIcon from "@assets/desktop/logo.svg";
import ToggleTheme from "@src/components/ToggleTheme";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={logoIcon} alt="logo-item" />
      <ToggleTheme />
    </HeaderContainer>
  );
};

export default Header;
