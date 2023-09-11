import { styled, css } from "styled-components";

export const ToggleThemeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export interface ThemeButtonProps {
  theme: string;
  $isHovered: boolean;
}

export const ToggleThemeButton = styled.div<ThemeButtonProps>`
  background-color: var(--colorWhite);
  width: 48px;
  height: 24px;
  border-radius: 12px;
  cursor: pointer;

  &::before {
    content: " ";
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--colorViolet);
    transition: var(--transition);
    transform: ${(props) =>
      props.theme === "light" ? "translateX(5px)" : "translateX(32px)"};
    ${(props) =>
      props.$isHovered &&
      css`
        background-color: var(--bgColorButtonOneHover);
      `}
  }
`;
