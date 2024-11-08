"use client"

import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project-card";
import { useSectionInView } from "@/lib/useinView";
import { motion, AnimatePresence } from "framer-motion"


export default function Projects() {
    const {ref } = useSectionInView("#projects", 0.1);
    return (
        <section id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
           My Recent {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Work
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl mb-8"
          >
            Here are a few Projects I've Worked on recently.
            
          </motion.p>
            </SectionHeading>


            <div>
                {
                    projectsData.map((project, index) => (
                        <Project {...project} key= {index}/>
                    ))
                }
            </div>

        </section>
    )
}