import { useState } from "react";
import { FAQS } from "../utility/FAQS";

const FAQ = () => {
  const [show, setShow] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center m-2 md:m-4 lg:m-6">
      {/* Heading Section */}
      <div className="p-4 flex flex-col justify-center items-center gap-2 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Frequently <span className="text-red-500">Asked</span> Questions
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-gray-400 mb-6 max-w-xl">
          Got questions? We've got answers! Check out our FAQ section to find
          answers to the most common questions about StreamVibe.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-10 lg:px-20 justify-items-center w-full">
        {FAQS.map((faq) => (
          <div
            key={faq.id}
            className="p-4 bg-black rounded-md shadow-md hover:shadow-red-600 w-full max-w-md"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <p className="bg-gray-900 px-4 py-2 rounded-md mr-2">
                  {faq.id}
                </p>
                <h3 className="text-sm font-semibold mb-2 flex-1">
                  {faq.question}
                </h3>
              </div>

              <button
                className="text-red-500 text-xl"
                onClick={() => setShow(show === faq.id ? 0 : faq.id)}
              >
                <i
                  className={`fa-solid fa-chevron-${
                    show === faq.id ? "up" : "down"
                  } text-red-500`}
                ></i>
              </button>
            </div>
            {show === faq.id && (
              <p className="text-gray-400 text-sm mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
