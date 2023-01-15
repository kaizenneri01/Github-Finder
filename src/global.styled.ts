import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    scroll-behavior: smooth;
}

body{
    margin: 0;
    padding: 0;
    background: linear-gradient(180deg,#29282B,#151515);
    background-repeat: no-repeat;
    background-attachment: fixed;  
    font-family: Poopins , Roboto;
   
}
`;

export default GlobalStyle;
