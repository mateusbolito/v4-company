import styled from "styled-components";

export const ContainerProgress = styled.div`
display: flex;
flex-direction: column;
padding: 1.875rem;

margin-left: 1rem;
border-radius: 0.625rem;
background: #232323;

height: fit-content;
width: 19.375rem;
`

export const ContainerTitle = styled.div`
display: flex;
justify-content: space-between;


margin-bottom: 1.5rem;
border-bottom: 1px solid #606060;

h3 {
font-family: Plus Jakarta Sans;
font-size: 1.125rem;
font-weight: 700;
line-height: 1.438rem;
letter-spacing: 0em;
text-align: left;
color: #fff;

margin-bottom: 1rem;

}

span {
font-family: Plus Jakarta Sans;
font-size: 1.813rem;
font-weight: 700;
line-height: 2.25rem;
letter-spacing: 0em;
text-align: right;
color: #26c666;

}

`

export const ContainerSteps = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 margin-bottom: 1.375rem;
 div {
    display: flex;
    justify-content: space-between;
    align-items: center;
 }

 h3 {
font-family: Plus Jakarta Sans;
font-size: 1.125rem;
font-weight: 700;
line-height: 1.438rem;
letter-spacing: 0em;
text-align: left;
color: #fff;
 }

 p {
font-family: Plus Jakarta Sans;
font-size: 0.688rem;
font-weight: 700;
line-height: 0.875rem;
letter-spacing: 0em;
text-align: right;
color: #fff;
 }
`

export const ProgressBar = styled.div<{ porc: string }>`
  width: ${({ porc }) => porc};
  height: 4px;
  border-radius: 1.25rem;
  background-color: #26C666;
`;

export const ContainerProgressBar = styled.div`
width: 100%;
background: #606060;
border-radius: 1.25rem;
margin-top: 0.813rem;

&:hover {
  opacity: 0.7;
}
`