"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
      <motion.h1
        className="mb-4 text-4xl font-bold text-center text-gray-900"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1.5 }}
      >
        เกี่ยวกับเรา
      </motion.h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <Image
            className="w-[420px] h-[400px] rounded-md drop-shadow-[0_0_20px_rgba(0,0,0,0.2)]"
            src="/icons/banner-logo-5.png"
            alt="Banner About logo"
            width={1000}
            height={1000}
            priority
          />
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1.6, delay: 0.4 }}
          className="col-span-2 space-y-2"
        >
          <p className="indent-8">
            <span className="font-semibold">YNP Coding</span>{" "}
            คือทีมพัฒนาระบบที่เชี่ยวชาญด้าน
            การออกแบบและพัฒนาซอฟต์แวร์ตามความต้องการของลูกค้า
            ทั้งในรูปแบบเว็บแอปพลิเคชัน โมบายแอป ระบบหลังบ้าน
            และการเชื่อมต่อกับบริการภายนอก เช่น API, IoT, หรือระบบต่าง ๆ
          </p>
          <p className="indent-8">
            เรามุ่งมั่นในการสร้างสรรค์ผลงานที่มีคุณภาพ ใช้งานง่าย
            และสามารถขยายต่อได้ในอนาคต
            ด้วยเทคโนโลยีที่ทันสมัยและมาตรฐานการพัฒนาระดับสากล
            พร้อมให้คำปรึกษาทางเทคนิคและวางระบบให้สอดคล้องกับการใช้งานจริงของธุรกิจคุณ
          </p>

          <motion.div
            className="px-4 py-2"
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            transition={{ duration: 2.5, delay: 0.8 }}
          >
            <h2 className="mb-2 text-lg font-semibold">บริการของเรา:</h2>
            <ul className="space-y-1 list-disc list-inside">
              <li>
                พัฒนาเว็บแอปและระบบหลังบ้าน (Web Application, Admin Dashboard)
              </li>
              <li>ออกแบบและพัฒนา RESTful API</li>
              {/* <li>
                เชื่อมต่อระบบ ERP, CRM, ระบบบัญชี, ระบบจัดการคลังสินค้า ฯลฯ
              </li>
              <li>วางโครงสร้างฐานข้อมูลและออกแบบระบบที่สามารถปรับขยายได้</li>
              <li>DevOps, Docker, CI/CD, Cloud Deployment (เช่น AWS, GCP)</li>
              <li>ให้คำปรึกษาด้านเทคนิคและปรับปรุงระบบเดิม</li> */}
            </ul>
          </motion.div>

          <motion.div
            className="px-4 py-2"
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            transition={{ duration: 3.2, delay: 1.6 }}
          >
            <h2 className="mb-2 text-lg font-semibold">ทำไมต้องเลือกเรา:</h2>
            <ul className="space-y-1 list-disc list-inside">
              <li>
                เข้าใจความต้องการของธุรกิจ เราไม่ได้แค่เขียนโค้ด
                แต่เราเข้าใจบริบทการใช้งานจริง
              </li>
              <li>ออกแบบระบบให้เหมาะสมกับการเติบโตในอนาคต</li>
              <li>สื่อสารง่าย ตรงประเด็น และเป็นกันเอง</li>
              <li>ส่งมอบงานตรงเวลา พร้อมเอกสารประกอบครบถ้วน</li>
            </ul>
          </motion.div>

          <motion.div
            className="px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ duration: 3.6, delay: 2.4 }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="text-red-700"
            >
              <Link href={"#contact"} className="underline">
                คลิกเลย! หากสนใจร่วมงานหรือขอใบเสนอราคา ติดต่อเราได้เลย
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </section>
  );
}
