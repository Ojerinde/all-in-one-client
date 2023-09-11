import React from "react";
import HttpRequest from "../../../store/Https/HttpRequest";

const OtherAuthMethod: React.FC = () => {
  const otherMethodsHandler = async (url: string) => {
    await HttpRequest.get(url);
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <span className="h-[1px] w-full bg-custom-grey-light-2 mt-1" />
        <span className="text-custom-grey-light-1 text-[1.6rem]">or</span>
        <span className="h-[1px] w-full bg-custom-grey-light-2 mt-1" />
      </div>
      <button
        onClick={() => otherMethodsHandler("/auth/google")}
        className="flex justify-center items-center gap-4  w-full cursor-pointer
        py-4 text-[1.6rem] font-semibold bg-white border border-custom-black rounded shadow-[0px_2px_4px_0px_rgba(52,60,68,0.16),0px_0px_1px_0px_rgba(117,131,142,0.04)] hover:-translate-y-2 active:-translate-y-1 duration-300"
      >
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="placeholder">
            <path
              id="vector"
              d="M22.501 12.2633C22.501 11.4 22.4296 10.77 22.2748 10.1167H12.2153V14.0133H18.12C18.001 14.9817 17.3582 16.44 15.9296 17.42L15.9096 17.5504L19.0902 19.9651L19.3106 19.9867C21.3343 18.155 22.501 15.46 22.501 12.2633Z"
              fill="#4285F4"
            />
            <path
              id="vector_2"
              d="M12.2147 22.5299C15.1075 22.5299 17.5361 21.5965 19.3099 19.9865L15.929 17.4198C15.0242 18.0381 13.8099 18.4698 12.2147 18.4698C9.38142 18.4698 6.97669 16.6381 6.11947 14.1064L5.99382 14.1169L2.68656 16.6253L2.64331 16.7431C4.40519 20.1731 8.02423 22.5299 12.2147 22.5299Z"
              fill="#34A853"
            />
            <path
              id="vector_3"
              d="M6.11997 14.1067C5.89379 13.4534 5.76289 12.7534 5.76289 12.0301C5.76289 11.3067 5.89379 10.6067 6.10807 9.9534L6.10208 9.81426L2.75337 7.26562L2.64381 7.3167C1.91765 8.74005 1.50098 10.3384 1.50098 12.0301C1.50098 13.7217 1.91765 15.32 2.64381 16.7434L6.11997 14.1067Z"
              fill="#FBBC05"
            />
            <path
              id="vector_4"
              d="M12.2148 5.59025C14.2267 5.59025 15.5838 6.44191 16.3576 7.15362L19.3814 4.26027C17.5243 2.56861 15.1076 1.53027 12.2148 1.53027C8.02426 1.53027 4.4052 3.88692 2.64331 7.31689L6.10759 9.9536C6.97672 7.42193 9.38146 5.59025 12.2148 5.59025Z"
              fill="#EB4335"
            />
          </g>
        </svg>
        <span className="text-custom-black-2">Continue with Google</span>
      </button>
    </>
  );
};
export default OtherAuthMethod;
