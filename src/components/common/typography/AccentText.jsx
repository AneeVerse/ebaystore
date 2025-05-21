import React from 'react';
import PropTypes from 'prop-types';
import { cva } from 'class-variance-authority';

export const accentTextStyles = cva('font-accent', {
  variants: {
    size: {
      sm: 'text-base md:text-lg lg:text-xl xl:text-2xl', // Responsive sizes
      md: 'text-lg md:text-xl lg:text-2xl xl:text-3xl',
      lg: 'text-xl md:text-2xl lg:text-3xl xl:text-4xl',
      xl: 'text-2xl md:text-3xl lg:text-4xl xl:text-display-xl'
    },
    effect: {
      underline: 'underline underline-offset-4',
      gradient: 'bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent'
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

export function AccentText({ size, effect, className, children }) {
  return (
    <span className={accentTextStyles({ size, effect, className })}>
      {children}
    </span>
  );
}

AccentText.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  effect: PropTypes.oneOf(['underline', 'gradient']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};