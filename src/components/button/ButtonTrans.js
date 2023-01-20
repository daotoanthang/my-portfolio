import React from "react";

const ButtonTrans = ({
  onClick,
  className = "",
  full = false,
  type = "button",
  bgColor = "primary",
  children,
  ...props
}) => {
  return (
    <a
      target={props.target}
      href={props.href}
      className={`no-underline w-max inline-block text-primary px-5 py-3 rounded-lg cursor-pointer border border-primary transition-all hover:bg-white hover:text-bgColor hover:border-transparent
              ${className}`}
    >
      {children}
    </a>
  );
};

export default ButtonTrans;
