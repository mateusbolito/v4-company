import { styled } from "styled-components";


 export const ContainerHeader = styled.div`
  width: 100%;
  height: 4.05rem;
  background-color: #131313;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2.5rem;
  margin-bottom: 20px;

  align-items: center;

  img {
    cursor: pointer;
}

 > div {
    display: flex;
    align-items: center;
    gap: 12px;
 
span {
background: #373737;
border-radius: 50%;
cursor: pointer;

width: 1.875rem;
height: 1.875rem;
display: flex;
align-items: center;
justify-content: center;

&:hover {
    opacity: 0.7;
}

svg {
color: #26C666;
} 
 }
}

 `
export const GrennColor = styled.div`
background-color: #26C666;
border-radius: 50%;

width: 2.5rem;
height: 2.5rem;
`