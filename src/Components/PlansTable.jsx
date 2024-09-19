import { subscriptionPlans } from "../utility/SubscriptionPlans";

const PlansTable = () => {
  //  Columns to Rows
  const transposedData = subscriptionPlans.map((plan) => {
    const { planName, price, features } = plan;
    return {
      key: planName,
      planName,
      price,
      content: features.content,
      devices: features.devices,
      freeTrial: features.freeTrial ? "Yes" : "No",
      cancelAnytime: features.cancelAnytime ? "Yes" : "No",
      hdr: features.hdr ? "Yes" : "No",
      dolbyAtmos: features.dolbyAtmos ? "Yes" : "No",
      adFree: features.adFree ? "Yes" : "No",
      offlineViewing: features.offlineViewing ? "Yes" : "No",
      familySharing: features.familySharing
        ? "Yes, up to " + features.familySharing
        : "No",
    };
  });

  // Define rows based on the transposed view
  const rows = [
    { title: "Price", dataIndex: "price" },
    { title: "Content", dataIndex: "content" },
    { title: "Devices", dataIndex: "devices" },
    { title: "Free Trial", dataIndex: "freeTrial" },
    { title: "Cancel Anytime", dataIndex: "cancelAnytime" },
    { title: "HDR", dataIndex: "hdr" },
    { title: "Dolby Atmos", dataIndex: "dolbyAtmos" },
    { title: "Ad Free", dataIndex: "adFree" },
    { title: "Offline Viewing", dataIndex: "offlineViewing" },
    { title: "Family Sharing", dataIndex: "familySharing" },
  ];

  return (
    <div className="flex flex-col justify-center items-center  m-4 ">
      {/* Heading Section */}
      <div className="p-4 flex flex-col justify-center items-center gap-2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Choose the plan From Our <span className="text-red-500">Table</span>
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-gray-400 mb-6 w-full ">
          Join StreamVibe and select from our flexible subscription options
          tailored to suit your viewing preferences. Get ready for non-stop
          entertainment!
        </p>
      </div>

      {/* Table Section */}
      <div className="w-full md:w-3/4 lg:w-4/5 ">
        <table className="min-w-full  bg-black text-center rounded-xl">
          <thead>
            <tr>
              {/* First row, first column should be Features */}
              <th className=" p-2 font-medium     ">Features</th>
              {transposedData.map((plan) => (
                <th key={plan.planName} className="p-2 font-medium      ">
                  {plan.planName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.title}>
                <td className="p-2 font-medium text-gray-500">{row.title}</td>
                {transposedData.map((plan) => (
                  <td key={plan.key} className="p-2 text-gray-500">
                    {plan[row.dataIndex]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlansTable;
