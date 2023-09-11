import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

interface AuthHeaderProps {
  page: string;
  header: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ page, header }) => {
  const [authToggle] = useState<string>(page);
  const navigate = useNavigate();
  return (
    <header className="relative">
      <BsArrowLeft
        className="absolute -top-10 left-0 fill-custom-blue  w-14 h-10 px-2 cursor-pointer hover:fill-custom-blue-dark-2 duration-300"
        onClick={() => navigate(-1)}
      />
      <h3
        className="w-full text-[2.5rem] text-gradient bg-gradient-to-r from-blue-500 to-black 
      text-transparent bg-clip-text tracking-wide text-center font-semibold pt-9 pb-3 "
      >
        {header}!
      </h3>
      <div className="flex justify-center gap-8 mt-2 mb-6 tracking-widest font-mono">
        <Link
          to="/auth/signup"
          className={`cursor-pointer text-[2rem] no-underline pb-1 hover:text-custom-blue-dark-1 ${
            authToggle === "/signup"
              ? "text-custom-blue border-b-4 border-custom-blue font-semibold"
              : " text-custom-grey"
          }`}
        >
          Sign up
        </Link>
        <Link
          to="/auth/login"
          className={`cursor-pointer text-[2rem] no-underline pb-2 hover:text-custom-blue-dark-1 ${
            authToggle === "/login"
              ? "text-custom-blue border-b-6 border-custom-blue font-semibold"
              : " text-custom-grey"
          }`}
        >
          Login
        </Link>
      </div>
    </header>
  );
};
export default AuthHeader;
