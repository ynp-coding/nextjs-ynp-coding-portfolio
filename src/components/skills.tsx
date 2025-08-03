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
    <section id="skills" className="min-h-screen px-4 sm:px-8 py-24" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
          ทักษะ
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ id, name, level, description }, index) => (
            <motion.div
              key={id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {name}
              </h3>
              <p className="text-primary font-semibold mb-3">{level}</p>
              {description && (
                <p className="text-gray-600 text-sm leading-relaxed">
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
