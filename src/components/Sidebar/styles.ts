import { styled } from "styled-components";

export const ContainerSidebar =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 2rem;

    img {
    margin-bottom: 20px;
    width: 85px;
    height: 82px;
    border: 2px solid  #26C666;
    border-radius: 50%;
    cursor: pointer;
    }
`

export const PerfilSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 0.438rem;
margin-bottom: 1.313rem;
width: 170px;


span {
color: #fff;
font-family: 'Plus Jakarta Sans';
text-align: center;
font-weight: 500;
text-align: center;
}

p {
font-weight: 500;
height: 16px;
font-size: 12px;
color: #26C666;
}
h4 {
color: #fff;
font-weight: 700;
text-align: center;
}
`
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  color: var(--white) !important;

  div {
    width: 100%;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    background-color: var(--black);
    height: 100%;
  }
  svg {
    transition: display 0.2s ease-in-out;
    position: absolute;
    color: var(--white) !important;
    width: 2rem;
    height: 2rem;
    z-index: 5;
    opacity: 1 !important;
    display: none;
  }
`;
export const PerfilImage = styled.div`
${IconContainer}:hover {
    div {
      opacity: 0.4;
    }

    svg {
      display: flex;
      stroke: var(--white);
    }
  }
`

export const DescriptionPerfil = styled.div`
width: 100%;
height: 25px;
padding: 0.5rem 0.625rem;
border-radius: 19px;
color: #616060;
border: 1px solid #616060;
display: flex;
align-items: center;
cursor: pointer;
margin-bottom: 4px;

&:hover {
    opacity: 0.7;
}

span {
font-size: 10px;
line-height: 13px;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;


}

svg {
width: 15px;
color: #fff;

}


`