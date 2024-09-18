import { subscriptionPlans } from "../utility/SubscriptionPlans";
import PlanCard from "./PlanCard";
import background from "../../public/images/BackgroundImages.png";

const Plans = () => {
  return (
    <div className="p-4 text-center">
      <div className="p-4 flex flex-col justify-center items-center gap-2">
        <h2 className="text-4xl font-semibold">
          Choose the <span className="text-red-500">Plan</span> that's right for
          you
        </h2>
        <p className="text-sm text-gray-400 mb-6 w-1/2">
          Join StreamVibe and select from our flexible subscription options
          tailored to suit your viewing preferences. Get ready for non-stop
          entertainment!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-20">
        {subscriptionPlans.map((plan) => (
          <PlanCard
            key={plan.id}
            iconClass={plan.iconClass}
            planName={plan.planName}
            price={plan.price}
            duration={plan.duration}
            description={plan.description}
          />
        ))}
      </div>
      <div
        className="hero  bg-cover bg-center bg-no-repeat relative py-5 px-4 m-20 w-3/4 ml-auto mr-auto"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex justify-around items-center">
          <div className="p-4 flex flex-col justify-center items-center gap-2">
            <h2 className="text-3xl font-semibold">
              Start your free trial <span className="text-red-500">today</span>!
            </h2>
            <p className="text-sm text-gray-400">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <div>
            <button className="text-white text-sm hover:bg-red-700  bg-red-500 rounded-md px-4 py-2 ">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
