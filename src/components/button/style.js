import styled from "styled-components";

export const Button = styled.button`
   width: 280px;
   height: 60px;
   border: ${props => props.isBack ? '1px solid #FFFFFF' : 'none'};
   background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
   border-radius: 14px;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 700;
   font-size: 17px;
   line-height: 28px;
   color: #FFFFFF;
   cursor:pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;
   margin-top: 50px;

   &:hover{
      opacity: 0.8;
   }

   &:active{
      opacity: 0.5;
   }

   img{
   transform: ${props => props.isBack && 'rotateY(180deg)'};
   }
`
