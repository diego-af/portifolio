import styled from 'styled-components'





export const ContainerProfile = styled.div`
 display: flex;
 flex-direction: column;
 padding-top: 75px;

`
export const Languages= styled.div`
display: flex;
flex-direction: row;
gap:16px;
align-items: center;

span{
 font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 36px;

color: #B3B3B3;
}

`
export const Education = styled.div`

 span{
 font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 36px;

color: #B3B3B3;
}

`
export const TitleLanguages = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 27px;
text-align: left;

color: #FFFFFF;
margin-bottom: 29px;


`
export const TitleEducation = styled(TitleLanguages)`
margin-top: 29px;

`
