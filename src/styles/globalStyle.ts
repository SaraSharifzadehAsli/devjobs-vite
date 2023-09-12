import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --colorViolet: #5964e0;
        --colorLightViolet: #939bf4;
        --colorVeryDarkBlue: #19202d;
        --colorMidnight: #121721;
        --colorWhite: #fff;
        --colorLightGray: #f4f6f8;
        --colorGray: #9daec2;
        --colorDarkGray: #6e8098;

        --bgColorButtonOne: var(--colorViolet);
        --bgColorButtonOneHover: #939bf4;
        --colorButtonOne: var(--colorWhite);
        --colorCheckBoxHover: #eeeffc;

        --transition: all 0.2s ease-in;
        --borderRadius: 6px;
    }

    body {
        font-family: "Kumbh Sans", sans-serif;
        line-height: normal;
        font-weight: 400;
        font-size: 18px;
        overflow-x: hidden;
    }
      
    li {
        list-style-type: none;
    }
      
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    button {
        font-weight: 700;
        font-size: 16px;
        text-align: center;
        border-radius: var(--borderRadius);
        width: 141px;
        height: 48px;
        transition: var(--transition);
        cursor: pointer;
        font: inherit;
        border: none;
        outline: none;
    }

    input {
        outline: none;
        border: none;
        background-color: transparent;
        border-radius: var(--borderRadius);
        font: inherit;
        color: var(--colorText);
        &::-webkit-input-placeholder {
            opacity: 1;
        }
    }

    a {
        text-decoration: none;
    }

    body[data-theme = "light"] {
        --bgColorButtonTwo: #eeeffc;
        --bgColorButtonTwoHover: #c5c9f4;
        --colorButtonTwo: var(--colorViolet);
        --bgColorApp: var(--colorLightGray);
        background-color: var(--bgColorApp);
        --bgColorElements: var(--colorWhite);
        --colorText: var(--colorVeryDarkBlue);
        --colorTextNormal: var(--colorDarkGray);
        --colorCheckBox: #e7e8e9;
    }

    body[data-theme = "dark"] {
        --bgColorButtonTwo: #303642;
        --bgColorButtonTwoHover: #696e76;
        --colorButtonTwo: var(--colorWhite);
        --bgColorApp: var(--colorMidnight);
        background-color: var(--bgColorApp);
        --bgColorElements: var(--colorVeryDarkBlue);
        --colorText: var(--colorWhite);
        --colorTextNormal: #9DAEC2;
        --colorCheckBox: #313743;
    }
`;

export default GlobalStyles;
