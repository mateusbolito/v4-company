import { styled } from "styled-components";

export const BodyContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
margin-left: 250px;



> div {
display: flex;
align-items: center;
justify-content: center;
position: relative;

img {

width: 590px;
height: 132px;
margin-top: 50px;
border-radius: 10px;
margin-left: 100px;
display: flex;
align-items: center;
justify-content: center;
}

h2 {
position: absolute;
font-size: 12px;
left: 150px;
top: 100px;
color: #26C666;
width: 126px;
height: 17px;
font-family: 'Plus Jakarta sans';

}
h1 {
width: 150px;
height: 35px;
position: absolute;
font-size: 27px;
left: 150px;
top: 120px;
color: #fff;

}
}

`
export const PlanosContainer = styled.div`
width: 588px;
height: 100%;
> div {
width: 100px;

h1 {
width: 325px;
height: 25px;
margin-top: 100px;
margin-left: -50px;
}
}

`
