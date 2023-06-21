import styled from 'styled-components';
import Email from '../../assets/email.svg';

export const Profile = styled.div`
 width: 100%;
 display: flex;
 flex-direction:column;



`;
export const TitleContainer = styled.div`
 display: flex;
 flex-direction:column;
 align-items: center;
 gap:10px;
 

   @media (min-width:768px){
    display: flex;
    flex-direction: row;
}

 h3{
  
  font-style: normal;
 font-weight: 600;
 font-size: 28px;
 line-height: 42px;

 color: #FFFFFF;
 }

 p{
   font-style: italic;
   font-weight: 400;
   font-size: 20px;
   line-height: 30px;

   color: #B3B3B3;

 }

 

`;
export const Image = styled.img`
width: 100%;
height: 277px;
border-radius: 24px;
margin-top:1rem;
background-size: cover;
object-fit: cover;



 @media (min-width:768px){
  border-radius: 400px;
  width:221px;
}

`
export const MediasContent = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 margin-top: 24px;
 justify-content: space-between;
 
   @media (min-width:768px){
    width: 321px;
  

    }

`;
export const BoxIcon = styled.a`
width: 50px;
display: flex;
justify-content: center;
align-items: center;
height: 50px;
border: 1px solid #FFFFFF;
border-radius: 100px;


img{
 width: 20px;
 height: 20px;
}
`;
export const ButtonContact = styled.a`
display: flex;
justify-content: center;
align-items: center;
margin-top:24px;
width: 100%;
height: 55px;
background: linear-gradient(90deg, #777CF4 2.62%, #F47777 93.38%);
border-radius: 24px;
border: none;
gap:21px;
transition: all 0.4s ease-in-out;

&:hover{
 background: linear-gradient(90deg, #F47777 2.62%, #777CF4 93.38%);
}


span{
 font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
text-align: right;
color: #FFFFFF;



}

   @media (min-width:768px){
    width: 321px;
}
`
