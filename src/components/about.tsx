"use client"

import React from 'react';
import SectionHeading from './section-heading';
import Image from 'next/image';
import { useSectionInView } from '@/lib/useinView';

// Animation
import { motion } from "framer-motion";
import { Fade } from 'react-awesome-reveal';

export default function About() {
    const { ref } = useSectionInView("#about");

    return (
        <motion.section 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
            ref={ref}
            className="max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
        >
            <div className="container mx-auto">
                <Fade 
                    direction="up"
                    delay={400}
                    cascade damping={1e-1}
                    triggerOnce={true}
                >
                    <SectionHeading>
                        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                            LET ME {" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                                INTRODUCE 
                            </span>
                            <span className="text-2xl sm:text-3xl font-bold mb-4">
                                &nbsp; MYSELF 
                            </span>
                        </h1>
                    </SectionHeading>
                </Fade>

                <div className="grid xl:grid-cols-2 gap-4">
                    <div className="flex-1">
                        <div className="text-lg mt-12 xl:mt-3">
                            <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
                                <p className="mt-2 leading-relaxed text-base text-gray-700 dark:text-white">
                                    Passionate about programming, I’ve immersed myself in the art and science of building impactful digital experiences.
                                </p>
                                <p className="mt-2 leading-relaxed text-base text-gray-700 dark:text-white"> 
                                    I’m fluent in foundational technologies like {" "}
                                    <span className='italic bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600'>
                                        JavaScript, React.js, and React Native.
                                    </span>
                                </p>

                                <p className="mt-2 leading-relaxed text-base text-gray-700 dark:text-white"> 
                                    I thrive in developing {" "}
                                    <span className='italic bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600'>
                                        next-gen web technologies and products,
                                    </span>
                                    with a keen interest in the realms of {" "}
                                    <span className='italic bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600'>
                                        Deep Learning and Natural Language Processing.
                                    </span>
                                </p>

                                <p className="mt-2 leading-relaxed text-base text-gray-700 dark:text-white"> 
                                    With every project, I bring a deep enthusiasm for {" "}
                                    <span className='italic bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600'>
                                        modern JavaScript libraries and frameworks,
                                    </span> 
                                    especially {" "}
                                    <span className='italic bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600'>
                                        React.js,
                                    </span> 
                                    to create sleek, responsive and high-performing applications.
                                </p>
                            </Fade>
                        </div>
                    </div>

                    <div>
                        <Fade direction='right' delay={600} cascade damping={1e-1} triggerOnce={true}>
                            <Image
                                src="/man.png"
                                width={"600"}
                                height={"900"}
                                alt="A portrait of the author"
                                quality="100"
                                priority={true}
                                className="rounded-full mt-8 object-cover"
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </motion.section>
    );   
}