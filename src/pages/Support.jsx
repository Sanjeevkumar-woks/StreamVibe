import FAQ from "../Components/FAQ";
import FreeTrial from "../Components/FreeTrial";
import SupportForm from "../Components/SupportForm";

const Support = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <SupportForm />
      <FAQ />
      <FreeTrial />
    </div>
  );
};

export default Support;
