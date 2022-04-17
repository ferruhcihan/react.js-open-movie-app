import { Typography } from "@mui/material";
import { BiError } from "react-icons/bi";
import { Wrapper } from "./styles";
import { useAppSelector } from "../../redux/store";

const Error = () => {
  const { error } = useAppSelector((state) => state.movies);

  return (
    <Wrapper>
      <BiError size="60%" />
      <Typography>{error}</Typography>
    </Wrapper>
  );
};

export default Error;
