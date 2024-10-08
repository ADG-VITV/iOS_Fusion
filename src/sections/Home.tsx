import Navbar from "@/components/Navbar";
import Image from "next/image";
import CountdownTimer from "@/components/Countdown";
import Iphone from "@/components/Iphone";
import ADG from "@/components/ADG";
export default function Home() {
  const phoneNumber = "917007299680";
  const whatsappURL = `https://wa.me/${phoneNumber}`;
  return (
    <div className="flex">
      <div className="w-[70%] justify-center bg-gradient-to-r from-indigo-950 to-black h-[100vh]">
        <Navbar />
        <div className="md:m-16 lg:m-32 text-white">
          <p className="text-6xl font-bold my-4 text-[#5F2EEA] custom-font">
            iOS
          </p>
          <p className="text-6xl font-bold my-4 custom-font">FUSION 7.0 </p>
          <p className="text-md text-gray-400 mt-8">
            iOS Fusion 7.0: Where the future of app development unfolds.
            Experience the power to innovate like never before, pushing the
            limits of iOS technology and unlocking a world of possibilities.
          </p>
          <div className="flex my-8 mx-0 z-10">
            <button className="w-[12rem] text-lg h-[2.5rem] shadow-md bg-[#5F2EEA] border-0 rounded-full mr-4 z-10">
              <a
                target="_blank"
                href="https://gravitas.vit.ac.in/events/af543ff7-0bd3-476f-ad5d-e37805869d2c"
              >
                REGISTER
              </a>
            </button>
            <button className="w-[12rem] text-lg h-[2.5rem] shadow-md border rounded-full mr-4 z-10">
              <a target="_blank" href={whatsappURL}>
                REACH OUT
              </a>
            </button>
          </div>
          <ADG />
          <div className="">
            <CountdownTimer targetDate="2024-09-27T10:00:00" />
          </div>
        </div>
      </div>
      <div className="w-[30%] h-[100vh] flex justify-center items-center bg-[#5F2EEA]">
        <Image className="w-[60%]" src="/image.png" alt="iphone" width={500} height={500} />
        {/* <Iphone /> */}
      </div>
    </div>
  );
}
