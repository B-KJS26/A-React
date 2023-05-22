import { createGlobalStyle } from "styled-components";
import LightBold from '../fonts/LightBold.ttf';
import LightRegular from '../fonts/LightRegular.ttf';
const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'LightBold';
    font-style: normal;
    src: url(${LightBold}) format('truetype');
    }
    @font-face {
    font-family: 'LightRegular';
    font-style: normal;
    src: url(${LightRegular}) format('truetype');
    }
`;
export default GlobalStyle; 