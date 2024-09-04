import Image from "next/image";
export default function Speakers() {
  return (
    <section id="speakers" className="md:h-[100vh] bg-[#1A1A1A] text-white md:px-32 md:py-20 p-10">
      <h1 className="text-5xl font-bold m-4">SPEAKERS</h1>
      <div className="flex justify-between my-8 gap-16 md:flex-row flex-col-reverse">
        <div className="flex gap-8 items-center">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            pariatur, quod nobis nihil nulla minus alias voluptatem molestiae,
            odit at excepturi quidem ducimus, impedit veritatis!
          </p>
          <Image
            className="mt-[5rem] md:h-[26rem] h-[20rem]"
            src="/iphone.png"
            alt="speaker1"
            width={500}
            height={500}
          />
        </div>
        <div className="flex gap-8 items-center">
          <Image
            className="md:h-[26rem] h-[20rem]"
            src="/iphone.png"
            alt="speaker2"
            width={500}
            height={500}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            laboriosam culpa saepe. Accusamus tempore necessitatibus tenetur
            quod corporis dicta sequi ipsa unde? Aliquam, accusantium facilis!
          </p>
        </div>
      </div>
    </section>
  );
}
