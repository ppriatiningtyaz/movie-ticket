import CardDetail from "../components/CardDetail";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function MovieDetail({ data }) {
  const { id } = useParams();

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center py-5">
      <div className="absolute top-4 left-4">
        <Link to={"/"}>Kembali</Link>
      </div>
      <div className="pt-8">
        {data && data.length
          ? data
              .filter((e) => e.id === parseInt(id))
              .map((item, i) => (
                <CardDetail
                  key={i}
                  poster={item.poster}
                  title={item.title}
                  runtime={item.runtime}
                  writer={item.writer}
                  country={item.country}
                  year={item.year}
                  genre={item.genre}
                  plot={item.plot}
                  rating={item.rating}
                  id={item.id}
                />
              ))
          : null}
      </div>
      <div className="flex w-full items-center justify-center">
        <a
          href={`/movie/${id}/select-seat`}
          className="w-1/2 rounded-lg bg-purple-600 py-2 font-sans font-semibold text-white hover:opacity-90"
        >
          <button>Book</button>
        </a>
      </div>
    </div>
  );
}
