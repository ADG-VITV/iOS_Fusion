import Image from "next/image";
export default function Speakers() {
  return (
    <section id="speakers" className="md:h-[100vh] bg-[#1A1A1A] text-white md:px-32 md:py-20 p-10">
      <h1 className="text-2xl md:text-5xl font-bold m-4">PAST SPEAKERS</h1>
      <div className="flex justify-between w-[90%] mx-auto my-8 gap-16 md:flex-row flex-col-reverse">
        <div className="flex sm:gap-8 items-center gap-2">
          <div className="flex flex-col text-right">
          <h1 className="text-5xl my-2" >Faiz ulla Sharief</h1>
          <p className="text-[1rem]">
            iOS Engineer at Apple
          </p>
          </div>
          <Image
            className="md:mt-[5rem] w-[15rem] md:h-[26rem]"
            src="/speaker1.png"
            alt="speaker1"
            width={500}
            height={500}
          />
        </div>
        <div className="flex sm:gap-8 items-center gap-2">
          <Image
            className="md:h-[26rem] w-[15rem]"
            src="/speaker2.png"
            alt="speaker2"
            width={500}
            height={500}
          />
          <div>

          <h1 className="text-5xl my-2">Farheen Ahmad</h1>
          <p className="text-[1rem]">
            Founder and CEO of Interality.ai
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}
