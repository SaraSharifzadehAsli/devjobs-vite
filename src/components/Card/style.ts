import { styled } from "styled-components";

export const Container = styled.section`
  border-radius: var(--borderRadius);
  background-color: var(--bgColorElements);
  position: relative;
  width: 350px;
  height: 228px;
  padding: 49px 32px 32px;
`;

export const LogoBG = styled.div<{ logoBackground: string }>`
  position: absolute;
  z-index: 1;
  top: -25px;
  left: 32px;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.logoBackground};
`;

export const Text = styled.p`
  color: var(--colorDarkGray);
  font-size: 16px;
`;

export const Title = styled.h1`
  color: var(--colorText);
  font-size: 20px;
  padding: 12px 0;
`;

export const Location = styled.p`
  color: var(--colorViolet);
  font-size: 14px;
  padding-top: 40px;
`;
