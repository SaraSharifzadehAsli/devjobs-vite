import { styled, css } from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  /* padding: 16px; */
  gap: 16px;
  height: 80px;
  border-radius: var(--borderRadius);
  background-color: var(--bgColorElements);
`;

export const Input = styled.input`
  width: 100%;
  display: inline-block;
`;

export const SubContainer = styled.div<{
  $fullWidth?: boolean;
  $cursor?: boolean;
  $borderLeft?: boolean;
}>`
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  padding-left: 32px;
  /* margin: 0 16px; */
  display: inline-flex;

  ${(props) =>
    props.$borderLeft &&
    css`
      border-left: 1px solid rgba(110, 128, 152, 0.2);
    `}

  ${(props) =>
    props.$fullWidth &&
    css`
      @media (min-width: 768px) {
        flex-basis: 40%;
      }
    `}

  ${(props) =>
    props.$cursor &&
    css`
      cursor: pointer;
    `}

  & svg {
    flex-shrink: 0;
  }
`;

export const UncheckedIcon = styled.div`
  min-width: 24px;
  height: 24px;
  border-radius: 3px;
  background-color: var(--colorCheckBox);

  &:hover {
    color: var(--colorCheckBoxHover);
  }
`;

export const Typography = styled.p`
  color: var(--colorText);
  font-weight: bold;
  flex-shrink: 0;
`;
