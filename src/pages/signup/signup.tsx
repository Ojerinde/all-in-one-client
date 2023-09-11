/* eslint-disable no-nested-ternary */

import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import HttpRequest from "../../store/Https/HttpRequest";
import AuthModalCard from "../../components/Modals/AuthModalCard";
import AuthHeader from "../../components/AuthComponents/AuthHeader/AuthHeader";
import Input from "../../components/UI/Input/Input";
import CheckBox from "../../components/UI/CheckBox/CheckBox";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import InlineFeedback from "../../components/UI/Input/InlineFeedback";
import AuthButton from "../../components/AuthComponents/AuthButton/AuthButton";
import OtherAuthMethod from "../../components/AuthComponents/OtherAuthMethod/OtherAuthMethod";
import OverlayCard from "../../components/OverlayCard/OverlayCard";
import SignUpSuccess from "./SignUpSuccess";

const SignUp = () => {
  const navigate = useNavigate();
  // State managements
  const [TermIsChecked, setTermIsChecked] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showError, setShowError] = useState<{
    hasError: boolean;
    message: string;
  }>({ hasError: false, message: "" });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Password must be minimum of 8 characters including a number, a capital letter and a symbol"
      ),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), ""], "Passwords does not match"),
  });

  // Get the value of the child component (input of type checkbox)
  const getCheckedBoxValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermIsChecked(() => event.target.checked);
  };

  // Form submission handler
  const signUpHandler = async (formValues: any, actions: any) => {
    const { firstName, lastName, email, password, confirmPassword } =
      formValues;
    // Creating the format the backend is expecting
    const reqObj = {
      name: `${lastName}${firstName}`,
      email,
      password,
      confirmPassword,
      acceptTerms: TermIsChecked,
    };
    try {
      // Sending a post request
      await HttpRequest.post("/auth/signup", reqObj);
      setShowSuccessModal(() => true);
    } catch (error: any) {
      setShowError(() => ({
        hasError: true,
        message: `${error?.response?.data.message}! Try again.`,
      }));
    } finally {
      // Enabling the form button again
      actions.setSubmitting(false);

      // Clearing the error
      setTimeout(() => {
        setShowError(() => ({ hasError: false, message: "" }));
      }, 7000);
    }
  };

  return (
    <section className="w-full flex justify-center items-center">
      {showSuccessModal && (
        <OverlayCard
          onClose={() => {
            setShowSuccessModal(() => false);
            navigate("/auth/login");
          }}
        >
          <SignUpSuccess onClose={() => setShowSuccessModal(() => false)} />
        </OverlayCard>
      )}
      <AuthModalCard>
        <div className="px-8 pt-8 pb-14">
          <AuthHeader page="/signup" header="Unlock Your Learning Journey" />
          <Formik
            initialValues={initialValues}
            onSubmit={signUpHandler}
            validationSchema={validationSchema}
          >
            {(formik) => (
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-4"
              >
                <Input
                  label="First name"
                  type="text"
                  placeholder="Enter your first name"
                  {...formik.getFieldProps("firstName")}
                  helper={
                    formik.touched.firstName && formik.errors.firstName
                      ? formik.errors.firstName
                      : null
                  }
                  status={
                    formik.touched.firstName && formik.errors.firstName
                      ? "error"
                      : null
                  }
                />
                <Input
                  label="Last name"
                  type="text"
                  placeholder="Enter your last name"
                  {...formik.getFieldProps("lastName")}
                  helper={
                    formik.touched.lastName && formik.errors.lastName
                      ? formik.errors.lastName
                      : null
                  }
                  status={
                    formik.touched.lastName && formik.errors.lastName
                      ? "error"
                      : null
                  }
                />
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
                  placeholder="Create a password"
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
                      : formik.touched.password && !formik.errors.password
                      ? "success"
                      : null
                  }
                />
                <Input
                  label="Confirm Password"
                  placeholder="Enter your password again"
                  type={showConfirmPassword ? "text" : "password"}
                  icon={
                    showConfirmPassword ? (
                      <BsFillEyeSlashFill className="h-8 w-8 fill-custom-black-1 cursor-pointer" />
                    ) : (
                      <BsFillEyeFill className="h-8 w-8 fill-custom-black-1 cursor-pointer" />
                    )
                  }
                  onClick={() => {
                    setShowConfirmPassword((prev: boolean) => !prev);
                  }}
                  iconPosition="right"
                  {...formik.getFieldProps("confirmPassword")}
                  helper={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? formik.errors.confirmPassword
                      : null
                  }
                  status={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "error"
                      : formik.touched.confirmPassword &&
                        !formik.errors.confirmPassword
                      ? "success"
                      : null
                  }
                />
                <div className="flex mt-4 items-center">
                  <CheckBox
                    name="terms"
                    checked={TermIsChecked}
                    onChecked={getCheckedBoxValue}
                  />
                  <label
                    htmlFor="terms"
                    className="text-[1.6rem] font-medium text-[#4f4f4f]"
                  >
                    I agree with{" "}
                    <Link
                      to="/"
                      className="text-custom-blue hover:text-custom-blue-light-2 duration-200"
                    >
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/"
                      className="text-custom-blue hover:text-custom-blue-light-2 duration-200"
                    >
                      Policies
                    </Link>
                    .
                  </label>
                </div>
                {formik.isSubmitting && <LoadingSpinner />}
                {showError.hasError && (
                  <InlineFeedback status="error" message={showError.message} />
                )}
                <AuthButton background="blue" type="submit" onClick={() => {}}>
                  {formik.isSubmitting ? "Signing up..." : "Sign Up"}
                </AuthButton>
              </form>
            )}
          </Formik>
          <p className="my-2 font-medium text-[1.6rem] text-[#4f4f4f] ">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-custom-blue font-semibold text-[1.6rem] w-fit no-underline hover:text-custom-blue-light-2 duration-200"
            >
              Login
            </Link>{" "}
          </p>
          <OtherAuthMethod />
          <p className="text-[1.4rem] mt-2 text-center text-custom-black tracking-wide">
            By creating an account you agree to{" "}
            <Link
              to="/terms"
              className="text-custom-blue hover:text-custom-blue-light-2 duration-200"
            >
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link
              to="/policy"
              className="text-custom-blue hover:text-custom-blue-light-2 duration-200"
            >
              Privacy Policy
            </Link>{" "}
          </p>
        </div>
      </AuthModalCard>
    </section>
  );
};

export default SignUp;
