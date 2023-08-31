import classNames from 'classnames';
import { ReactNode, useState } from 'react';

export interface ITabItem {
  id: string;
  label: string;
  content: ReactNode;
}

export interface ITabs {
  type: 'tab' | 'checkbox';
  items: ITabItem[];
}

const Tabs = (props: ITabs) => {
  const [activeId, setActiveId] = useState(props.items[0].id);

  return (
    <div className="ib-tabs">
      <div className="tabs flex justify-between mb-6">
        {props.items.map((item) => {
          return (
            <span
              className="space-x-2 flex items-center"
              onClick={() => setActiveId(item.id)}
            >
              <input
                type="radio"
                id={`tab-${item.id}`}
                checked={item.id === activeId}
              />
              <label htmlFor={`tab-${item.id}`}>{item.label}</label>
            </span>
          );
        })}
      </div>
      <div className="items">
        {props.items.map((item) => {
          return (
            <span
              className={classNames({
                hidden: item.id !== activeId,
              })}
            >
              {item.content}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
