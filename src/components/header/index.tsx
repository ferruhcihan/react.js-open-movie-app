import { Typography, useTheme } from "@mui/material";
import Search from "../search";
import { RiMovie2Line } from "react-icons/ri";
import { Wrapper, LogoWrapper } from "./styles";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <LogoWrapper onClick={() => navigate("/")}>
        <RiMovie2Line
          className="icon"
          size="3rem"
          color={theme.secondaryBgColor}
        />
        <Typography variant="headerLogo">Open Movie</Typography>
      </LogoWrapper>
      {pathname === "/" && <Search />}
    </Wrapper>
  );
};

export default Header;
