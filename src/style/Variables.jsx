import { createTheme } from "@mui/material";

export const themeOptions = createTheme({
  palette: {
    mode: 'light',
    warning: {
        contrastText: "#fff",
        main: '#FE6529',
    },
    danger: {
        contrastText: "#fff",
        main: '#BC002D',
    },
    grey: {
        main: "#D0D5DD",
    },
    success : {
        contrastText: "#fff",
        main: '#7CC248',
    }
  },
  typography: {
    fontFamily: 'Public Sans',
  },
});