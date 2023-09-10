import styled, { css } from "styled-components";

export const BG = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 50;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const Container = styled.form`
  width: 327px;
  /* height: 217px; */
  background-color: var(--bgColorElements);
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  /* align-items: center; */
  /* padding: 24px; */
  /* padding-top: 0; */
  border-radius: var(--borderRadius);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

export const SubContainer = styled.div<{
  $cursor?: boolean;
  $borderBottom?: boolean;
}>`
  padding: 30px 24px;
  /* height: 72px; */
  align-items: center;
  display: inline-flex;
  gap: 16px;
  ${(props) =>
    props.$cursor &&
    css`
      cursor: pointer;
    `}

  ${(props) =>
    props.$borderBottom &&
    css`
      border-bottom: 1px solid rgba(110, 128, 152, 0.2);
    `}

  & svg {
    flex-shrink: 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  display: inline-block;
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
`;

export const SearchButton = styled.button<{ isHovered: boolean }>`
  margin: 0 24px 24px;
  width: 279px;
  background-color: var(--bgColorButtonOne);
  color: var(--colorButtonOne);
  border-radius: var(--borderRadius);
  height: 48px;
  flex-shrink: 0;

  ${(props) =>
    props.isHovered &&
    css`
      background-color: var(--bgColorButtonOneHover);
    `}
`;
