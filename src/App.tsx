import Background from "./components/background";
import Home from "./pages/home";
import Details from "./pages/details";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Background>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:imdbID" element={<Details />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </Background>
  );
}

export default App;
