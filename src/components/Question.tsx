"use client";
import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

type QuestionProps = {
  ques: string;
  ans:string
};

export default function Question({ques, ans}: QuestionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const questionRef = useRef(null);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    // Set the content height based on the question div height
    if (questionRef.current) {
      setContentHeight(questionRef.current.clientHeight);
    }
  }, [isOpen]);

  return (
    <div className={`border rounded-lg sm:w-[80%] w-[100%] ${isOpen ? 'bg-[#5F2EEA] border-[#5F2EEA]' : ''}`}>
      <div
        ref={questionRef}
        onClick={toggle}
        className="h-16 md:h-[3rem] items-center justify-between flex p-4 cursor-pointer"
      >
        <p className="text-[0.9rem] md:text-[1rem]">{ques}</p>
        <p className="text-2xl">
          {isOpen ? (
            <MdKeyboardArrowDown className="transition-all duration-300 [transition-timing-function:cubic-bezier(0.22, 1, 0.36, 1)]" />
          ) : (
            <MdKeyboardArrowRight className="transition-all duration-300 [transition-timing-function:cubic-bezier(0.22, 1, 0.36, 1)]" />
          )}
        </p>
      </div>
      <div
        ref={contentRef}
        style={{
          height: isOpen ? `${contentHeight}px` : "0px",
          transition: "all 300ms cubic-bezier(0.3, 0, 0.2, 1)",
          overflow: "hidden",
        }}
        className="transition-all duration-300 ease-in"
      >
        <hr className="mx-4 text-center" />
        <p className="mx-4 md:my-3 my-5">{ans}</p>
      </div>
    </div>
  );
}
