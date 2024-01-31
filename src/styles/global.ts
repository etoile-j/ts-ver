import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    :root {
        --point-color: #6997f7;
        --base-gray: #c4c4c4;
        --white: #ffffff;
    }

    @font-face {
        font-family: 'SpoqaHanSansNeo-Medium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Medium.woff')
            format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'SpoqaHanSansNeo-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff')
            format('woff');
        font-weight: normal;
        font-style: normal;
    }

    ${reset}
    * {
        box-sizing: border-box;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    body {
        background-color: #ffffff;
        margin: 90px 0 0px;
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: scroll;
    }

    main {
        min-width: 767px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    input, button {
        background-color: transparent;
        border: none;
        outline: none;
    }
    button {
        cursor: pointer;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family:'Maven Pro', sans-serif;
    }
    h2 {
        padding: 54px 0 52px;
        font-weight: 700;
        font-size: 36px;
        line-height: 44px;
        text-align: center;
    }

    ol, ul, li {
        list-style: none;
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
    }
`;
