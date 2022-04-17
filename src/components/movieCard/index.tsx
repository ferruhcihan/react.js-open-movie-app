import { Wrapper, CardHeader, CardTag } from "./styles";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DEFAULT_IMAGE } from "../../constants";

export interface Movie {
  Title: string;
  Poster: string;
  Year: string;
  imdbID: string;
  Type: string;
}

interface IMovieCard {
  movie: Movie;
}

const MovieCard = ({ movie }: IMovieCard) => {
  const navigate = useNavigate();
  const { Title, Poster, Year, imdbID, Type } = movie;

  const boxColor = (Type: string) => {
    if (Type === "movie") return "#D6582F";
    if (Type === "series") return "#EC407A";
    if (Type === "episode") return "#A92FD6";
    return "#000";
  };

  return (
    <Wrapper onClick={() => navigate(`/details/${imdbID}`)}>
      <img
        src={Poster.includes("https") ? Poster : DEFAULT_IMAGE}
        alt="poster"
      />
      <Box>
        <CardHeader>
          <CardTag bgcolor="#F5A536">{Year}</CardTag>
          <CardTag bgcolor={boxColor(Type)}>{Type}</CardTag>
          <CardTag bgcolor="#3621FF">{imdbID}</CardTag>
        </CardHeader>
        <Typography sx={{ fontSize: "2rem" }}>{Title}</Typography>
      </Box>
    </Wrapper>
  );
};

export default MovieCard;
