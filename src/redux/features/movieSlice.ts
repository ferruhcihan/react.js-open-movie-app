import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk(
  "fetchMovies",
  async ({ searchTerm, type, year, page }: fetchMoviesParams) => {
    const { REACT_APP_API_KEY } = process.env;
    let url = `https://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&s=${searchTerm}&page=${page}`;
    if (type !== "all") url += `&type=${type}`;
    if (year?.length === 4) url += `&y=${year}`;
    const response = await axios.get<Movies>(url);
    return response.data.Search;
  }
);

export const fetchMovieDetails = createAsyncThunk(
  "fetchMovieDetails",
  async ({ imdbID }: fetchMovieDetailsParams) => {
    const { REACT_APP_API_KEY } = process.env;
    const response = await axios.get<MovieDetails>(
      `https://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&i=${imdbID}`
    );
    return response.data;
  }
);

const initialState: MovieState = {
  data: null,
  detailsData: undefined,
  loading: false,
  error: "",
  page: 1,
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    decrementPage: (state) => {
      state.page -= 1;
    },
    resetPage: (state) => {
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      fetchMovies.fulfilled,
      (state, action: PayloadAction<Movie[]>) => {
        state.data = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error fetching movie data!";
    });

    builder.addCase(fetchMovieDetails.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      fetchMovieDetails.fulfilled,
      (state, action: PayloadAction<MovieDetails>) => {
        state.detailsData = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchMovieDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error fetching movie data!";
    });
  },
});

export const { incrementPage, decrementPage, resetPage } = movieSlice.actions;

export default movieSlice.reducer;

export interface MovieState {
  data: Movie[] | null;
  detailsData: MovieDetails | undefined;
  loading: boolean;
  error: string;
  page: number;
}

export interface Movies {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface Rating {
  Source: string;
  Value: string;
}

export interface fetchMoviesParams {
  searchTerm?: string;
  type?: string;
  year?: string;
  page?: number;
}

export interface fetchMovieDetailsParams {
  imdbID?: string;
}
