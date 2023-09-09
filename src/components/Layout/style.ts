import { styled } from "styled-components";

export const BG = styled.img`
  height: 136px;
  width: calc(100% + 50px);
  position: absolute;
  z-index: -1;
  left: -50px;
  top: 0;

  @media (min-width: 768px) {
    height: 160px;
    left: unset;
    width: 100%;
  }
`;

export const Container = styled.section`
  max-width: 1190px;
  margin: 0 auto;
  padding: 0 40px;
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;
