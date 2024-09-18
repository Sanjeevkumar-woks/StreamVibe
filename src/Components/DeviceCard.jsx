const DeviceCard = ({ iconClass, deviceName, description }) => {
  return (
    <div className="flex flex-col justify-center items-center w-[80%] text-center bg-gradient-to-r from-black to-red-950 p-4 rounded-md shadow-md hover:shadow-white">
      <div className="flex items-center gap-4 mb-2">
        <i className={`${iconClass} text-red-600 text-3xl`}></i>
        <p className="text-xl font-semibold text-white">{deviceName}</p>
      </div>
      <p className="text-gray-500 text-sm p-4">{description}</p>
    </div>
  );
};

export default DeviceCard;
