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
      className="container mx-auto min-h-screen flex items-center"
    >
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="order-2 md:order-1 p-4 col-span-2">
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
                <MapPin className="w-4 h-4 mr-1" /> นนทบุรี, กรุงเทพมหานคร
              </span>

              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                พร้อมให้บริการ
              </span>
            </div>

            <div className="pt-4 flex gap-4 justify-center md:justify-start">
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

            <div className="flex gap-4 items-center justify-center md:justify-start">
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
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <motion.div
            className=""
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Main image */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Image
                className="rounded-full w-[450px] h-[450px] md:w-[280px] md:h-[280px] lg:w-[450px] lg:h-[450px]"
                src="/icons/banner-logo.png"
                alt="YNP Coding logo"
                width={1000}
                height={1000}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
