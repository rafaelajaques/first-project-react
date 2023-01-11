import styled from 'styled-components';
import Background from '../../assets/background1.svg';

export const Container = styled.div`
   background: url("${Background}");
   background-size: cover;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 40px;
   height: 100%;
   min-height:100vh;
`

export const Image = styled.img`
   margin-top: 30px;
   width: 280px;
`

export const User = styled.li`
   display: flex;
   justify-content: space-between;
   padding: 0 20px;
   align-items: center;
   width: 100%;
   height: 50px;
   background: rgba(255, 255, 255, 0.25);
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 14px;
   border: none;
   outline: none;
   margin-top: 10px; */

   p{
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 24px;
   color: #FFFFFF;
   }
   
   button{
      background: none;
      border: none;
      cursor: pointer;
   }
`