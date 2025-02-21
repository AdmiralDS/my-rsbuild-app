import type { ComponentPropsWithoutRef } from 'react';
import './button.css';
import { hover } from './button.css.ts';
import styles from './button.module.css';

export type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
} & ComponentPropsWithoutRef<'button'>;

/**
 * Primary UI component
 */
export const Button = ({
  type = 'button',
  primary = false,
  size = 'medium',
  backgroundColor,
  className,
  ...props
}: ButtonProps) => {
  const mode = primary ? styles.primary : styles.secondary;
  return (
    <button
      type={type}
      className={[
        'storybook-button',
        hover,
        styles[size],
        mode,
        className,
      ].join(' ')}
      style={{ backgroundColor }}
      {...props}
    />
  );
};
