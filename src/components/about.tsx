"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function About() {
  const controls = useAnimation();
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 50 });
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [controls]);

  return (
    <section
      id="about"
      className="flex items-center justify-center min-h-screen bg-white px-24 sm:px-8"
      ref={ref}
    >
      <motion.div
        className="max-w-2xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-900">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          At <span className="font-semibold text-primary">YP Engineering</span>,
          we are passionate about building innovative digital solutions. Our
          mission is to empower businesses through technology—bridging ideas and
          execution with modern tools, clean code, and intuitive design.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          With experience in <strong>web development</strong>,{" "}
          <strong>cloud infrastructure</strong>, and{" "}
          <strong>data engineering</strong>, our team is committed to delivering
          scalable and maintainable solutions that create real-world impact.
        </p>
      </motion.div>
    </section>
  );
}
