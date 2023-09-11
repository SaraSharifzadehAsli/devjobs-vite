import { useState } from "react";
import { useTheme } from "@src/context/ThemeProvider";
import MoonIcon from "@src/components/icons/MoonIcon";
import SunIcon from "@src/components/icons/SunIcon";
import { ToggleThemeButton, ToggleThemeContainer } from "./style";

const ToggleTheme = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleThemeContainer>
      <SunIcon />
      <ToggleThemeButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        $isHovered={isHovered}
        onClick={toggleTheme}
        theme={theme}
      />
      <MoonIcon />
    </ToggleThemeContainer>
  );
};

export default ToggleTheme;
