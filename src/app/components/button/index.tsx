import classNames from 'classnames';
import { ComponentProps } from 'react';

interface IButton {
  category?: 'primary' | 'secondary' | 'danger';
}

const ButtonStyles = {
  primary: [
    'text-white',
    'bg-blue-700',
    'hover:bg-blue-800',
    'dark:bg-blue-600',
    'dark:hover:bg-blue-700',
    'dark:focus:ring-blue-800',
  ],
  secondary: [
    'bg-white',
    'hover:bg-gray-100',
    'border',
    'border-gray-200',
    'hover:text-gray-900',
    'dark:bg-gray-700',
    'dark:text-gray-300',
    'dark:border-gray-500',
    'dark:hover:text-white',
    'dark:hover:bg-gray-600',
    'dark:focus:ring-gray-600',
  ],
  success: [
    'text-white',
    'bg-green-700',
    'hover:bg-green-800',
    'dark:bg-green-600',
    'dark:hover:bg-green-700',
    'dark:focus:ring-green-800',
  ],
  danger: [
    'text-white',
    'bg-red-700',
    'hover:bg-red-800',
    'dark:bg-red-600',
    'dark:hover:bg-red-700',
    'dark:focus:ring-red-800',
  ],
};

const Button = ({
  className,
  ...props
}: IButton & ComponentProps<'button'>) => {
  return (
    <button
      className={classNames(
        'focus:ring-4',
        'focus:outline-none',
        'focus:ring-blue-300',
        'font-medium',
        'rounded-lg',
        'text-sm',
        'px-5',
        'py-2.5',
        'text-center',
        ButtonStyles[props?.category ?? 'primary'],
        className
      )}
      {...props}
    ></button>
  );
};

export default Button;
