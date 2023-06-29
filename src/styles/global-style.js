import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
    'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic';
  color: inherit;
}

*,
:after,
:before {
  box-sizing: border-box;
}

:root {
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  cursor: default;
  overflow-wrap: break-word;
  word-break: break-word;
  tab-size: 4;
}

html,
body {
  height: 100%;
  background-color: #f2f4f5;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

button {
  background: none;
  border: 0;
  outline: none;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
}

a {
  text-decoration: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input {
  outline: none;
  border: none;
  &:disabled {
    cursor: not-allowed;
  }
}

textarea {
  outline: none;
  border: none;
  resize: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
`;
