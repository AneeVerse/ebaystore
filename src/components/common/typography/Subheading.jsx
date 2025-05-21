import React from 'react';
import PropTypes from 'prop-types';
import { cva } from 'class-variance-authority';

export const subheadingStyles = cva('text-xs sm:text-sm md:text-base', {
  variants: {
    variant: {
      primary: 'text-gray-600',
      secondary: 'text-blue-500',
      inverted: 'text-white'
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    }
  },
  defaultVariants: {
    variant: 'primary',
    align: 'left'
  }
});

export function Subheading({ variant, align, className, children }) {
  return (
    <div className={subheadingStyles({ variant, align, className })}>
      {children}
    </div>
  );
}

Subheading.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};