import { Typography, useTheme } from "@mui/material";
import { RiMovie2Line } from "react-icons/ri";
import { Wrapper } from "./styles";

const Header = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <RiMovie2Line className="icon" size="3rem" color={theme.white} />
      <Typography variant="headerLogo">Open Movie</Typography>
    </Wrapper>
  );
};

export default Header;
