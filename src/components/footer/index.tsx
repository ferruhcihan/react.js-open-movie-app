import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { Wrapper, PageNumberBox } from "./styles";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { incrementPage, decrementPage } from "../../redux/features/movieSlice";
import { useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.movies);

  return (
    <Wrapper>
      <BsArrowLeftCircle
        className="icon"
        color={theme.secondaryBgColor}
        size="2rem"
        onClick={() => {
          page > 1 && dispatch(decrementPage());
        }}
      />
      <PageNumberBox>{page}</PageNumberBox>
      <BsArrowRightCircle
        className="icon"
        color={theme.secondaryBgColor}
        size="2rem"
        onClick={() => {
          page < 10 && dispatch(incrementPage());
        }}
      />
    </Wrapper>
  );
};

export default Footer;
