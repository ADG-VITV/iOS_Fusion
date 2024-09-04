"use client";
import { useState, useRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

export default function Question() {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="border rounded-lg sm:w-[80%] w-[100%]">
      <div
        onClick={toggle}
        className=" h-16 md:h-[3rem] items-center justify-between flex p-4 cursor-pointer"
      >
        <p className="text-[0.9rem] md:text-[1rem]">Will OD's be given for the event?</p>
        <p className="text-2xl">
          {isOpen ? (
            <MdKeyboardArrowDown className="transition-all duration-150 [transition-timing-function:cubic-bezier(0.22, 1, 0.36, 1)]" />
          ) : (
            <MdKeyboardArrowRight className="transition-all duration-150 [transition-timing-function:cubic-bezier(0.22, 1, 0.36, 1)]" />
          )}
        </p>
      </div>
      <div
        ref={contentRef}
        style={{
          height: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
          transition: "height 150ms cubic-bezier(0.3, 0, 0.2, 1)",
          overflow: "hidden",
        }}
        className="transition-height duration-150 ease-in-out "
      >
        <hr className="mx-4 text-center" />
        <p className="mx-4 my-2">Yes</p>
      </div>
    </div>
  );
}
