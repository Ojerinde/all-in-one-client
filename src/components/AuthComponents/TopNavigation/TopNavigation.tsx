/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { useNavigate } from "react-router-dom";
import NavLogo from "../../../assets/images/11.png";

const TopNavigation = () => {
  const navigate = useNavigate();
  return (
    <nav
      className="px-20 max-lg:px-16 max-md:px-10 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img src={NavLogo} alt="RealtHive" width={105} height={100} />
    </nav>
  );
};

export default TopNavigation;
