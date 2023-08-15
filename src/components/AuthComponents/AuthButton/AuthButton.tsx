import React from "react";

interface AuthButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  background: "blue" | "white";
  className?: string;
  onClick: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  children,
  type,
  onClick,
  background,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        background === "blue"
          ? "bg-custom-blue text-white border border-transparent"
          : "bg-custom-white text-custom-blue border border-custom-blue-dark-2 rounded"
      } ${className} my-3 cursor-pointer w-full h-[4.3rem] text-[1.6rem] font-semibold hover:-translate-y-[.3rem] active:-translate-y-[.1rem] duration-300`}
    >
      {children}
    </button>
  );
};
export default AuthButton;
