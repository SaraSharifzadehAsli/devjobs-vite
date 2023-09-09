import React from "react";
import { css, styled } from "styled-components";

type ViewProps = {
  view: "desktop" | "tablet" | "mobile" | "tablet/desktop" | "mobile/tablet";
  children: React.ReactNode;
};

const ViewContainer = styled.div<Pick<ViewProps, "view">>`
  ${(props) => {
    switch (props.view) {
      case "desktop":
        return css`
          display: none;
          @media (min-width: 1200px) {
            display: inherit;
          }
        `;

      case "tablet":
        return css`
          display: none;
          @media (min-width: 768px) and (max-width: 1200px) {
            display: inherit;
          }
        `;

      case "mobile":
        return css`
          display: none;
          @media (max-width: 768px) {
            display: inherit;
          }
        `;

      case "tablet/desktop":
        return css`
          display: none;
          @media (min-width: 768px) {
            display: inherit;
          }
        `;

      case "mobile/tablet":
        return css`
          display: none;
          @media (max-width: 1200px) {
            display: inherit;
          }
        `;
    }
  }}
`;

const View = ({ view, children }: ViewProps) => {
  return <ViewContainer view={view}>{children}</ViewContainer>;
};

export default View;
