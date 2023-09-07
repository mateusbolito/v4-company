import { styled } from "styled-components";

export const ConteudoU = styled.div`
display: flex;
align-items: center;
gap: 0.625rem;
`

export const SectionsContent = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 9.063rem;
height: 10.938rem;
border-radius: 0.625rem;
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
width: 1.688rem;
height: 1.5rem;
margin-right: -64px;
margin-top: -90px;

}
}


span {
    font-family: Plus Jakarta Sans;
    font-size: 1.125rem;
    line-height: 1.438rem;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
}


`
export const MidleText = styled.div`
margin-top: 2rem;
margin-left: 1.25rem;

p {
font-family: Plus Jakarta Sans;
font-size: 0.688rem;
font-weight: 400;
line-height: 0.875rem;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
width: 80%;
margin-top: 7px;
}
`

export const TitleArticle = styled.h1`
font-family: Plus Jakarta Sans;
font-size: 1.313rem;
font-weight: 700;
line-height: 1.625rem;
letter-spacing: 0em;
text-align: left;
margin-bottom: 1rem;
margin-top: 1.6rem;

color: #fff;
`