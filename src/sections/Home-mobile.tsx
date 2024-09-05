import CountdownTimer from "@/components/Countdown";
import Image from "next/image";
import Navbar from "@/components/Navbar-mobile";

export default function Home() {
  return (
    <>
      <main className="bg-black h-[100vh]">
        <div className="p-4 h-full">
          <nav className="flex justify-between">
            <Image
              className="w-[6rem]"
              src="/adglogo.png"
              width={500}
              height={500}
              alt="Landing page"
            />
            <Navbar />
          </nav>
          <div className="mx-2 text-white">
            <div className="flex gap-2 my-2">
              <p className="text-4xl font-bold my-4 text-[#5F2EEA]">iOS</p>
              <p className="text-4xl font-bold my-4">FUSION 7.0 </p>
            </div>
            <p className="text-sm text-gray-400 sm:mt-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              error vel optio vitae alias corporis quas libero nobis fugiat
              animi, provident quasi veniam quod. Laudantium!
            </p>
            <div className="flex my-4 mx-0 z-10 text-xs">
              <button className="w-[10rem] h-[2rem] shadow-md bg-[#5F2EEA] border-0 rounded-full mr-4">
                EXPLORE
              </button>
              <button className="w-[10rem] h-[2rem] shadow-md border rounded-full mr-4">
                ADD TO CALENDAR
              </button>
            </div>
          </div>
          <div
            className="bg-gradient-to-b from-transparent to-black h-64 w-full z-10 absolute bottom-0 left-0"
          ></div>
          <div className="flex flex-col justify-center items-center relative w-[15rem] mx-auto">
            <Image
              className="w-[70%] "
              src="/iphone.png"
              alt="iphone"
              width={500}
              height={500}
            />
            <div className="absolute text-xl">
              <CountdownTimer targetDate="2024-09-27T08:00:00" />
            </div>
          </div>
        </div>
        <div className="">
          <Image
            className="absolute bottom-0 z-20"
            src="/ADG-mobile.png"
            alt="ADG"
            width={500}
            height={500}
          />
        </div>
      </main>
    </>
  );
}
