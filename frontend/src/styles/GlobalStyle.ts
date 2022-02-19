import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo',
      Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic',' Montserrat',
      sans-serif;
    
  }
  a{
    text-decoration: none;
    color: #000;
  }
`;

export default GlobalStyle;
