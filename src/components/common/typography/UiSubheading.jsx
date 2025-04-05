// components/typography/UiSubheading.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { cva } from 'class-variance-authority';

export const uiSubheadingStyles = cva('text-sm uppercase font-light', {
  variants: {
    tracking: {
      wide: 'tracking-[2px]',    // Custom tracking (2px)
      wider: 'tracking-[0.1em]', // Wider spacing
      widest: 'tracking-[0.2em]' // Maximum spacing
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    },
    border: {
      true: 'border-b pb-2', // Bottom border with padding
      false: ''
    },
    underline: {
      true: 'underline underline-offset-4', // Optional underline
      false: ''
    }
  },
  compoundVariants: [
    {
      border: true,
      underline: true,
      className: 'underline-offset-8' // Adjust if both border and underline
    }
  ],
  defaultVariants: {
    tracking: 'wide',
    align: 'left',
    border: false,
    underline: false
  }
});

export function UiSubheading({
  tracking,
  align,
  border,
  underline,
  className,
  children
}) {
  return (
    <p className={uiSubheadingStyles({ tracking, align, border, underline, className })}>
      {children}
    </p>
  );
}

UiSubheading.propTypes = {
  tracking: PropTypes.oneOf(['wide', 'wider', 'widest']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  border: PropTypes.bool,
  underline: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};