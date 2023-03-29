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
      <div className="w-full lg:w-1/2">
        <p className="">
          {title}, {runtime}
        </p>
        <p className="">Writer : {writer}</p>
        <p className="">
          Release : {country}, {year}
        </p>
        <p className="">Genre : {genre}</p>
        <p className="">Plot : {plot}</p>
        <p className="">imdb Rating : {rating}</p>
      </div>
    </div>
  );
}
