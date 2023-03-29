export default function CardHistory({ poster, title, seat }) {
  return (
    <div className="flex w-full gap-2 p-3">
      <img src={poster} alt={title} className="max-h-[40%]" />
      <div className="flex flex-col gap-2 text-start">
        <p>Title : {title}</p>
        <p>Seat : {seat}</p>
      </div>
    </div>
  );
}
