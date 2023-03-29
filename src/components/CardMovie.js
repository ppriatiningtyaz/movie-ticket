import { Link } from "react-router-dom";

export default function CardMovie({ poster, title, id }) {
  return (
    <Link to={`/movie/${id}`}>
      <li className="flex w-full flex-col items-center gap-5 rounded-lg border p-2 lg:p-5">
        <img src={poster} alt={title} title={title} className="rounded-md" />
        <p className="">{title}</p>
      </li>
    </Link>
  );
}
