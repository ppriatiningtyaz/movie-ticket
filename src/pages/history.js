import { Link } from "react-router-dom";
import CardHistory from "../components/CardHistory";

export default function History({ data, movieId, seat }) {
  const filterData = data?.filter((e) => {
    return e.id === movieId;
  });

  return (
    <div className="relative">
      <div className="absolute top-4 left-4">
        <Link to={`/movie/${movieId}/select-seat`}>Kembali</Link>
      </div>
      <h1 className="py-5 text-2xl font-bold">History</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {filterData?.map((item, i) => (
          <CardHistory
            key={i}
            poster={item.poster}
            title={item.title}
            seat={seat}
          />
        ))}
      </div>
    </div>
  );
}
