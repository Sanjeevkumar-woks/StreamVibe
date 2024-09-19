import FreeTrial from "../Components/FreeTrial";
import Plans from "../Components/Plans";
import PlansTable from "../Components/PlansTable";

const Subscription = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <Plans />
      <PlansTable />
      <FreeTrial />
    </div>
  );
};

export default Subscription;
