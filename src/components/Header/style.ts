import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;

  @media (min-width: 768px) {
    padding: 44px 0;
  }
`;
