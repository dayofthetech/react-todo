import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        flex-flow: wrap;
    }

    body {
        ${'' /* Temporary bg color - can be change from ThemeProvider in App */}
        background-color: ${({ theme }) => theme.colors.body};
        ${'' /* background: #fff; */}
        color: hsl(192, 100%, 9%);
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }

    p {
        opacity: 0.6;
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }

${'' /* Global style to make all my ul without bullet points */}
    ul {
        list-style-type: none;
        display: flex;
    }

`
export default GlobalStyles