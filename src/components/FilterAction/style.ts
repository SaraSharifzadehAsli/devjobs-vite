import { styled } from "styled-components";

export const FilterActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

// interface SearchButtonPropsType {
//   onClick: () => void;
// }

export const SearchButton = styled.button`
  width: 48px;
  background-color: var(--bgColorButtonOne);
  color: var(--colorButtonOne);
  border-radius: var(--borderRadius);
  flex-shrink: 1;
  height: 48px;

  @media (min-width: 768px) and (max-width: 1200px) {
    width: 80px;
  }

  @media (min-width: 1200px) {
    width: 123px;
  }
`;
