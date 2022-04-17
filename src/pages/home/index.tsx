import { Wrapper, MovieWrapper } from "./styles";
import MovieCard, { Movie } from "../../components/movieCard";
import Spinner from "../../components/spinner";
import Error from "../../components/error";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useAppSelector } from "../../redux/store";

const Home = () => {
  const { data, loading, error } = useAppSelector((state) => state.movies);

  return (
    <Wrapper>
      <Header />
      <MovieWrapper>
        {loading ? (
          <Spinner />
        ) : data ? (
          data?.map((movie: Movie, index: number) => (
            <MovieCard key={index} movie={movie} />
          ))
        ) : (
          error && <Error />
        )}
      </MovieWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Home;
