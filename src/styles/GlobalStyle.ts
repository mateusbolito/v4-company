import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
outline: none;
font-family: 'Plus Jakarta Sans', sans-serif;
text-decoration: none;
list-style: none;
 
} 

button {
cursor: pointer;
-webkit-font-smoothing: antialiased;
}
 a {
text-decoration: none;
}

body {
background-color: #1A1A1A;
 }
 p {
font-family: 'Plus Jakarta Sans', sans-serif;
 }
`