import styled from 'styled-components';
import MainImg from '../../assets/img/main_img_2048.png';

export const StyledCommonLayout = styled.div`
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  background-image: url(${MainImg});
  min-width: 768px;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledCommonInputGroup = styled.div`


  display: flex;
  padding: 10px;

  & > label {
    width: 120px;
    font-size: 18px;
    font-weight: bold;
  }

  & > input:not([type=radio]) {
    width: 350px;
    padding: 5px;
    height: 35px;
    border: 1px solid lightgrey;
    box-shadow: 8px 8px 14px -2px rgba(0,0,0,0.75);
    -webkit-box-shadow: 8px 8px 14px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 8px 8px 14px -2px rgba(0,0,0,0.75);
  }


`


export const StyledCommonButtonGroup = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

export const Button = styled.button``