import { Icon } from '@phosphor-icons/react';
import { ComponentProps, ReactNode } from 'react';
import Tooltip from '../tooltip';

interface ISummary {
  className?: string;
  // items: (string | ReactNode)[];
}

export const DescriptionItem = (props: ComponentProps<'div'>) => {
  return <div className={`truncate ${props.className}`}>{props.children}</div>;
};

const Description = (props: ComponentProps<'div'>) => {
  return (
    <div className={`grid grid-cols-2 gap-2 ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Description;
