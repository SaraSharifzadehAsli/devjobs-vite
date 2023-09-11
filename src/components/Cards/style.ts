import { styled, css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 57px 0 32px;
  gap: 49px 11px;

  @media (min-width: 768px) {
    margin: 70px 0 56px;
    gap: 65px 11px;
  }

  @media (min-width: 1200px) {
    margin: 105px 0 56px;
    gap: 65px 30px;
  }
`;

export const Error = styled.h1`
  color: var(--colorText);
`;

export const LoadMore = styled.button<{ $isHovered: boolean }>`
  background-color: var(--bgColorButtonOne);
  color: var(--colorButtonOne);
  margin: 0 auto 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.$isHovered &&
    css`
      background-color: var(--bgColorButtonOneHover);
    `}
`;
