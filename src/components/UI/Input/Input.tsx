/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */

import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  placeholder: string;
  helper?: string | null;
  status?: "success" | "error" | "warning" | null;
  width?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  prefix?: string;
  suffix?: string;
  onClick?: () => void;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  helper,
  status,
  width,
  icon,
  name,
  iconPosition,
  prefix,
  suffix,
  onClick,
  ...rest
}) => {
  return (
    <div
      style={{
        width: width || "100%",
      }}
      className="my-2"
    >
      <label
        htmlFor={name}
        className="block text-[1.4rem] font-semibold text-custom-black-2 mb-[0.5rem]"
      >
        {label}
      </label>
      <div className="flex items-center relative gap-3">
        {prefix && (
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[1.6rem]">
            {prefix}
          </span>
        )}
        <input
          className={`px-[1.5em] py-[1.5rem]  text-[1.6rem] border text-custom-black  border-[#D5D4DC] outline-0 rounded placeholder:text-custom-grey placeholder:text-[1.6rem] w-full  h-[4.3rem] ${
            status === "success"
              ? "focus:border-[#2BAC47] !border-[#2BAC47] active:border-[#2BAC47] bg-[#F1F8F2] border-2 focus:border-2"
              : status === "error"
              ? "focus:border-[#C83532] !border-[#C83532] active:border-[#C83532] bg-[#FBEFEF] border-2 focus:border-2"
              : status === "warning"
              ? "focus:border-[#EF8943] !border-[#EF8943] active:border-[#EF8943] bg-[#FDF3EC] border-2 focus:border-2"
              : null
          } hover:bg-[#F5F8FF] active:border-[#8BB4FF] focus:border-[#0F62FE]`}
          placeholder={placeholder}
          name={name}
          {...rest}
        />
        {suffix && (
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-[1.6rem]">
            {suffix}
          </span>
        )}
        {icon && (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            className={`absolute ${
              iconPosition === "right" ? "right-4" : "left-4"
            }`}
            onClick={onClick}
          >
            {icon}
          </div>
        )}
      </div>

      <span
        className={`${
          status === "success"
            ? "text-[#2BAC47]"
            : status === "error"
            ? "text-[#C83532]"
            : status === "warning"
            ? "text-[#EF8943]"
            : null
        } mt-[0.5rem] text-[#736A85] text-[1.4rem] flex gap-1 items-start`}
      >
        {status === "success" && helper ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13.6666C3.318 13.6666 0.333328 10.682 0.333328 6.99998C0.333328 3.31798 3.318 0.333313 7 0.333313C10.682 0.333313 13.6667 3.31798 13.6667 6.99998C13.6667 10.682 10.682 13.6666 7 13.6666ZM6.22933 9.98998L10.9427 5.27598L10 4.33331L6.22933 8.10465L4.34333 6.21865L3.40066 7.16131L6.22933 9.98998Z"
              fill="#2BAC47"
            />
          </svg>
        ) : status === "error" && helper ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
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
        ) : status === "warning" && helper ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14.6667C4.318 14.6667 1.33333 11.682 1.33333 8.00001C1.33333 4.31801 4.318 1.33334 8 1.33334C11.682 1.33334 14.6667 4.31801 14.6667 8.00001C14.6667 11.682 11.682 14.6667 8 14.6667ZM7.33333 10V11.3333H8.66666V10H7.33333ZM7.33333 4.66668V8.66668H8.66666V4.66668H7.33333Z"
              fill="#EF8943"
            />
          </svg>
        ) : null}

        <p>{helper}</p>
      </span>
    </div>
  );
};

export default Input;
