import { useNavigate } from "react-router-dom";
import landingVideo from "../../assets/videos/background.mp4";
import landingImg from "../../assets/images/ladies.jpg";
import Button from "../UI/Button/Button.tsx";

const LandingPageHeader = () => {
  const navigate = useNavigate();
  return (
    <section className="relative h-full w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/80 to-custom-blue-dark-3/90" />
      <video className="h-full w-full object-cover" autoPlay muted loop>
        <source src={landingVideo} type="video/mp4" />
        Your browser is not supported
      </video>
      <div className="absolute w-full h-full overflow-hidden top-0 left-0 flex justify-between items-center py-8 px-24">
        <div className="tracking-widest -mt-10 ">
          <h1 className="text-[6rem] leading-[10rem]">
            <span className="text-[5rem] leading-[7rem] text-custom-blue">
              Free
            </span>{" "}
            <br />
            Online Education
            <br /> Application.
          </h1>
          <div className="mt-10 flex gap-8">
            <Button
              type="button"
              size="large"
              mode="primary"
              icon="off"
              onClick={() => {
                navigate("auth/signup");
              }}
            >
              Sign up
            </Button>
            <Button
              type="button"
              size="large"
              mode="secondary"
              icon="off"
              onClick={() => {
                navigate("auth/login");
              }}
            >
              Login
            </Button>
          </div>
        </div>
        <figure className="basis-[45%] h-[70vh] rounded-[3rem] overflow-hidden">
          <img
            src={landingImg}
            alt="School"
            className="h-full w-full object-cover"
          />
        </figure>{" "}
      </div>
    </section>
  );
};
export default LandingPageHeader;
