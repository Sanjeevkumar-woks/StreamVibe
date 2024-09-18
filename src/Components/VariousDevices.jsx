import { devices } from "../utility/Devices";
import DeviceCard from "./DeviceCard";

const VariousDevices = () => {
  return (
    <div className="p-4 text-center">
      {/* Heading Section */}
      <div className="p-4 flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          We Provide you streaming experience on various{" "}
          <span className="text-red-500">Devices</span>
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-gray-400 mb-6 w-full sm:w-3/4 lg:w-1/2">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
      </div>

      {/* Device Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-10 lg:px-20  justify-items-center">
        {devices.map((device) => (
          <DeviceCard
            key={device.id}
            iconClass={device.iconClass}
            deviceName={device.deviceName}
            description={device.description}
          />
        ))}
      </div>
    </div>
  );
};

export default VariousDevices;
