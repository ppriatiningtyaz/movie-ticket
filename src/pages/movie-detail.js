import CardDetail from "../components/CardDetail";
import { Link } from "react-router-dom";

export default function MovieDetail({ data }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <div className="absolute top-4 left-4">
        <Link to={"/"}>Kembali</Link>
      </div>
      <div className="pt-8">
        <CardDetail
          poster={data?.Poster}
          title={data?.Title}
          runtime={data?.Runtime}
          writer={data?.Writer}
          country={data?.Country}
          year={data?.Year}
          genre={data?.Genre}
          plot={data?.Plot}
          rating={data?.imdbRating}
        />
      </div>
    </div>
  );
}
