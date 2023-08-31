import { ReactNode, useState } from 'react';
import classnames from 'classnames';
import {
  IconProps,
  NotePencil,
  PlusSquare,
  XSquare,
} from '@phosphor-icons/react';
import Information from '../information';

interface ICollapseItem {
  label: string;
  content?: (args: any) => ReactNode;
}

interface ICollapse {
  items: ICollapseItem[];
}

export const ExpandButton = (props: IconProps) => {
  const [isHover, setHover] = useState(false);
  return (
    <PlusSquare
      weight={isHover ? 'fill' : 'regular'}
      size={20}
      color={'rgb(37 99 235)'}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      {...props}
    />
  );
};

export const CollapseItem = (
  props: ICollapseItem & Partial<Omit<React.ComponentProps<'div'>, 'content'>>
) => {
  const { className, label, content, ...restProps } = props;
  const [isShowing, setShowing] = useState(false);
  const [isEditing, setEditing] = useState(false);

  return (
    <div className={`collapse-item p-0 ${className}`} {...restProps}>
      <div
        className={classnames(`p-3 flex items-center justify-between`, {
          'is-showing': isShowing,
        })}
      >
        <span>{label}</span>
        <div className={'space-x-2'}>
          {isShowing && (
            <button type="button">
              <NotePencil size={20} onClick={() => setEditing(!isEditing)} />
            </button>
          )}
          <button type="button" onClick={() => setShowing(!isShowing)}>
            {isShowing ? (
              <XSquare size={20} />
            ) : (
              <ExpandButton size={20} color={'rgb(37 99 235)'} />
            )}
          </button>
        </div>
      </div>
      <div className={`item-content ${!isShowing ? 'hidden' : ''}`}>
        {content ? content(isEditing) : ''}
      </div>
    </div>
  );
};

const Collapse = (props: ICollapse) => {
  return (
    <div className={'ib-collapse'}>
      {(props?.items ?? []).map(({ label, content }, index) => {
        return (
          <CollapseItem
            className={classnames({ 'border-t': index !== 0 })}
            label={label}
            content={content}
          />
        );
      })}
    </div>
  );
};

export default Collapse;
