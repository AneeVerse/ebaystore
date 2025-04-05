import React from "react";

const Typography = ({ variant = "body", children }) => {
  const variantClasses =
    variant === "h1"
      ? "text-4xl font-bold mb-6"
      : variant === "h2"
      ? "text-3xl font-semibold mb-4"
      : variant === "h3"
      ? "text-2xl font-medium mb-3"
      : "text-base text-gray-700";

  return <p className={variantClasses}>{children}</p>;
};

export default Typography;
