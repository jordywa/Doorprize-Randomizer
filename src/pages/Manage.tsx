import { useEffect, useState } from "react";
import "../index.css";
import { ThreeDot } from "react-loading-indicators";

const Manage = () => {
  const [currNumber, setCurrNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCurrNumber = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/last-row`);

      if (!response.ok) {
        throw new Error("Response error");
      }

      const data = await response.json();
      setCurrNumber(data[0]);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCurrNumber();
  }, []);

  const addNumber = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/increase`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      setCurrNumber(Number(currNumber) + 1);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const decreaseNumber = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/decrease`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      setCurrNumber(Number(currNumber) + 1);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-items-center p-10 h-full">
      {isLoading && (
        <ThreeDot
          variant="bounce"
          color="#31b7cc"
          size="medium"
          text="Sabar Ya"
          textColor=""
        />
      )}
      {!isLoading && (
        <div>
          <button
            onClick={addNumber}
            className="my-4 bg-sky-500 px-4 py-2 rounded-lg hover:bg-sky-600 text-white w-full"
          >
            +
          </button>
          <div className="flex flex-row space-x-4 p-4 bg-gray-800 rounded-lg w-fit">
            <div className="text-6xl font-bold text-white w-fit text-center">
              {String(currNumber).padStart(3, "0")}
            </div>
          </div>
          <button
            onClick={decreaseNumber}
            disabled={currNumber <= 0}
            className="my-4 bg-red-400 px-4 py-2 rounded-lg hover:bg-red-500 text-white w-full"
          >
            -
          </button>
        </div>
      )}
    </div>
  );
};

export default Manage;
