"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";
import Fluid from "webgl-fluid";

export default function Iphone() {
  const canvas = useRef(null);
  useEffect(function () {
    let c = canvas.current;
    Fluid(c);
  }, []);
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* <Image
        src="/iphone.png"
        alt="iphone"
        width={500}
        height={500}
        className="relative z-10"
      /> */}
      <canvas
        className=""
        ref={canvas}
        style={{ width: "100%", height: "100%" }}
      ></canvas>
      {/* <div className="text-3xl font-bold text-white absolute top-[13rem] right-12">
        <Image
          className="w-[7rem]"
          src="/IOSF.png"
          alt="iOS Fusion"
          width={500}
          height={500}
        />
        <span className="text-[#5F2EEA]">iOS</span> FUSION
        <p className="text-center">7.0</p>
        <Image
          className="w-[5rem] mx-auto"
          src="/code.png"
          alt="iOS Fusion"
          width={500}
          height={500}
        />
      </div> */}
      {/* <Image src="/image.png" alt="iphone" width={500} height={500} /> */}
    </motion.div>
  );
}
