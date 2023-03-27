import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Movie from "./pages/movie";
import MovieDetail from "./pages/movie-detail";

function App() {
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const res = await axios.get(
        "http://www.omdbapi.com/?i=tt3896198&apikey=a43912af"
      );
      setData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Movie data={data} />} />
          <Route
            path={"/movie/:detail"}
            element={<MovieDetail data={data} />}
          />
          <Route
            path={"/select-seat"}
            element={
              <div className="relative flex h-full w-full items-center justify-center">
                <div className="absolute top-4 left-4">
                  <Link to={`/movie/${data?.Title}`}>Kembali</Link>
                </div>
                <p>Select Seat</p>
              </div>
            }
          />
          <Route
            path={"/history"}
            element={
              <div className="relative flex h-full w-full items-center justify-center">
                <div className="absolute top-4 left-4">
                  <Link to={"/"}>Kembali</Link>
                </div>
                <p>History</p>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
