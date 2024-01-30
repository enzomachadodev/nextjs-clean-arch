import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --primary: #E40F0F;
  --white: #ffffff;
  --gray-0: #F5F5F5;
  --gray-1: #EEEEEE;
  --gray-2: #D5D5D5;
  --gray-3: #747474;
  --gray-4: #474747;
  --gray-5: #1D1D1D;
  --black: #000000;

  --text-xs: 0.5rem;
  --text-sm: 0.75rem;
  --text-md: 0.875rem;
  --text-lg: 1rem;
  --text-xl: 1.125rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;

  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}
`;

