"use client";

import { Button } from "@heroui/react";
import { motion, useAnimation } from "framer-motion";
import {
  MapPin,
  Calendar,
  Facebook,
  Github,
  Youtube,
  Folder,
  ArrowRight,
  Contact2,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

export default function Hero() {
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
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16"
    >
      {/* Background animation */}
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-2 items-center gap-8 max-w-7xl w-full">
        {/* Left content */}
        <motion.div
          className="text-center md:text-left space-y-6"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl font-extrabold leading-tight drop-shadow-lg">
            <span className="text-yellow-500 text-4xl">YNP Coding</span>
            <br />
            <p>Web Application & Data Engineer</p>
          </h1>

          <p className="text-md">
            รับพัฒนาและออกแบบระบบ Web Application ที่ใช้งานได้จริง ปลอดภัย
            และตอบโจทย์ธุรกิจ พร้อมทั้งให้บริการด้าน การจัดการฐานข้อมูล และ
            สร้างระบบ Data Pipeline
            สำหรับการประมวลผลและวิเคราะห์ข้อมูลอย่างมีประสิทธิภาพ
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" /> นนทบุรี, กรุงเพทมหานคร
            </span>

            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              พร้อมให้บริการ
            </span>
          </div>

          <div className="pt-4 flex gap-4">
            <Button
              as={Link}
              href="#projects"
              color="primary"
              startContent={<Folder className="w-4 h-4 mr-1" />}
              endContent={<ArrowRight className="w-4 h-4 mr-1" />}
            >
              แสดงผลงาน
            </Button>
            <Button
              as={Link}
              href="#contact"
              variant="bordered"
              color="default"
              startContent={<Phone className="w-4 h-4 mr-1" />}
            >
              ติดต่อเรา
            </Button>
          </div>

          <hr className="text-gray-300/80" />

          <div className="flex gap-4 items-center">
            ติดตามเรา :
            <Link
              href={"https://www.facebook.com/profile.php?id=61578989523331"}
              target="_blank"
            >
              <Facebook size={18} />
            </Link>
            <Link href={"https://github.com/ynp-coding"} target="_blank">
              <Github size={18} />
            </Link>
            <Youtube size={18} />
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.8 }}
          >
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-white/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
            <Image
              className="rounded-full object-cover w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
              src="/banner-logo.jpg"
              alt="YNP Coding logo"
              width={1000}
              height={1000}
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
