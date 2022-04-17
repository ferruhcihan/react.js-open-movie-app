import { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
} from "@mui/material";
import { BiSearchAlt } from "react-icons/bi";
import { Wrapper, FormWrapper } from "./styles";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchMovies, resetPage } from "../../redux/features/movieSlice";

const Search = () => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.movies);

  const [type, setType] = useState("all");
  const [year, setYear] = useState("");
  const [searchTerm, setSearchTerm] = useState("Pokemon");

  useEffect(() => {
    dispatch(
      fetchMovies({
        searchTerm,
        type,
        year,
        page,
      })
    );
  }, [type, year, page]);

  const handleSearch = () => {
    dispatch(resetPage());
    dispatch(
      fetchMovies({
        searchTerm,
        type,
        year,
      })
    );
  };

  return (
    <Wrapper>
      <FormWrapper>
        <FormControl variant="standard" sx={{ minWidth: 100 }}>
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="movie">Movie</MenuItem>
            <MenuItem value="series">Series</MenuItem>
            <MenuItem value="episode">Episode</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Year"
          variant="standard"
          value={year}
          sx={{ maxWidth: 100 }}
          onChange={(e) => setYear(e.target.value)}
        />

        <TextField
          label="Search"
          variant="standard"
          sx={{ minWidth: 400 }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            e.key === "Enter" && handleSearch();
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <BiSearchAlt
                  className="searchIcon"
                  size="2rem"
                  onClick={handleSearch}
                />
              </InputAdornment>
            ),
          }}
        />
      </FormWrapper>
    </Wrapper>
  );
};

export default Search;
