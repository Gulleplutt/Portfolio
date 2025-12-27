"use client";

import Image from "next/image";
import ProjectContainer from "@/components/projectContainer";
import ProjectStrip from "@/components/projectStrip";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col font-sans overflow-y-auto">
      <motion.div
        className="fixed inset-0 -z-10"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage:
            "linear-gradient(270deg, #030712, #020617, #020617, #030712)",
          backgroundSize: "600% 600%",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => setAboutOpen(!aboutOpen)}
          className="
            bg-black/80 dark:bg-white/90
            text-white dark:text-black
            px-6 py-2 rounded-b-xl
            text-sm font-medium
            backdrop-blur
            shadow-lg
            hover:scale-105 transition
          "
        >
          {aboutOpen ? "Close" : "About me"}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: aboutOpen ? "320px" : "0px",
          opacity: aboutOpen ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 14,
        }}
        className="
          fixed top-0 left-0 w-full z-10
          overflow-hidden
          bg-black/90 dark:bg-white/95
          text-white dark:text-black
          backdrop-blur-xl
          shadow-2xl
        "
      >
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-left">
              <h2 className="text-2xl font-semibold mb-4">About me</h2>
              <p className="text-lg leading-relaxed opacity-90">
                Hello, my name is Simon Henriksson. I am passionate about
                programming and enjoy exploring different languages, as long as
                the project is interesting and challenging. The languages I have
                the most experience with are React, C++, and Python.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/mtd.jpg"
                alt="Picture of the author"
                width={140}
                height={140}
                className="rounded-xl shadow-lg"
              />
              <div className="mt-4 flex flex-col items-center space-y-2 text-sm">
                <a
                  href="mailto:karlsimon.henriksson@gmail.com"
                  className="hover:underline"
                >
                  karlsimon.henriksson@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/simon-henriksson-61758b259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <main className="flex flex-col w-full pt-30 pb-32">
        <section className="min-h-[70vh] flex flex-col justify-center items-center text-center mb-32">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white relative z-10">
              Welcome to My Portfolio
            </h1>

            <motion.h1
              aria-hidden
              className="
                absolute inset-0
                text-5xl md:text-7xl font-bold
                bg-gradient-to-r
                from-transparent
                via-black/25
                to-transparent
                dark:via-white/25
                bg-[length:200%_100%]
                bg-clip-text text-transparent
                pointer-events-none
              "
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "200% 50%" }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 8,
                ease: "easeInOut",
              }}
            >
              Welcome to My Portfolio
            </motion.h1>
          </div>

          <p className="text-xl md:text-2xl mt-6 text-gray-700 dark:text-gray-300">
            Hello! My name is Simon Henriksson
          </p>

          <motion.p
            className="text-xl mt-4 text-gray-700 dark:text-gray-300"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll to explore some of my projects.
          </motion.p>
        </section>

        {/* PROJECTS */}
        <div className="space-y-32">
          <ProjectContainer
            images={[
              "/images/skurksida1.png",
              "/images/skurksida2.png",
              "/images/bas1.png",
            ]}
            title="Website for student associations"
            text="I was the web manager for a student association and was responsible for developing two websites. The first was for the Orientation program for students in the technical faculty and was created for the association Skurkeriet. The purpose of the site was to provide information about the association, and I had significant creative freedom in both design and content. The second website was aimed at new students entering the foundation year. Its goal was to make it easy for the incoming students to quickly find their schedules and get clear information about the first period of student life. Both websites were built using Next.js and Tailwind CSS."
            links={[
              {
                label: "Skurkeriet",
                href: "https://skurkeriet-hemsida-git-main-simon-henrikssons-projects.vercel.app/",
              },
              { label: "Basåret", href: "https://basaret.vercel.app/" },
            ]}
          />

          <ProjectContainer
            images={["/images/ray.png", "/images/image.png"]}
            title="Ray Tracer"
            text="This project was carried out as part of the course TNCG15 – Global Illumination and Rendering at Linköping University. The project involved developing a program in C++ using Visual Studio to generate photorealistic images through a Monte Carlo-based ray tracer."
            reverse
            links={[
              {
                label: "GitHub",
                href: "https://github.com/Gulleplutt/TNCG15",
              },
            ]}
          />

          <ProjectContainer
            images={["/images/chess1.png", "/images/chess2.png"]}
            title="Blender simulation of chess"
            text="A scene created in Blender, with all objects and textures fully modeled in Blender. The project was carried out in a group as part of the course TNM061 at Linköping University. The goal was to create a highly realistic environment, featuring a room with a chessboard."
            links={[
              {
                label: "YouTube",
                href: "https://www.youtube.com/watch?v=wAktr5WBH_M",
              },
            ]}
          />

          <ProjectContainer
            images={[
              "/images/spel1.png",
              "/images/spel2.png",
              "/images/spel3.png",
              "/images/spel4.png",
            ]}
            title="Phadderistspelet"
            text="A web-based card game developed for new students as part of the course TDDD27 at Linköping University. Players collect cards in real life and can unlock them in the game using a password. The game allows players to compete against each other in turn-based matches. It was built using Next.js and Tailwind CSS, with a Firebase database."
            reverse
          />
        </div>
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Other Projects
          </h1>
        </div>


          <ProjectStrip
            projects={[
              {
                title: "Tjalfred the sheep dog",
                description: "A 2D pixel-art herding game in Godot where you play as a dog managing a flock. The sheep use a hybrid AI system—combining behavior trees for movement logic with a local LLM—to create expressive, lifelike reactions and decision-making.",
                tech: ["Godot", "Python"],
              },
              {
                title: "AI Instagram Caption Generator",
                description: "A computer vision pipeline that uses a ResNet18 CNN and Linear SVM to identify objects in images, coupled with a local Llama3 model to transform those keywords into creative social media captions. It demonstrates a seamless integration of image classification and natural language generation using Ollama.",
                tech: ["Python", "Machine learning", "Ollama"],
              },
              {
                title: "Augmented Reality tower defense game",
                description: "A collaborative Augmented Reality (AR) game built in Unity that transforms a physical room into a shared 3D battlefield. By using a ceiling-mounted QR code as a global spatial anchor, multiple players sync their devices to the same coordinate system, allowing them to defend a central base on a virtual playfield.",
                tech: ["Unity", "Augmented reality", "Muliplayer"],
              },
              {
                title: "Mosaic Image Reconstruction",
                description: "I developed a system to reconstruct target images using a limited image database, comparing Global Color Space Coverage and Local Color Matching algorithms. The project analyzed the balance between mathematical precision and human visual perception using SNR and S-CIELAB metrics",
                tech: ["Next.js", "Firebase", "Tailwind"],
              },
              {
                title: "Network Security Project",
                description: "A university project where we simulated a social engineering attack in a controlled environment. A Python program disguised as a browser update activated a local keylogger to study attack behavior and security defenses.",
                tech: ["Python"],
              },
            ]}
          />

        
      </main>
    </div>
  );
}
