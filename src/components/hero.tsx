"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Github } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 overflow-hidden"
    >
      {/* Background subtle animated circles */}
      <motion.div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-white/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="relative text-center max-w-xl px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo */}
        <div className="mx-auto mb-6 w-24 h-24 relative">
          <Image
            src="/globe.svg"
            alt="YP Engineering Logo"
            fill
            sizes="96px"
            style={{ objectFit: "contain" }}
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
          Welcome to <span className="text-yellow-300">YP Engineering</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md">
          Innovating the future, one project at a time.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center gap-6">
          <Button
            as={Link}
            href="/projects"
            variant="solid"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 shadow-lg shadow-yellow-400/40 transition-transform hover:scale-105"
          >
            Explore Projects
          </Button>

          <Button
            as={Link}
            href="/contact"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 font-semibold transition-transform hover:scale-105"
          >
            Contact Us
          </Button>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-6 mt-12">
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-blue-600 hover:text-blue-800 transition-colors bg-white p-3 rounded-full shadow-lg"
          >
            <Facebook size={32} />
          </motion.a>

          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-blue-400 hover:text-blue-600 transition-colors bg-white p-3 rounded-full shadow-lg"
          >
            <Twitter size={32} />
          </motion.a>

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-900 hover:text-black transition-colors bg-white p-3 rounded-full shadow-lg"
          >
            <Github size={32} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
