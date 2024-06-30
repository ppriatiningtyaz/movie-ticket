import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const seatingChart = [
  ["A1", "A2", "A3", "A4", "A5"],
  ["B1", "B2", "B3", "B4", "B5"],
  ["C1", "C2", "C3", "C4", "C5"],
];

const listSeat = [1, 2, 3, 4, 5];

export default function SelectSeat({ dataStore, setDataStore }) {
  const location = useNavigate();
  const { detail } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [maxSeat, setMaxSeat] = useState(0);

  const handleSeatSelection = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const submit = (i) => {
    location("/history");
    setDataStore((prev) =>
      prev.map((item, index) => {
        if (i === index)
          return { ...item, movieId: detail, selectedSeats: selectedSeats };
        return item;
      })
    );
  };

  return (
    <div className="relative flex w-full justify-center">
      <div className="absolute top-4 left-4">
        <Link to={"/"}>Kembali</Link>
      </div>
      <div className="mx-auto mt-8 max-w-[1280px]">
        <h1 className="py-5 text-2xl font-bold">Select your seats</h1>
        <div className="flex h-[5rem] w-full items-center justify-center border-2">
          screen
        </div>
        <p className="mb-4 text-gray-700">
          You have selected {selectedSeats.length} seats
        </p>
        {dataStore.map((item, i) => (
          <>
            <div className="mb-8 grid grid-cols-1 gap-5">
              {seatingChart.map((row, index) => (
                <div key={index} className="flex gap-5">
                  {row.map((seat) => (
                    <button
                      key={seat}
                      onClick={() => handleSeatSelection(seat)}
                      className={`bg-${
                        selectedSeats.includes(seat) ? "blue" : "gray"
                      }-500 rounded py-2 px-4 font-bold ${
                        selectedSeats.includes(seat)
                          ? "ring-2 ring-blue-500"
                          : "hover:ring-2 hover:ring-blue-500 focus:outline-none"
                      }`}
                    >
                      {seat}
                    </button>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex gap-5">
              <select onChange={(e) => setMaxSeat(parseInt(e.target.value))}>
                {listSeat.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <button
                disabled={selectedSeats.length !== maxSeat}
                className={`rounded bg-blue-500 py-2 px-4 font-bold text-white ${
                  selectedSeats.length !== maxSeat
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-blue-700 focus:outline-none"
                }`}
                onClick={() => submit(i)}
              >
                Continue to Checkout
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
