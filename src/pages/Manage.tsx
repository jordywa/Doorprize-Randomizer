import "../index.css";

const Manage = () => {
  return (
    <div className="flex flex-col items-center justify-items-center p-10 h-full">
      <div className="flex flex-row space-x-4 p-4 bg-gray-800 rounded-lg w-fit">
        <div className="text-6xl font-bold text-white w-fit text-center">
          {String(1).padStart(3, "0")}
        </div>
      </div>
    </div>
  );
};

export default Manage;
