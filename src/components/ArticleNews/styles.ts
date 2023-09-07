import styled from "styled-components";

export const ContainerArticle = styled.div`
display: flex;
background: #232323;
width: auto;
height: 90px;
border-radius: 10px;
margin-bottom: 8px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

export const ContentNews = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 10px;
margin-left: 22px;

 h1 {
    font-family: Plus Jakarta Sans;
    font-size: 15px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
 }

  p {
    font-family: Plus Jakarta Sans;
    font-size: 11px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
  }
`