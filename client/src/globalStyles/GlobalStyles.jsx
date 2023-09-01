import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        margin:0px;
        padding:0px;
        #root {
            height:100vh;
            display:flex;
            flex-direction:column;
        }
    }
`;
