import styled from "styled-components";

export const ContainerProgress = styled.div`
display: flex;
flex-direction: column;
padding: 1.875rem;

margin-left: 1rem;
border-radius: 10px;
background: #232323;

height: fit-content;
width: 310px;
`

export const ContainerTitle = styled.div`
display: flex;
justify-content: space-between;


margin-bottom: 24px;
border-bottom: 1px solid #606060;

h3 {
font-family: Plus Jakarta Sans;
font-size: 18px;
font-weight: 700;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
color: #fff;

margin-bottom: 1rem;

}

span {
font-family: Plus Jakarta Sans;
font-size: 29px;
font-weight: 700;
line-height: 36px;
letter-spacing: 0em;
text-align: right;
color: #26c666;

}

`

export const ContainerSteps = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 margin-bottom: 22px;
 div {
    display: flex;
    justify-content: space-between;
    align-items: center;
 }

 h3 {
font-family: Plus Jakarta Sans;
font-size: 18px;
font-weight: 700;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
color: #fff;
 }

 p {
font-family: Plus Jakarta Sans;
font-size: 11px;
font-weight: 700;
line-height: 14px;
letter-spacing: 0em;
text-align: right;
color: #fff;
 }
`

export const ProgressBar = styled.div<{ porc: string }>`
  width: ${({ porc }) => porc};
  height: 4px;
  border-radius: 20px;
  background-color: #26C666;
`;

export const ContainerProgressBar = styled.div`
width: 100%;
background: #606060;
border-radius: 20px;
margin-top: 13px;

&:hover {
  opacity: 0.7;
}
`