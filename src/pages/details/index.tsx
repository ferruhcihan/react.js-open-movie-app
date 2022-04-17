import { useEffect } from "react";
import Header from "../../components/header";
import { useParams } from "react-router-dom";
import { Wrapper, ContentWrapper, ContentItem } from "./styles";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchMovieDetails } from "../../redux/features/movieSlice";
import { Box, Typography } from "@mui/material";
import { DEFAULT_IMAGE } from "../../constants";

const Details = () => {
  const { imdbID } = useParams();
  const dispatch = useAppDispatch();
  const { detailsData } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(
      fetchMovieDetails({
        imdbID,
      })
    );
  }, [imdbID]);

  return (
    <Box sx={{ height: "70%" }}>
      <Header />
      {detailsData !== null && (
        <Wrapper>
          <img
            src={
              detailsData?.Poster.includes("https")
                ? detailsData?.Poster
                : DEFAULT_IMAGE
            }
            alt="detail-poster"
          />
          <ContentWrapper>
            <ContentItem>
              <Typography variant="title">{detailsData?.Title}</Typography>
              <Typography variant="title2">
                {detailsData?.Year} • {detailsData?.Runtime}
              </Typography>
            </ContentItem>
            <ContentItem>
              <Typography variant="title3">Genre:</Typography>
              <Typography variant="paragraph">{detailsData?.Genre}</Typography>
            </ContentItem>
            <ContentItem>
              <Typography variant="title3">Director:</Typography>
              <Typography variant="paragraph">
                {detailsData?.Director}
              </Typography>
            </ContentItem>
            <ContentItem>
              <Typography variant="title3">Actors:</Typography>
              <Typography variant="paragraph">{detailsData?.Actors}</Typography>
            </ContentItem>
            <ContentItem>
              <Typography variant="title3">imdb Rating:</Typography>
              <Typography variant="paragraph">
                {detailsData?.imdbRating}
              </Typography>
            </ContentItem>
            <ContentItem>
              <Typography variant="title3">Plot:</Typography>
              <Typography variant="paragraph">{detailsData?.Plot}</Typography>
            </ContentItem>
          </ContentWrapper>
        </Wrapper>
      )}
    </Box>
  );
};

export default Details;
