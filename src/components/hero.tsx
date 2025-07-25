"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Github } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      <motion.div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-white/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="relative text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          <span className="text-yellow-500">YNP Coding</span>
          <br />
          <span>Web Application</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-600/90 drop-shadow-md">
          รับพัฒนาระบบ Web Application แบบครบวงจร <br />
          ที่ออกแบบมาเพื่อให้ตอบโจทย์ธุรกิจของคุณอย่างแท้จริง
        </p>
      </motion.div>

      <Image
        className="h-[650] w-[650] rounded-full"
        src={"/banner-logo.jpg"}
        alt="imamge logo"
        width={"1000"}
        height={"1000"}
      />
    </section>
  );
}
