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
    title: "Portfolio Website",
    description:
      "A personal portfolio site built with Next.js and Tailwind CSS.",
    techStack: ["Next.js", "Tailwind CSS", "React"],
    link: "https://github.com/yp-engineering-dev/portfolio",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "An e-commerce platform with shopping cart, payment gateway integration, and admin panel.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    title: "Data Dashboard",
    description:
      "Real-time data dashboard with charts and analytics using React and D3.js.",
    techStack: ["React", "D3.js", "REST API"],
    link: "https://example.com/data-dashboard",
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
      className="min-h-screen bg-gray-50 px-4 sm:px-8 py-24"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
          Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(
            ({ id, title, description, techStack, link }, index) => (
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
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  {title}
                </h3>
                <p className="text-gray-600 mb-4">{description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/20 text-primary rounded px-2 py-1 text-sm font-medium"
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
