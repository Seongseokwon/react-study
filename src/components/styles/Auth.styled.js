import styled from "styled-components";
import {StyledCommonLayout} from "./Common.styled";


export const StyledAuthLayout = styled(StyledCommonLayout)`
  & > form {
    border: 1px solid blue;
    padding: 50px;
  }
`