import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./pages/movie";
import MovieDetail from "./pages/movie-detail";
import SelectSeat from "./pages/select-seat";
import History from "./pages/history";

const historyData = {
  movieId: 0,
  selectedSeats: "",
};

function App() {
  const [tempData, setTempData] = useState();
  const [data, setData] = useState();
  const [dataStore, setDataStore] = useState([historyData]);

  const getData = async () => {
    try {
      const arr = [];
      const req = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=a43912af");
      const res = await req.json();
      for (let i = 0; i < 10; i++) {
        arr.push(res);
      }
      setTempData(arr);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (tempData?.length) {
      let datas = [];

      tempData?.forEach((item, i) => {
        let a = {
          id: i,
          poster: item?.Poster,
          title: item?.Title,
          runtime: item?.Runtime,
          writer: item?.Writer,
          country: item?.Country,
          year: item?.Year,
          genre: item?.Genre,
          plot: item?.Plot,
          rating: item?.imdbRating,
        };
        datas.push(a);
      });

      setData(datas);
    }
  }, [tempData]);

  const seat = dataStore[0].selectedSeats
  const movieId = dataStore[0].movieId

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Movie data={data} />} />
          <Route
            path={"/movie/:id"}
            element={<MovieDetail data={data} />}
          />
          <Route
            path={"/movie/:id/select-seat"}
            element={
              <SelectSeat dataStore={dataStore} setDataStore={setDataStore} />
            }
          />
          <Route
            path={"/history"}
            element={<History data={data} movieId={movieId} seat={seat}/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
