import styled from "styled-components";

export const ContainerArticle = styled.div`
display: flex;
background: #232323;
width: auto;
height: 5.625rem;
border-radius: 0.625rem;
margin-bottom: 0.5rem;

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
margin-left: 1.375rem;

 h1 {
    font-family: Plus Jakarta Sans;
    font-size: 0.938rem;
    font-weight: 700;
    line-height: 1.188rem;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
 }

  p {
    font-family: Plus Jakarta Sans;
    font-size: 0.688rem;
    font-weight: 500;
    line-height: 0.875;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
  }
`