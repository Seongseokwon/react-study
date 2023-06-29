import styled from 'styled-components';
import {StyledCommonLayout} from "./Common.styled";


export const StyledLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate( -50%, -50%);
  width: 1024px;
  min-width: 768px;
  height: 100vh;
`
export const StyledMainLayout = styled(StyledCommonLayout)`
  & > h1 {
    padding-bottom: 10px;
    color: #54ea0a;
  }

  & > a {
    color: white;
    font-weight: bold;
    font-size: 18px;
    border-radius: 4px;
    padding: 20px 40px;
    background-color: #32ed53;
  }
`

