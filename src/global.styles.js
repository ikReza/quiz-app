import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  font-family: "Turret Road", cursive;
  padding: 20px 40px;
  background-color: #166d3b;
  height: 100vh;
  background-image: linear-gradient(147deg, #166d3b 0%, #000000 80%);
}

a {
  text-decoration: none;
}

* {
  box-sizing: border-box;
  margin: 0;
}
`;
