import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [displayNumbers, setDisplayNumbers] = useState(["0", "0", "0"]); // Initial display
  const [isRolling, setIsRolling] = useState(false);
  const [listNumber, setListNumber] = useState<string[]>([]);

  const fetchListNumber = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/unused`);

      if (!response.ok) {
        throw new Error("Response error");
      }

      const data: [number, boolean][] = await response.json();
      const list = data.map(([number]) => String(number).padStart(3, "0"));
      setListNumber(list);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchListNumber();
  }, []);

  // Function to generate a random digit (0-9)
  const getRandomNumbers = () =>
    listNumber[Math.floor(Math.random() * listNumber.length)];

  const getRandomDigits = () => String(Math.floor(Math.random() * 10));

  // Function to animate each digit one by one
  const startRolling = () => {
    setIsRolling(true);
    setDisplayNumbers(["0", "0", "0"]);
    // console.log(listNumber);
    let randomNumber = getRandomNumbers();
    // console.log(randomNumber);
    let newNumbers = [randomNumber[0], randomNumber[1], randomNumber[2]];
    // console.log(newNumbers);

    // // Animate each digit one after another
    newNumbers.forEach((digit, index) => {
      setTimeout(() => {
        let counter = 0;
        const interval = setInterval(() => {
          setDisplayNumbers((prev) => {
            const updated = [...prev];
            updated[index] = getRandomDigits();
            return updated;
          });
          counter++;
          if (counter >= 20 - index * 5) {
            // Each digit stops with a delay
            clearInterval(interval);
            setDisplayNumbers((prev) => {
              const updated = [...prev];
              updated[index] = digit; // Set to final target number
              return updated;
            });

            // Stop rolling animation when last digit stops
            if (index === 2) {
              setTimeout(() => setIsRolling(false), 500);
            }
          }
        }, 100);
      }, index * 1000); // Delay each digit animation
    });
  };

  return (
    <div className="flex flex-col items-center justify-items-center p-10 h-full">
      <div className="flex flex-row space-x-4 p-4 bg-gray-800 rounded-lg">
        {displayNumbers.map((num, i) => (
          <motion.div
            key={i}
            className="text-6xl font-bold text-white w-16 text-center"
            transition={{ duration: 0.5 }}
          >
            {num}
          </motion.div>
        ))}
      </div>
      <button
        onClick={startRolling}
        disabled={isRolling}
        className="mt-4 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 text-white"
      >
        Start Rolling
      </button>
    </div>
  );
}

export default App;
