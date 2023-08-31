import { ComponentProps, ReactNode } from 'react';

interface ISwitcher {
  label: string | ReactNode;
  type?: 'checkbox' | 'radio';
  checked?: boolean;
  onChange?: () => void;
}

const Switcher = ({
  type = 'checkbox',
  label,
  ...props
}: ISwitcher & ComponentProps<'input'>) => {
  return (
    <label className="switcher w-full flex justify-between items-center border-t cursor-pointer">
      <span className="flex items-center gap-1">{label}</span>
      <input type={type} {...props} />
    </label>
  );
};

export default Switcher;
