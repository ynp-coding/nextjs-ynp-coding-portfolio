"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface Skill {
  id: number;
  name: string;
  level: string; // เช่น "Beginner", "Intermediate", "Advanced"
  description?: string;
  icon?: React.ReactNode;
}

const skills: Skill[] = [
  {
    id: 1,
    name: "Python",
    level: "intermidae",
    description: "",
  },
  {
    id: 2,
    name: "Docker",
    level: "basic",
    description: "Containerization for consistent deployment environments.",
  },
];

export default function Skills() {
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
      id="skills"
      className="container min-h-screen px-4 py-24 mx-auto sm:px-8"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center text-gray-900">
          ทักษะ
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ id, name, level, description }, index) => (
            <motion.div
              key={id}
              className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <h3 className="mb-2 text-2xl font-semibold text-gray-800">
                {name}
              </h3>
              <p className="mb-3 font-semibold text-primary">{level}</p>
              {description && (
                <p className="text-sm leading-relaxed text-gray-600">
                  {description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
