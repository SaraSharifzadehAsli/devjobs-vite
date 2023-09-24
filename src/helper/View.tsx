import React, { PropsWithChildren } from "react";
import { css, styled } from "styled-components";

enum ViewPorts {
  DESKTOP = "desktop",
  TABLET = "tablet",
  MOBILE = "mobile",
  "tablet/desktop" = "tablet/desktop",
  "mobile/tablet" = "mobile/tablet",
}

type ViewProps = {
  view: Lowercase<keyof typeof ViewPorts>;
};

const ViewContainer = styled.div<Pick<ViewProps, "view">>`
  ${(props) => {
    switch (props.view) {
      case ViewPorts.DESKTOP:
        return css`
          display: none;
          @media (min-width: 1200px) {
            display: inherit;
          }
        `;

      case ViewPorts.TABLET:
        return css`
          display: none;
          @media (min-width: 768px) and (max-width: 1200px) {
            display: inherit;
          }
        `;

      case ViewPorts.MOBILE:
        return css`
          display: none;
          @media (max-width: 768px) {
            display: inherit;
          }
        `;

      case ViewPorts["tablet/desktop"]:
        return css`
          display: none;
          @media (min-width: 768px) {
            display: inherit;
          }
        `;

      case ViewPorts["mobile/tablet"]:
        return css`
          display: none;
          @media (max-width: 1200px) {
            display: inherit;
          }
        `;
    }
  }}
`;

const View = ({ view, children }: PropsWithChildren<ViewProps>) => {
  return <ViewContainer view={view}>{children}</ViewContainer>;
};

export default View;
