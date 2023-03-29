import CardMovie from "../components/CardMovie";
import { Link } from "react-router-dom";

export default function Movie({ data }) {
  return (
    <div className="mx-auto flex h-full w-full max-w-[1280px] flex-col justify-center px-3 lg:px-0">
      <h1 className="py-5 text-2xl font-bold">Movie List</h1>
      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-5 lg:gap-5">
        {data?.map((item, i) => (
          <CardMovie
            key={i}
            id={item.id}
            poster={item.poster}
            title={item.title}
          />
        ))}
      </ul>
      <div className="flex w-full items-center justify-center p-3">
        <button className="w-1/2 rounded-lg bg-purple-600 py-2 font-sans font-semibold text-white hover:opacity-90">
          <Link to={"/history"}>History</Link>
        </button>
      </div>
    </div>
  );
}
