import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import Question from "@/components/Question";
export default function FAQ() {
  return (
    <section id="faq" className=" bg-black text-white md:px-32 md:py-20 h-full p-10">
      <h1 className="text-5xl font-bold sm:m-4">FAQ</h1>
      <div className="flex flex-col gap-8 my-2 sm:m-4">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </section>
  );
}
