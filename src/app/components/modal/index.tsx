import { X } from '@phosphor-icons/react';

{
  /* <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button> */
}
interface IProps {
  visible: boolean;
  title?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  onClose: () => void;
}

const Modal = (props: IProps) => {
  const { visible, title, content, footer, onClose } = props;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-zinc-950/50 ${
        !visible ? 'hidden' : ''
      }`}
    >
      <div className="relative w-full h-full flex justify-center items-center">
        {/* Modal content */}
        <div className="relative w-[500px] bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          {title && (
            <div className="flex items-start justify-between p-4 rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
                onClick={() => onClose()}
              >
                <X size={14} />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
          )}
          {/* Modal body */}
          {content && (
            <div className="p-6 border-t border-gray-200 dark:border-gray-600">
              {content}
            </div>
          )}
          {/* Modal footer */}
          {footer && (
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
