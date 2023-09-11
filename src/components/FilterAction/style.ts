import { styled, css } from "styled-components";

export const FilterActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SearchButton = styled.button<{ $isHovered: boolean }>`
  width: 48px;
  background-color: var(--bgColorButtonOne);
  color: var(--colorButtonOne);
  border-radius: var(--borderRadius);
  flex-shrink: 1;
  height: 48px;
  margin: 16px;

  ${(props) =>
    props.$isHovered &&
    css`
      background-color: var(--bgColorButtonOneHover);
    `}

  @media (min-width: 768px) and (max-width: 1200px) {
    width: 80px;
  }

  @media (min-width: 1200px) {
    width: 123px;
  }
`;
