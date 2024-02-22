import { createTheme } from "@mui/material/styles";
import { COLORS } from "./color";

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
  },
  breakpoints: {
    values: {
      sm: 576,
      md: 992,
      lg: 1300,
    },
  },
  typography: {
    fontFamily: ["Cairo"],
    h1: {
      color: "rgb(36, 36, 36)",
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "40px",
    },
    h2: {
      color: "rgb(17, 20, 45)",
      fontSize: "15.93px",
      fontWeight: 700,
      lineHeight: "19.11px",
      letterSpacing: "0%",
      textAlign: "left",
    },
    body1: {
      color: "rgb(170, 170, 170)",
      fontSize: "11.15px",
      fontWeight: 400,
      lineHeight: "15px",
      letterSpacing: "0%",
      textAlign: "left",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            color: COLORS.white,
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: "34px",
            borderRadius: "14px",
            padding: "7px 24px",
          },
        },
      ],
    },
  },
});
