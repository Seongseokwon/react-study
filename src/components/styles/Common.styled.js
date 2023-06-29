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