"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@heroui/react";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Workflow Pipeline & Data management",
    description: "พัฒนาระบบการรับ-ส่งข้อมูลผ่าน Api และระบบการจัดการข้อมูล",
    techStack: ["Airflow", "Python", "Api", "Docker"],
    link: "",
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
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center text-gray-900">
          ผลงาน
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(
            ({ id, title, description, techStack, link }, index) => (
              <motion.div
                key={id}
                className="p-6 transition-shadow rounded-lg shadow-md hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <h3 className="mb-3 text-2xl font-semibold text-gray-800">
                  {title}
                </h3>
                <p className="mb-4 text-gray-600">{description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-sm font-medium rounded bg-primary/20 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {link && (
                  <Button
                    as="a"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    variant="flat"
                    size="sm"
                  >
                    View Project
                  </Button>
                )}
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
