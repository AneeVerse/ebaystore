import React from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";

export const headingStyles = cva("font-sans", {
  variants: {
    level: {
      h1: "text-3xl md:text-4xl lg:text-5xl 2xl:text-display-2xl", // Responsive sizes
      h2: "text-2xl md:text-3xl lg:text-4xl 2xl:text-display-xl",
      h3: "text-xl md:text-2xl lg:text-3xl 2xl:text-display-lg",
      h4: "text-xl md:text-2xl lg:text-2xl 2xl:text-3xl",
    },
    color: {
      dark: "text-secondary-500",
      light: "text-primary-500",
      accent: "text-blue-600",
    },
    spacing: {
      lg: "mb-4 md:mb-6 lg:mb-8", // Responsive spacing
      md: "mb-3 md:mb-4 lg:mb-6",
    },
  },
  compoundVariants: [
    {
      level: ["h1", "h2"],
      spacing: "lg",
    },
  ],
  defaultVariants: {
    level: "h2",
    color: "dark",
    spacing: "md",
  },
});

export function Heading({
  level = "h2",
  as: Component = level,
  color,
  spacing,
  className,
  children,
}) {
  return (
    <Component className={headingStyles({ level, color, spacing, className })}>
      {children}
    </Component>
  );
}

Heading.propTypes = {
  level: PropTypes.oneOf(["h1", "h2", "h3"]),
  as: PropTypes.elementType,
  color: PropTypes.oneOf(["dark", "light", "accent"]),
  spacing: PropTypes.oneOf(["lg", "md"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
