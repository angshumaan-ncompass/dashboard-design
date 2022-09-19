import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      dark: "#bebebe26",
      light: "#ffffffa8",
    },
    secondary: {
      main: "#413e3e78",
      dark: "#bebebe3d",
    },
  },
  typography: {
    allVariants: {
      fontFamily: `"Roboto", sans-serif`,
    },
  },
});
