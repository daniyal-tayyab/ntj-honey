import { createGlobalStyle } from "styled-components";
import "@fontsource/open-sans-condensed";
import "@fontsource/open-sans";

const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Open Sans Condensed", sans-serif;
        overflow-x: hidden;
        box-sizing: border-box;
        background-color: #f7f3f0;
        color: #000000;
        font-weight: 700;
        font-size: 1.6rem;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    li {
        list-style: none;
        color: inherit;
    }
`;

export default GlobalStyles;
