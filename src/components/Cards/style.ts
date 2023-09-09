import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 57px 0 32px;

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

export const LoadMore = styled.button`
  background-color: var(--bgColorButtonOne);
  color: var(--colorButtonOne);
  margin: 0 auto 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--bgColorButtonOneHover);
  }
`;
