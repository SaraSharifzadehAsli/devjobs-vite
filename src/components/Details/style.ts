import styled, { css } from "styled-components";

export const Container = styled.section`
  max-width: 730px;
  margin: auto;
  /* position: relative; */
`;
export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: var(--borderRadius);
  background-color: var(--bgColorElements);
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;
export const LogoBG = styled.div<{ $logoBackground: string }>`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$logoBackground};

  @media (min-width: 768px) {
    overflow: hidden;
    position: static;
    border-radius: unset;
    border-top-left-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
    transform: unset;
    width: 140px;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;

  @media (min-width: 768px) {
    align-items: flex-start;
    padding: unset;
  }
`;

export const Typography = styled.p<{
  $bold?: boolean;
  $fs?: string;
  $blue?: boolean;
  $pt?: string;
  $pb?: string;
}>`
  color: var(--colorText);
  ${(props) =>
    props.$pt &&
    css`
      padding-top: ${props.$pt};
    `};
  ${(props) =>
    props.$pb &&
    css`
      padding-bottom: ${props.$pb};
    `};
  ${(props) =>
    props.$blue &&
    css`
      color: var(--colorViolet);
    `};
  ${(props) =>
    props.$bold
      ? css`
          font-weight: bold;
        `
      : css`
          font-weight: normal;
        `};
  font-size: ${(props) => props.$fs};

  ${(props) =>
    props.$fs === "28px" &&
    css`
      @media (max-width: 768px) {
        font-size: 20px;
      }
    `}

  ${(props) =>
    props.$fs === "16px"
      ? css`
          line-height: 26px;
          color: var(--colorTextNormal);
        `
      : css`
          line-height: normal;
        `}
`;

export const SiteButton = styled.a`
  border-radius: var(--borderRadius);
  width: 147px;
  height: 48px;
  color: var(--colorButtonTwo);
  background-color: var(--bgColorButtonTwo);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px;

  @media (min-width: 768px) {
    margin: 46px;
  }
`;

export const Main = styled.section`
  padding: 40px 24px;
  background-color: var(--bgColorElements);
  border-radius: var(--borderRadius);
  margin: 32px 0 80px;

  & li {
    list-style-type: unset;
    padding-left: 20px;
    margin: 0 24px;
  }

  & li::marker {
    color: var(--colorViolet);
    display: inline-block;
    margin-left: -1em;
    width: 1em;
    margin-left: 32px;
  }

  @media (min-width: 768px) {
    padding: 48px;
  }
`;

export const MainHeader = styled(Header)`
  text-align: left;
  align-items: center;
`;

export const SubMainHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: unset;
  gap: 8px;
  padding-bottom: 50px;

  @media (min-width: 768px) {
    padding: unset;
  }
`;

export const ApplyButton = styled.a`
  border-radius: var(--borderRadius);
  width: 100%;
  height: 48px;
  color: var(--colorButtonOne);
  background-color: var(--bgColorButtonOne);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 140px;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  width: 100%;
  right: 0;
  left: 0;
  bottom: -176px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bgColorElements);
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;

  @media (min-width: 768px) {
    width: 730px;
    margin: 0 40px;
    padding: 24px 0;
  }
`;

export const SubFooter = styled(Content)`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    padding: 0px 1px 3px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const LogoImg = styled.img`
  @media (min-width: 768px) {
    width: 70px;
  }
`;
