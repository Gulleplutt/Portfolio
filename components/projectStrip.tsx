"use client";
import { motion } from "framer-motion";

interface ProjectStripItem {
  title: string;
  description: string;
  tech: string[];
}

interface ProjectStripProps {
  projects: ProjectStripItem[];
}

export default function ProjectStrip({ projects }: ProjectStripProps) {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="
              rounded-xl
              bg-white/80 dark:bg-black/40
              backdrop-blur
              border border-black/10 dark:border-white/10
              shadow-lg
              p-5
              flex flex-col
              text-left
            "
          >
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
              {project.title}
            </h3>

            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="mt-auto flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="
                    text-xs
                    px-2 py-1
                    rounded-full
                    bg-black/10 dark:bg-white/10
                    text-black dark:text-white
                  "
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
