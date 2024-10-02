import { useState, useRef, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Actions from "../common/Actions";
import ChildAccordion from "./ChildAccordion";

interface ListItem {
  secondName: string;
  secondList: any[];
}

interface AccordionProps {
  list: ListItem[];
  name: string;
}

const Accordion = ({ list, name }: AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  useEffect(() => {
    if (accordionOpen && contentRef.current) {
      setMaxHeight(`${3 * contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [accordionOpen]);

  return (
    <div className="border-b border-gray-400 mb-2">
      <button
        className="flex justify-between w-full py-2 px-2 transition-all hover:bg-blue-50"
        onClick={toggleAccordion}
      >
        <div className="flex items-center w-full">
          <RiArrowDownSLine
            size={20}
            className={`transition-transform duration-300 ${
              accordionOpen ? "rotate-180 text-Main" : "rotate-0"
            }`}
          />
          <span className="ml-2 text-Secondary">{name}</span>
        </div>
        <Actions />
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: maxHeight }}
      >
        <div className="py-2">
          {list.map((item, i) => (
            <ChildAccordion
              key={i}
              name={item.secondName}
              list={item.secondList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
