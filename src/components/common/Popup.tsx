import { useEffect, useState, FC } from "react";
import MainButton from "./MainButton";

interface IconProps {
  size: number;
  className?: string;
}

interface PopupProps {
  description: string;
  onClick: () => void;
  children: React.ReactNode;
}

const Popup: FC<PopupProps> = ({ description, onClick, children }) => {

  const [isConfirming, setIsConfirming] = useState<boolean>(false);

  const renderModal = () => {
    return (
      <>
        <div
          className="fixed top-0 start-0 w-full h-full bg-black bg-opacity-30 z-40"
          onClick={() => setIsConfirming(false)}
        ></div>
        <div
          role="dialog"
          aria-modal="true"
          className="fixed top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-sm:w-[90%] mx-auto"
        >
          <div
            
            className="bg-white rounded-3xl px-2 py-7 min-w-[200px]"
          >
            <p className="font-semibold text-2xl text-center px-4 mb-5">
              {description}
            </p>
            <div className="w-[180px] mx-auto flex items-center justify-center gap-2">
              <MainButton onClick={onClick} title="Sure" />
              <MainButton
                onClick={() => setIsConfirming(false)}
                title="Cancel"
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {isConfirming && renderModal()}
      <div
        className="flex items-center justify-center gap-1 font-semibold cursor-pointer"
        onClick={() => setIsConfirming(true)}
      >
        {children}
      </div>
    </div>
  );
};

export default Popup;
