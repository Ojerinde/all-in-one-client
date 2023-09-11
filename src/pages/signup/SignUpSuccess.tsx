import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotificationModalCard from "../../components/Modals/NotificationModalCard";
import AuthButton from "../../components/AuthComponents/AuthButton/AuthButton";

interface SignUpSucess {
  onClose: () => void;
}

const SignUpSuccess: React.FC<SignUpSucess> = ({ onClose }) => {
  const navigate = useNavigate();

  const [seconds, setSeconds] = useState<number>(5);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, [seconds]);

  return (
    <NotificationModalCard className="">
      <div className="flex flex-col justify-center items-center align-middle text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
        >
          <path
            d="M24.5 44C13.4543 44 4.5 35.0457 4.5 24C4.5 12.9543 13.4543 4 24.5 4C35.5457 4 44.5 12.9543 44.5 24C44.4879 35.0407 35.5407 43.9879 24.5 44ZM24.468 40H24.5C33.3334 39.9912 40.4884 32.8254 40.484 23.992C40.4796 15.1586 33.3174 8.00001 24.484 8.00001C15.6506 8.00001 8.48842 15.1586 8.484 23.992C8.47959 32.8254 15.6346 39.9912 24.468 40ZM20.5 34L12.5 26L15.32 23.18L20.5 28.34L33.68 15.16L36.5 18L20.5 34Z"
            fill="#55A7FF"
          />
        </svg>
        <h1 className="text-custom-green-dark-1 text-[1.6rem] mt-6 mb-4">
          Congratulations! You&apos;re almost there.
        </h1>
        <p className="text-custom-black-2 mb-10 text-[1.6rem]">
          We&apos;ve sent a verification link to your email. Click it to confirm
          your accoun. The link lasts for only 1 hour.
        </p>
        <AuthButton
          background="blue"
          className="mb-6"
          type="button"
          onClick={() => {
            navigate("/auth/login");
          }}
        >
          Done
        </AuthButton>

        <button
          className={`py-4 text-[1.5rem] w-full border-2 border-custom-blue text-custom-blue ${
            seconds !== 0
              ? "cursor-not-allowed text-custom-blue/25 border-custom-blue/25"
              : "cursor-pointer"
          }`}
          onClick={onClose}
          disabled={seconds !== 0}
        >
          Resend Link {seconds === 0 ? "" : `in ${seconds} seconds`}
        </button>
      </div>
    </NotificationModalCard>
  );
};
export default SignUpSuccess;
