import { devices } from "../utility/Devices";
import DeviceCard from "./DeviceCard";

const VariousDevices = () => {
  return (
    <div className="p-4 text-center">
      <div className="p-4 flex flex-col justify-center items-center gap-2">
        <h2 className="text-4xl font-semibold">
          We Provide you streaming experience on various{" "}
          <span className="text-red-500">Devices</span>
        </h2>
        <p className="text-sm text-gray-400 mb-6 w-1/2">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-20">
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
