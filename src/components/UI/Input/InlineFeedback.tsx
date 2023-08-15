/* eslint-disable no-nested-ternary */
import React from "react";

interface InlineFeedbackProps {
  status: "warning" | "error" | "success";
  message: string;
}

const InlineFeedback: React.FC<InlineFeedbackProps> = ({ status, message }) => {
  return (
    <div className="flex items-center space-x-2 my-4">
      <div>
        {status === "success" && (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13.6666C3.318 13.6666 0.333328 10.682 0.333328 6.99998C0.333328 3.31798 3.318 0.333313 7 0.333313C10.682 0.333313 13.6667 3.31798 13.6667 6.99998C13.6667 10.682 10.682 13.6666 7 13.6666ZM6.22933 9.98998L10.9427 5.27598L10 4.33331L6.22933 8.10465L4.34333 6.21865L3.40066 7.16131L6.22933 9.98998Z"
              fill="#2BAC47"
            />
          </svg>
        )}
        {status === "warning" && (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14.6667C4.318 14.6667 1.33333 11.682 1.33333 8.00001C1.33333 4.31801 4.318 1.33334 8 1.33334C11.682 1.33334 14.6667 4.31801 14.6667 8.00001C14.6667 11.682 11.682 14.6667 8 14.6667ZM7.33333 10V11.3333H8.66666V10H7.33333ZM7.33333 4.66668V8.66668H8.66666V4.66668H7.33333Z"
              fill="#EF8943"
            />
          </svg>
        )}
        {status === "error" && (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1123_1854)">
              <path
                d="M8 14.6667C4.318 14.6667 1.33333 11.682 1.33333 8.00001C1.33333 4.31801 4.318 1.33334 8 1.33334C11.682 1.33334 14.6667 4.31801 14.6667 8.00001C14.6667 11.682 11.682 14.6667 8 14.6667ZM7.33333 10V11.3333H8.66666V10H7.33333ZM7.33333 4.66668V8.66668H8.66666V4.66668H7.33333Z"
                fill="#C83532"
              />
            </g>
            <defs>
              <clipPath id="clip0_1123_1854">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </div>
      <p
        className={`${
          status === "success"
            ? "text-[#2BAC47]"
            : status === "error"
            ? "text-[#C83532]"
            : status === "warning"
            ? "text-[#EF8943]"
            : null
        } tracking-wider text-[1.6rem]`}
      >
        {message}
      </p>
    </div>
  );
};

export default InlineFeedback;
