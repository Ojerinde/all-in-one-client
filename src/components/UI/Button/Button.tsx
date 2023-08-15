import classes from "./Button.module.css";

interface ButtonProps {
  size: "large" | "medium" | "small" | undefined;
  mode: "primary" | "secondary" | "textonly" | undefined;
  icon: "left" | "right" | "off";
  width?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  size,
  mode,
  icon,
  width,
  disabled,
  children,
  onClick,
}) => {
  if (size === "large") {
    if (icon === "off") {
      return (
        <button
          onClick={onClick}
          type={type}
          className={`py-[1.8rem] px-[6.4rem] max-lg:py-[1.4rem] max-lg:px-[6rem] max-md:py-[1.2rem] max-md:px-[4rem] ${
            width === true ? "max-sm:w-full" : ""
          } ${mode === "primary" ? `${classes.primary}` : ""} ${
            mode === "textonly" ? `${classes.textonly}` : ""
          }  ${mode === "secondary" ? `${classes.secondary}` : ""}`}
          disabled={disabled}
        >
          {children}
        </button>
      );
    }
    if (icon === "left") {
      return (
        <button
          onClick={onClick}
          type={type}
          className={`cursor-pointer flex items-center justify-center py-[1.8rem] px-[6.4rem] max-lg:py-[1.4rem] max-lg:px-[6rem] max-md:py-[1.2rem] max-md:px-[4rem] ${
            width === true ? "max-sm:w-full" : ""
          } ${mode === "primary" ? `${classes.primary}` : ""} ${
            mode === "textonly" ? `${classes.textonly}` : ""
          }  ${mode === "secondary" ? `${classes.secondary}` : ""}`}
          disabled={disabled}
        >
          <span className="mr-2">
            <img
              src="/icons/arrow_back.svg"
              alt="Header "
              width={20}
              height={20}
              className={`${mode === "primary" ? "dark:invert" : ""}`}
            />
          </span>{" "}
          <span>{children}</span>
        </button>
      );
    }
    return (
      <button
        onClick={onClick}
        type={type}
        className={`cursor-pointer flex items-center justify-center py-[1.8rem] px-[6.4rem] max-lg:py-[1.4rem] max-lg:px-[6rem] max-md:py-[1.2rem] max-md:px-[4rem] ${
          width === true ? "max-sm:w-full" : ""
        } ${mode === "primary" ? `${classes.primary}` : ""} ${
          mode === "textonly" ? `${classes.textonly}` : ""
        }  ${mode === "secondary" ? `${classes.secondary}` : ""}`}
        disabled={disabled}
      >
        <span>{children}</span>{" "}
        <span className="ml-2">
          <img
            src="/icons/arrow_forward.svg"
            alt="Header "
            width={20}
            height={20}
            className={`${mode === "primary" ? "dark:invert" : ""}`}
          />
        </span>
      </button>
    );
  }
  if (size === "medium") {
    if (icon === "off") {
      return (
        <button
          onClick={onClick}
          type={type}
          className={`py-[1.2rem] px-[2.6rem] max-lg:py-[1rem] max-lg:px-[3.2rem] max-md:py-[0.8rem] max-md:px-[3.0rem] ${
            width === true ? "max-sm:w-full" : ""
          } ${mode === "primary" ? `${classes.primary}` : " "}`}
          disabled={disabled}
        >
          {children}
        </button>
      );
    }
    if (icon === "left") {
      return (
        <button
          onClick={onClick}
          type={type}
          className={`cursor-pointer flex items-center justify-center py-[1.2rem] px-[4.8rem] max-lg:py-[1rem] max-lg:px-[4.2rem] max-md:py-[0.8rem] max-md:px-[3.5rem] ${
            width === true ? "max-sm:w-full" : ""
          } ${mode === "primary" ? `${classes.primary}` : ""} ${
            mode === "textonly" ? `${classes.textonly}` : ""
          }  ${mode === "secondary" ? `${classes.secondary}` : ""}`}
          disabled={disabled}
        >
          <span className="mr-2">
            <img
              src="/icons/arrow_back.svg"
              alt="Header "
              width={20}
              height={20}
              className={`${mode === "primary" ? "dark:invert" : ""}`}
            />
          </span>{" "}
          <span>{children}</span>
        </button>
      );
    }
    return (
      <button
        onClick={onClick}
        type={type}
        className={`cursor-pointer flex items-center justify-center py-[1.2rem] px-[4.8rem] max-lg:py-[1rem] max-lg:px-[4.2rem] max-md:py-[0.8rem] max-md:px-[3.5rem] ${
          width === true ? "max-sm:w-full" : ""
        } ${mode === "primary" ? `${classes.primary}` : ""} ${
          mode === "textonly" ? `${classes.textonly}` : ""
        }  ${mode === "secondary" ? `${classes.secondary}` : ""}`}
        disabled={disabled}
      >
        <span>{children}</span>{" "}
        <span className="ml-2">
          <img
            src="/icons/arrow_forward.svg"
            alt="Header "
            width={20}
            height={20}
            className={`${mode === "primary" ? "dark:invert" : ""}`}
          />
        </span>
      </button>
    );
  }
  if (icon === "off") {
    return (
      <button
        onClick={onClick}
        type={type}
        className={`cursor-pointer flex items-center justify-center py-[0.8rem] px-[3.2rem] max-lg:py-[0.6rem] max-lg:px-[2.8rem] max-md:px[2.5rem] ${
          width === true ? "max-sm:w-full" : ""
        } ${mode === "primary" ? `${classes.primary}` : ""} ${
          mode === "textonly" ? `${classes.textonly}` : ""
        }  ${mode === "secondary" ? `${classes.secondary}` : ""}`}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
  if (icon === "left") {
    return (
      <button
        onClick={onClick}
        type={type}
        className={`cursor-pointer flex items-center justify-center py-[0.8rem] px-[3.2rem] max-lg:py-[0.6rem] max-lg:px-[2.8rem] max-md:px[2.5rem] ${
          width === true ? "max-sm:w-full" : ""
        } ${mode === "primary" ? `${classes.primary}` : ""} ${
          mode === "textonly" ? `${classes.textonly}` : ""
        }  ${mode === "secondary" ? `${classes.secondary}` : ""}`}
        disabled={disabled}
      >
        <span className="mr-2">
          <img
            src="/icons/arrow_back.svg"
            alt="Header "
            width={20}
            height={20}
            className={`${mode === "primary" ? "dark:invert" : ""}`}
          />
        </span>{" "}
        <span>{children}</span>
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type={type}
      className={`cursor-pointer flex items-center justify-center py-[0.8rem] px-[3.2rem] max-lg:py-[0.6rem] max-lg:px-[2.8rem] max-md:px[2.5rem] ${
        width === true ? "max-sm:w-full" : ""
      } ${mode === "primary" ? `${classes.primary}` : ""} ${
        mode === "textonly" ? `${classes.textonly}` : ""
      }  ${mode === "secondary" ? `${classes.secondary}` : ""}`}
      disabled={disabled}
    >
      <span>{children}</span>
      <span className="ml-2">
        <img
          src="/icons/arrow_forward.svg"
          alt="Header "
          width={20}
          height={20}
          className={`${mode === "primary" ? "dark:invert" : ""}`}
        />
      </span>
    </button>
  );
};

export default Button;
