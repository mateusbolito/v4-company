import { styled } from "styled-components";

export const ConteudoU = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

export const SectionsContent = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 145px;
height: 175px;
border-radius: 10px;
background-color: #232323;
cursor: pointer;

&:hover {
border: 1px solid #ccc;
opacity: 0.7;
}


> div {
display: flex;
align-items: center;
justify-content: center;

img {
width: 27px;
height: 24px;
margin-right: -64px;
margin-top: -90px;

}
}


span {
    font-family: Plus Jakarta Sans;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
}


`
export const MidleText = styled.div`
margin-top: 32px;
margin-left: 20px;

p {
font-family: Plus Jakarta Sans;
font-size: 11px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
width: 80%;
margin-top: 7px;
}
`

export const TitleArticle = styled.h1`
font-family: Plus Jakarta Sans;
font-size: 21px;
font-weight: 700;
line-height: 26px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 1rem;
margin-top: 1.6rem;

color: #fff;
`