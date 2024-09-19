import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SupportForm = () => {
  // Formik validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
    termsAndConditions: Yup.boolean().oneOf(
      [true],
      "You must agree to the terms and conditions"
    ),
  });

  // Form submission handler
  const handleSubmit = (values, { resetForm }) => {
    alert("Message submitted successfully!");
    resetForm();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center p-4 mt-2 md:mt-10 lg:mt-20">
      {/* Left Section */}
      <div className="flex flex-col sm:w-1/2  sm:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Welcome to our <span className="text-red-500">Support</span> page!
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-gray-400 mb-6 w-full">
          We're here to help you with any problems you may be having with our
          product.
        </p>

        <img
          src="/SubContainer2.png"
          alt="subscription"
          className="w-full h-auto"
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col sm:w-1/2 justify-center items-center bg-black p-6 rounded-md w-full">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            termsAndConditions: false,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-white">
                First Name
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                className="bg-gray-700 rounded-md p-2 text-black"
                placeholder="Enter your first name..."
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-white">
                Last Name
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                className="bg-gray-700 rounded-md p-2 text-black"
                placeholder="Enter your last name..."
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="bg-gray-700 rounded-md p-2 text-black"
                placeholder="Enter your email address..."
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-white">
                Phone
              </label>
              <Field
                type="tel"
                id="phone"
                name="phone"
                className="bg-gray-700 rounded-md p-2 text-black"
                placeholder="Enter your phone number..."
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label htmlFor="message" className="text-white">
                Message
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows="4"
                className="bg-gray-700 rounded-md p-2 text-black"
                placeholder="Enter your message here..."
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="flex flex-col sm:col-span-2 p-2">
              <label htmlFor="termsAndConditions" className="text-white">
                <Field
                  type="checkbox"
                  id="termsAndConditions"
                  name="termsAndConditions"
                />
                &nbsp; I agree to the terms and conditions
              </label>
              <ErrorMessage
                name="termsAndConditions"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="flex justify-center sm:col-span-2">
              <button
                type="submit"
                className="text-white text-xs sm:text-sm lg:text-base hover:bg-red-700 bg-red-500 rounded-md p-2"
              >
                Submit Message
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SupportForm;
