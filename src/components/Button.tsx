// components/Button.tsx
import React from "react";
import clsx from "clsx";

interface ButtonProps {
  text: any;
  width?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  width = "auto",
  backgroundColor = "transparent",
  textColor = "black",
  borderColor = "transparent",
  disabled = false,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: width,
        backgroundColor: backgroundColor,
        color: textColor,
        margin: "5px",
        borderRadius: "8px",
        padding: "12px 25px",
        border: `2px solid ${borderColor}`,
      }}
      className={clsx(
        "px-6 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
