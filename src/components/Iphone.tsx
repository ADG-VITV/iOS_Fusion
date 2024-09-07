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
    <div className="w-[20vw] h-[20vh]">
      <Image
        src="/iphone.png"
        alt="iphone"
        width={500}
        height={500}
        className="relative z-10"
      />
      <canvas
        className="rounded-[3rem] absolute top-[43vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        ref={canvas}
        style={{ width: "20%", height: "28rem" }}
      ></canvas>
      {/* <Image src="/image.png" alt="iphone" width={500} height={500} /> */}
    </div>
  );
}
