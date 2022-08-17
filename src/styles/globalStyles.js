import { createGlobalStyle } from "styled-components";
import Tajawal from "../fonts/Tajawal/Tajawal-Regular.ttf";
import Oswald from "../fonts/Oswald/Oswald-Regular.ttf";
//import font

export const AdirondackStyles = createGlobalStyle`

    @font-face {
        font-family: 'Tajawal';
        src: url(${Tajawal}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: 'Oswald';
        src: url(${Oswald}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: auto;
    }

    

    //Global CSS Reset 
    * {
        margin: 0;
        padding: 0;
        font-family: 'Oswald';
    }

    //global theme variables
    html {
        --color-text: red;
        --color-background: white;
        --color-primary: rebeccapurple;   
    }
`;
