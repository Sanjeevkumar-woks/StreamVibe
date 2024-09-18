const PlanCard = ({ iconClass, planName, price, duration, description }) => {
  return (
    <div className="flex flex-col justify-center items-center w-[80%] py-4 text-center bg-gradient-to-r from-black to-red-950 p-2 rounded-md shadow-md hover:shadow-white">
      <div className="flex justify-center items-center gap-2">
        <i className={`${iconClass} text-red-600 text-3xl`}></i>

        <p className="text-xl font-semibold text-white">{planName}</p>
      </div>

      <p className="text-gray-500 text-sm p-4">{description}</p>
      <div>
        <p className="text-white text-lg p-4 font-semibold">
          {price}/{duration}
        </p>
      </div>
      <div className="flex gap-4 justify-around items-center">
        <button className="text-white text-sm hover:bg-red-700  rounded-md px-4 py-2 ">
          Start Free Trial
        </button>
        <button className="text-white text-sm  bg-red-600 rounded-md px-4 py-2">
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
