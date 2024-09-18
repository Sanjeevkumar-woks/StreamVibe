import { subscriptionPlans } from "../utility/SubscriptionPlans";
import PlanCard from "./PlanCard";
import background from "../../public/images/BackgroundImages.png";

const Plans = () => {
  return (
    <div className="flex flex-col justify-center items-center m-2 md:m-4 lg:m-6">
      {/* Heading Section */}
      <div className="p-4 flex flex-col justify-center items-center gap-2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Choose the <span className="text-red-500">Plan</span> that's right for
          you
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-gray-400 mb-6 w-full ">
          Join StreamVibe and select from our flexible subscription options
          tailored to suit your viewing preferences. Get ready for non-stop
          entertainment!
        </p>
      </div>

      {/* Subscription Plans Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-10 lg:px-20 justify-items-center ">
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

      {/* Call-to-action Section */}
      <div
        className="hero bg-cover bg-center bg-no-repeat relative py-5 px-4 m-4 sm:m-10 lg:m-20 w-full sm:w-3/4 lg:w-2/3 mx-auto"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex flex-col lg:flex-row justify-around items-center gap-4">
          <div className="p-4 flex flex-col justify-center items-center gap-2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Start your free trial <span className="text-red-500">today</span>!
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-gray-400">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <div>
            <button className="text-white text-xs sm:text-sm lg:text-base hover:bg-red-700 bg-red-500 rounded-md p-2">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
