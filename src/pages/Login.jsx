import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    alert("Login successful!");
    resetForm();
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center p-6 h-screen">
      {/* Image Section */}
      {/* Image Section */}
      <div className="flex flex-col sm:w-1/2 sm:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Welcome to our <span className="text-red-500">Stream Vibe!</span>
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-gray-400 mb-6 w-full">
          We're here to help you with any problems you may be having with your
          Movies and Series streaming.
        </p>

        <img
          src="/SubContainer2.png"
          alt="subscription"
          className="w-1/2 shadow-md hover:shadow-red-500 transition-shadow duration-300"
        />
      </div>

      {/* Form Section */}
      <div className="bg-black p-6 rounded-lg w-full sm:w-1/2 md:w-1/3 flex flex-col justify-center items-center">
        <h2 className="text-3xl text-white font-bold mb-4 text-center">
          Login
        </h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col gap-4 w-full">
            <div>
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="bg-gray-700 rounded-md p-2 w-full text-black"
                placeholder="Enter your email address..."
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-white">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="bg-gray-700 rounded-md p-2 w-full text-black"
                placeholder="Enter your password..."
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md"
              >
                Login
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
