import { useState } from "react";

interface AccordionProps {
  title: string;
  description: string;
}

const Accordion = (props: AccordionProps) => {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  return (
    <div onClick={() => setAccordionIsOpen(!accordionIsOpen)} className="py-2">
      <button className="flex justify-between items-center w-full">
        <h1 className="font-body text-2xl py-3 text-left text-gray">{props.title}</h1>
        <svg
          className="fill-primary shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          fill="#646cffaa"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionIsOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionIsOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionIsOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-left text-gray">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
