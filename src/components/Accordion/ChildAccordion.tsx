import { useState, useRef, useEffect } from "react";
import Actions from "../common/Actions";

interface ChildAccordionProps {
  list: string[];
  name: string;
}

const ChildAccordion = ({ list, name }: ChildAccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const toggleAccordion = () => {
    setAccordionOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    if (accordionOpen && contentRef.current) {
      setMaxHeight(`${3 * contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [accordionOpen]);

  return (
    <div>
      <button
        onClick={toggleAccordion}
        className="w-full bg-[#f5f9ff] py-2 border-l-4 mt-2 border-blue-300 transition-all"
      >
        <div className="mx-4 flex justify-between text-Secondary">
          <p>{name}</p>
          <Actions className="text-Fifth" />
        </div>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: maxHeight }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out bg-[#f5f9ff]"
      >
        <div className="py-2">
          {list.map((item, i) => (
            <div
              key={i}
              className="mx-4 bg-[#ebf3ff] hover:bg-gray-100 text-Secondary px-4 py-2 shadow-sm mb-1"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChildAccordion;
