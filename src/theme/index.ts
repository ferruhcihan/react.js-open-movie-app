import { createTheme, ThemeOptions } from "@mui/material";

interface ITheme {
  primaryBgColor: string;
  secondaryBgColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
}

interface ITypography {
  headerLogo: {};
  title: {};
  title2: {};
  title3: {};
  paragraph: {};
}

declare module "@mui/material" {
  interface Theme extends ITheme {}
  interface ThemeOptions extends ITheme {}
  interface TypographyPropsVariantOverrides extends ITypography {}
}

export const AppColors: ITheme = {
  primaryBgColor: "#000",
  secondaryBgColor: "#f5f5f5",
  primaryTextColor: "#212121",
  secondaryTextColor: "#424242",
};

const commonTheme = {
  ...AppColors,

  typography: {
    fontFamily: "Poppins",
    headerLogo: {
      fontWeight: "bold",
      fontSize: "3rem",
      lineHeight: "3.5rem",
      color: AppColors.secondaryBgColor,
    },
    title: {
      fontWeight: "bold",
      fontSize: "2rem",
      lineHeight: "2.5rem",
      color: AppColors.primaryTextColor,
    },
    title2: {
      fontWeight: "regular",
      fontSize: "1rem",
      lineHeight: "1.2rem",
      color: AppColors.secondaryTextColor,
    },
    title3: {
      fontWeight: "semibold",
      fontSize: "1.5rem",
      lineHeight: "1.7rem",
      color: AppColors.primaryTextColor,
    },
    paragraph: {
      fontWeight: "regular",
      fontSize: "1.3rem",
      lineHeight: "1.5rem",
      color: AppColors.secondaryTextColor,
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
