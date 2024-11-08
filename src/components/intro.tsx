'use client'

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { BsLinkedin, BsGithub, BsEnvelope, BsInstagram, BsFacebook } from "react-icons/bs"
import { motion, AnimatePresence } from "framer-motion"
import { useSectionInView } from "@/lib/useinView"
import { useActiveSectionContext } from "@/container/active-section"
import { FaGithubSquare } from "react-icons/fa"

const skills = ["HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Bootstrap 5",
    "Tailwind",
    "Next.js",
    "Node.js",
    "React.js",
    "React Native",
    ".NET",
    "MVC 5",
    "SQL",
    "Telerik",
    "Git",
    "Redux Toolkit",
    "Framer Motion"]

export default function Intro() {
  const { ref } = useSectionInView("#home", 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={ref}
      id="home"
      className="mb-2 max-w-[75rem] text-center sm:mb-0"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="relative inline-block mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Image
                src="/intro.png"
                width={380}
                height={380}
                alt="Rophile Ahmed Khan"
                className="rounded-full border-4 border-purple-500 shadow-lg"
                priority
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 bg-purple-500 rounded-full p-3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            >
              <span className="text-4xl">👋</span>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Rophile Ahmed Khan
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl mb-8"
          >
            Driving digital transformation with a focus on
            <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={skills[currentSkillIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block font-semibold text-purple-400"
              >
                {skills[currentSkillIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.p>

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="flex flex-wrap justify-center gap-4"
>
  <Link
    href="#contact"
    onClick={() => {
      setActiveSection("#contact")
      setTimeOfLastClick(Date.now())
    }}
    className="bg-purple-600 hover:bg-purple-700group  text-white px-7
     py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
     hover:bg-purple-700 dark:bg-purple-600 active:scale-105 transition"
  >
    <BsEnvelope className="text-2xl" /> 
    <span>Contact Me</span>
  </Link>
  <a
      className="group bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
       focus:scale-110 hover:scale-110  dark:bg-blue-700 active:scale-105 transition"
      href="https://www.linkedin.com/in/rophile-ahmed-khan/"
      target="_blank"
    >
      <BsLinkedin />
    </a>
  <a
      className="group bg-gray-900 text-white px-4 py-3 flex
            items-center gap-2 rounded-full focus:scale-[1.15]  hover:scale-[1.15] 
             active:scale-105 transition cursor-pointer borderBlack  
             dark:text-white/60 dark:bg-white/10 
            "
      href="https://github.com/rophilekhan"
      target="_blank"
    >
      <BsGithub />
    </a>
  <a
    href="https://www.instagram.com/rophile_khan/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-pink-600 hover:bg-pink-700 text-white font-bold  group px-4 py-3 flex
            items-center gap-2 rounded-full focus:scale-[1.15]  hover:scale-[1.15] 
             active:scale-105 transition cursor-pointer borderBlack  
             dark:text-white/80 dark:bg-pink-600 "
  >
    <BsInstagram className="text-xl" /> 
    
  </a>
  <a
    href="https://www.facebook.com/profile.php?id=100073433437092"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-700 hover:bg-blue-800 text-white font-bold   group px-4 py-3 flex
            items-center gap-2 rounded-full focus:scale-[1.15]  hover:scale-[1.15] 
             active:scale-105 transition cursor-pointer borderBlack  
             dark:text-white/80 dark:bg-blue-700"
  >
    <BsFacebook className="text-xl" /> 

  </a>
</motion.div>
        </motion.div>
      </div>
    </section>
  )
}