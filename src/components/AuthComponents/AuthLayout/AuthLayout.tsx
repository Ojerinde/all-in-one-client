import { Outlet } from "react-router-dom";
import TopNavigation from "../TopNavigation/TopNavigation";

const AuthLayout = () => {
  return (
    <section className="px-8 py-10 bg-custom-black">
      <TopNavigation />
      <Outlet />
    </section>
  );
};
export default AuthLayout;
