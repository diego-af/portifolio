import styled from 'styled-components'



export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction:column;
   margin-top:24px;
  text-align:center;


`
export const ExperienceDescription = styled.div`
  width: 100%;
  max-width: 300px;
  h3{
   
   font-style: normal;                   
   font-weight: 500;
   font-size: 18px;
   line-height: 27px;
   text-align: center;
   color: #FFFFFF;
   margin-bottom: 14px;

   @media (min-width:576px){
    text-align:center;
  }
  }


  p{
   font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
   opacity: 0.7;
  color: #FFFFFF;

   @media (min-width:768ppx){
    text-align:center;
  }

 
 
  }



`
export const ExperienceTime = styled.div`
display: flex;
flex-direction: column;
gap: 19px;
margin-top: 24px;

`
export const ExperienceTimeLife = styled.div`
width: 100%;
display: flex;
align-items: center;
gap:10px;




`

export const TimeAll = styled.div`
 width: 100%;
 max-width: 299px;
 height: 24px; 
border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.19);



  
.time-today {
 width: 130px;
 height: 24px;
 left: 89px;
 top: 749px;
 display: flex;
 justify-content: center;
align-items: center;
 background: linear-gradient(90deg, #777CF4 0%, #F47777 134.74%);
 border: 1px solid rgba(255, 255, 255, 0.19);
 border-radius: 24px;
 color: #FFFFFF;
 font-size: 12px;
 line-height: 18px;
 
}
.time-today.ts{
    width: 70px;
}



`
