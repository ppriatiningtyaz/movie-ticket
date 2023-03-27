import { Link } from "react-router-dom";

export default function CardDetail({
  poster,
  title,
  runtime,
  writer,
  country,
  year,
  genre,
  plot,
  rating,
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 p-3">
      <div>
        <img
          src={poster}
          alt={title}
          title={title}
          className="h-max-[50%] rounded-lg border-2"
        />
      </div>
      <p className="">
        {title}, {runtime}
      </p>
      <p className="">{writer}</p>
      <p className="">
        {country}, {year}
      </p>
      <p className="">{genre}</p>
      <p className="">{plot}</p>
      <p className="">imdb Rating : {rating}</p>
      <div className="flex w-full items-center justify-center">
        <button className="w-1/2 rounded-lg bg-purple-600 py-2 font-sans font-semibold text-white hover:opacity-90">
          <Link to={"/select-seat"}>Book</Link>
        </button>
      </div>
    </div>
  );
}
