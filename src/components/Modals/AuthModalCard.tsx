import React, { ReactNode } from "react";
import authImg from "../../assets/images/auth.png";

interface AuthModalCardProps {
  children: ReactNode;
}
const AuthModalCard: React.FC<AuthModalCardProps> = ({ children }) => {
  return (
    <div
      className="relative max-w-[42.2rem] overflow-hidden border bg-custom-white
     border-custom-grey-light-2 rounded-[2rem] shadow-[0px_20px_20px_0px_rgba(94,94,94,0.2),0px_0px_2px_0px_rgba(94,94,94,0.2)]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 194" fill="none">
        <path
          d="M189.17 193.34C308.557 193.34 405.34 96.5574 405.34 -22.83C405.34
           -142.217 308.557 -239 189.17 -239C69.7826 -239 -27 -142.217 -27 -22.83C-27 96.5574 69.7826 193.34 189.17 193.34Z"
          fill="#007bff"
        />
      </svg>
      <img
        src={authImg}
        alt="Authentication"
        className="w-[10rem] h-[12rem] absolute top-14 left-[35%]"
      />
      {children}
    </div>
  );
};
export default AuthModalCard;
