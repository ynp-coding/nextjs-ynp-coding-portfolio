"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

import { Tabs, Tab } from "@heroui/react";
import ListProjects from "./list-projects";

const projects = [
  {
    id: 1,
    title: "Workflow Pipeline & Data management",
    description: "พัฒนาระบบการรับ-ส่งข้อมูลผ่าน Api และระบบการจัดการข้อมูล",
    techStack: ["Airflow", "Python", "Api", "Docker"],
    link: "/project",
    status: "completed",
  },
];

const tabs = [
  {
    id: "web",
    label: "Web Projects",
    content: <></>,
  },
  {
    id: "de",
    label: "Data Engineer",
    content: "",
  },
];

export default function Projects() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              staggerChildren: 0.15,
            },
          });
        } else {
          controls.start({ opacity: 0, y: 30 });
        }
      },
      { threshold: 0.2 }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [controls]);

  return (
    <section
      id="projects"
      className="container min-h-screen px-4 py-24 mx-auto sm:px-8"
      ref={ref}
    >
      <motion.h1
        className="mb-4 text-4xl font-bold text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 2 }}
      >
        ผลงาน
      </motion.h1>

      <div className="flex flex-col w-full">
        <Tabs
          aria-label="Dynamic tabs"
          fullWidth={true}
          size="lg"
          className="font-semibold"
          defaultSelectedKey={"photos"}
        >
          <Tab key="web" title="Web Projects">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {projects.map((p) => (
                <ListProjects key={p.id} {...p} />
              ))}
            </div>
          </Tab>
          <Tab key="de" title="Data Engineer">
            <div className="">
              {projects.map((p) => (
                <ListProjects key={p.id} {...p} />
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
}
