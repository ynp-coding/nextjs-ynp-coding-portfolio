"use client";

import { Button, Chip } from "@heroui/react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  status: "Done" | "In Progress" | "Planning" | string;
}

const statusToColor = (
  status: string
): "success" | "warning" | "default" | "primary" | "danger" => {
  switch (status.toLowerCase()) {
    case "done":
    case "completed":
      return "success";
    case "in progress":
    case "wip":
      return "warning";
    case "planning":
      return "default";
    default:
      return "primary";
  }
};

export default function ListProjects({
  id,
  title,
  description,
  techStack,
  link,
  status,
}: Project) {
  return (
    <motion.div
      key={id}
      className="p-6 transition-shadow rounded-lg shadow-md hover:shadow-lg bg-white/70"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="mb-3 text-2xl font-semibold text-gray-800">{title}</h3>
        <Chip color={statusToColor(status)} variant="flat">
          {status}
        </Chip>
      </div>

      <p className="mb-4 text-gray-600">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, i) => (
          <span
            key={`${id}-${tech}-${i}`}
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
          aria-label={`View ${title}`}
        >
          View Project
        </Button>
      )}
    </motion.div>
  );
}
