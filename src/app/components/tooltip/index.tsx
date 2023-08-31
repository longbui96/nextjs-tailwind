import classNames from 'classnames';
import { ComponentProps } from 'react';

interface ITooltip {
  text: string;
}

const Tooltip = (props: ITooltip & ComponentProps<'div'>) => {
  const { children, text, className, ...restProps } = props;
  return (
    <span className={classNames('tooltip-wrapper', className)} {...restProps}>
      <span className="tooltip rounded p-1 bg-black/80 text-white-500 mt-5 ml-5">
        {props.text}
      </span>
      {props.children}
    </span>
  );
};

export default Tooltip;
