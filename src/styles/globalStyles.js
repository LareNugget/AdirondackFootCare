import { createGlobalStyle } from "styled-components";
import Tajawal from "../fonts/Tajawal/Tajawal-Regular.ttf";
//import font

export const AdirondackStyles = createGlobalStyle`

    @font-face {
        font-family: 'Tajawal';
        src: url(${Tajawal}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: auto;
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'Tajawal';
    }
    html {
        --color-text: red;
        --color-background: white;
        --color-primary: rebeccapurple;   
    }
`;
