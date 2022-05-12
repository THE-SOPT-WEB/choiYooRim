import styled,{createGlobalStyle} from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  #root, body, html {
    padding: 0;
    margin: 0;

    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }

  * {
    box-sizing: border-box;

	}

  button:hover {
    cursor: pointer;
  }

  
`;




export default GlobalStyle;