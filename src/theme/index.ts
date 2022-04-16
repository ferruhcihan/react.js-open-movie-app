import { createTheme, ThemeOptions } from "@mui/material";

interface ITheme {
  primaryBgColor: string;
  white: string;
}

interface ITypography {
  headerLogo: {};
  title: {};
}

declare module "@mui/material" {
  interface Theme extends ITheme {}
  interface ThemeOptions extends ITheme {}
  interface TypographyPropsVariantOverrides extends ITypography {}
}

export const AppColors: ITheme = {
  primaryBgColor: "#263238",
  white: "#FFF",
};

const commonTheme = {
  ...AppColors,

  typography: {
    fontFamily: "'Baloo Chettan 2'",
    headerLogo: {
      fontWeight: 900,
      fontSize: "3rem",
      lineHeight: "3.5rem",
      color: AppColors.white,
    },
    title: {
      fontWeight: 600,
      fontSize: "1.6rem",
      lineHeight: "2rem",
      color: AppColors.white,
    },
  },

  components: {
    MuiOutlinedInput: {
      styleOverrides: {},
    },
  },
} as ThemeOptions;

const theme = createTheme(commonTheme);

export default theme;
