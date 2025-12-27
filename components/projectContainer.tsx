"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

interface ScrollMeetProps {
  images: string[];
  text: string;
  title: string;
  height?: string;
  reverse?: boolean;
  links?: {
    href: string | undefined;
    label: string;
  }[];
}

export default function ProjectContainer({
  images,
  text,
  title,
  height = "100vh",
  reverse = false,
  links = [],
}: ScrollMeetProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  // PARALLAX
  const textY = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], ["6px", "0px"]);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center"
      style={{ height }}
    >
     <div
        className={`flex w-full max-w-7xl px-4 gap-10 items-center flex-col
          ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
        `}
      >


        {/* TEXT SIDE */}
        <motion.div
          style={{ y: textY, opacity, filter: blur }}
          className="flex-[1.5] flex flex-col text-left"
        >
          <h3 className="text-3xl md:text-3xl font-semibold mb-2 text-black dark:text-white">
            {title}
          </h3>

          <p className="text-lg md:text-xl font-medium text-black dark:text-white">
            {text}
          </p>

          {links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-4">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    px-4 py-2 rounded-full
                    border border-black/20 dark:border-white/30
                    text-sm font-medium
                    text-black dark:text-white
                    hover:bg-black hover:text-white
                    dark:hover:bg-white dark:hover:text-black
                    transition-colors
                  "
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </motion.div>

        {/* PHOTO STACK */}
        <motion.div
          style={{ y: imageY, opacity, filter: blur }}
          className="flex-1 flex justify-end relative"
        >
          <div className="relative w-[420px] h-[320px] md:w-[500px] md:h-[390px] cursor-pointer">
            {images.map((src, i) => {
              const isFront = i === index;
              const offset = (i - index + images.length) % images.length;

              return (
                <motion.div
                  key={i}
                  onClick={isFront ? next : undefined}
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ zIndex: images.length - offset }}
                  initial={false}
                  animate={{
                    rotate: 0,
                    scale: isFront ? 1 : 0.97 - offset * 0.015,
                    y: offset * 10,
                    opacity: isFront ? 1 : 0.6,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                  }}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="rounded-2xl shadow-xl object-cover"
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
