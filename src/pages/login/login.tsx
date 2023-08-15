import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import HttpRequest from "../../store/Https/HttpRequest";
import AuthModalCard from "../../components/Modals/AuthModalCard";
import Input from "../../components/UI/Input/Input";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import InlineFeedback from "../../components/UI/Input/InlineFeedback";
import AuthButton from "../../components/AuthComponents/AuthButton/AuthButton";
import OtherAuthMethod from "../../components/AuthComponents/OtherAuthMethod/OtherAuthMethod";
import AuthHeader from "../../components/AuthComponents/AuthHeader/AuthHeader";

const LoginForm = () => {
  // Show and Hide password state
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showError, setShowError] = useState<{
    hasError: boolean;
    message: string;
  }>({ hasError: false, message: "" });

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Password must be minimum of 8 characters including a number, a capital letter and a symbol"
      ),
  });

  const signInHandler = async (formValues: any, actions: any) => {
    const { email, password } = formValues;
    const reqObj = {
      email,
      password,
    };
    try {
      await HttpRequest.post("/auth/signin", reqObj);
    } catch (error: any) {
      setShowError(() => ({
        hasError: true,
        message: ` Try again.`,
      }));
    } finally {
      actions.setSubmitting(false);
      // setTimeout(() => {
      //   setShowError(() => ({ hasError: false, message: "" }))
      // }, 7000)
    }
  };

  return (
    <section className="w-full flex justify-center items-center">
      <AuthModalCard>
        <div className="px-8 pt-8 pb-14">
          <AuthHeader page="/login" />
          <Formik
            initialValues={initialValues}
            onSubmit={signInHandler}
            validationSchema={validationSchema}
          >
            {(formik) => (
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-4"
              >
                <Input
                  label="Email Address"
                  placeholder="Enter your email name"
                  type="email"
                  {...formik.getFieldProps("email")}
                  helper={
                    formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : null
                  }
                  status={
                    formik.touched.email && formik.errors.email ? "error" : null
                  }
                />
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  icon={
                    showPassword ? (
                      <BsFillEyeSlashFill className="h-8 w-8 fill-custom-black-1 cursor-pointer" />
                    ) : (
                      <BsFillEyeFill className="h-8 w-8 fill-custom-black-1 cursor-pointer" />
                    )
                  }
                  onClick={() => {
                    setShowPassword((prev: boolean) => !prev);
                  }}
                  iconPosition="right"
                  {...formik.getFieldProps("password")}
                  helper={
                    formik.touched.password && formik.errors.password
                      ? formik.errors.password
                      : null
                  }
                  status={
                    formik.touched.password && formik.errors.password
                      ? "error"
                      : null
                  }
                />
                <Link
                  to="/auth/forgotPassword"
                  className="text-custom-blue font-semibold text-[1.6rem] w-fit no-underline hover:text-custom-blue-light-2 duration-200"
                >
                  Forgot Password?
                </Link>
                {formik.isSubmitting && <LoadingSpinner />}
                {showError.hasError && (
                  <InlineFeedback status="error" message={showError.message} />
                )}
                <AuthButton background="blue" type="submit" onClick={() => {}}>
                  {formik.isSubmitting ? "Logging in..." : "Login"}
                </AuthButton>
                <p className="font-medium text-[1.6rem] text-[#4f4f4f] ">
                  Don’t have an account?{" "}
                  <Link
                    to="/auth/signup"
                    className="text-custom-blue hover:text-custom-blue-light-2 duration-200 no-underline"
                  >
                    Sign up
                  </Link>{" "}
                </p>
                <OtherAuthMethod />
                <p className="text-[1.4rem] mt-2 text-center text-custom-black tracking-wide">
                  By creating an account you agree to{" "}
                  <Link
                    to="/"
                    className="text-custom-blue hover:text-custom-blue-light-2 duration-200"
                  >
                    Terms of Use
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/"
                    className="text-custom-blue hover:text-custom-blue-light-2 duration-200"
                  >
                    Privacy Policy
                  </Link>{" "}
                </p>
              </form>
            )}
          </Formik>
        </div>
      </AuthModalCard>
    </section>
  );
};

export default LoginForm;
