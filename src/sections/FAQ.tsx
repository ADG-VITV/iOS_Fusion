import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import Question from "@/components/Question";
export default function FAQ() {
  return (
    <section id="faq" className=" bg-black text-white md:px-32 md:py-20 h-full p-10">
      <h1 className="text-5xl font-bold m-4">FAQ</h1>
      <div className="flex flex-col gap-8 m-4">
        <Question ques='1. What is the team size for the Appathon?'  ans='1-3'/>
        <Question ques ='2. Do we need any prerequisite knowledge?' ans='No, but it’s great if you know a bit'/>
        <Question ques = '3. Will OD be given during the course of the Appathon?' ans='Yes'/>
        <Question ques= '' ans=''/>
        <Question ques= '' ans=''/>
        <Question ques = '' ans=''/>
      </div>
    </section>
  );
}
