import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [, setData] = useState();
  const getData = async () => {
    try {
      const res = await axios.get(
        "http://www.omdbapi.com/?i=tt3896198&apikey=a43912af"
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={
              <div className="flex h-screen w-screen flex-col items-center justify-center gap-5 ">
                <p>Movie List</p>
                <Link to={"/movie-detail"}>Movie Detail</Link>
                <Link to={"/select-seat"}>Select Seat</Link>
                <Link to={"/history"}>History</Link>
              </div>
            }
          />
          <Route
            path={"/movie-detail"}
            element={
              <div className="relative flex h-screen w-screen items-center justify-center">
                <div className="absolute top-4 left-4">
                  <Link to={"/"}>Kembali</Link>
                </div>
                <p>Movie Detail</p>
              </div>
            }
          />
          <Route
            path={"/select-seat"}
            element={
              <div className="relative flex h-screen w-screen items-center justify-center">
                <div className="absolute top-4 left-4">
                  <Link to={"/movie-detail"}>Kembali</Link>
                </div>
                <p>Select Seat</p>
              </div>
            }
          />
          <Route
            path={"/history"}
            element={
              <div className="relative flex h-screen w-screen items-center justify-center">
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
