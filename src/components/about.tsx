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
      className="container min-h-screen px-4 py-24 mx-auto sm:px-8"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="mb-4 text-4xl font-bold text-gray-900">เกี่ยวกับเรา</h1>

        <p className="text-lg leading-8 text-gray-700">
          <span className="font-semibold">YNP Coding</span> รับพัฒนาระบบ
          <span className="font-semibold text-primary">
            {" "}
            Web Application แบบครบวงจร{" "}
          </span>
          เราเชื่อว่าระบบที่ดีไม่เพียงแต่ต้องสวยงามและใช้งานง่าย
          แต่ยังต้องตอบโจทย์การดำเนินธุรกิจของคุณได้จริง เราจึงใส่ใจในทุกขั้นตอน
          ตั้งแต่การวิเคราะห์ความต้องการ ออกแบบระบบ พัฒนา ไปจนถึงดูแลหลังส่งมอบ
        </p>
      </motion.div>
    </section>
  );
}
