"use client";
import React from "react";
import NextLink from "next/link";
import clsx from "clsx";
import { Link } from "@/lib/type";
import { useActiveSectionContext } from "@/container/active-section";
import { links } from "@/lib/data";

// Animation
import { motion } from "framer-motion";

type HeaderProps = { links: Link[] };

export default function Header({ links }: HeaderProps) {
    const { activeSection, setActiveSection, setTimeOfLastClick } = 
    useActiveSectionContext();

    return (
        <motion.header 
            className="hidden md:flex items-center justify-center fixed z-[999] w-full mt-4"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
        >
            <motion.div className="flex p-1 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop:backdrop-blur-[0.5rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
                <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500">
                    {links?.map((link) => (
                        <motion.li 
                            className="flex items-center justify-center relative"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            whileHover={{ scale: 1.05 }} // Scale effect on hover
                        >
                            <NextLink
                                className={clsx(
                                    "flex w-full items-center justify-center px-3 py-3 transition duration-300 ease-in-out dark:text-gray-50 dark:hover:text-gray-300",
                                    {
                                        "text-red-900 dark:text-purple-700":
                                        activeSection === link.hash,
                                    }
                                )}
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.hash);
                                    setTimeOfLastClick(Date.now);
                                }}
                            >
                                {link.nameEng}
                                {link.hash === activeSection && (
                                    <motion.span
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                        }}
                                        layoutId="activeSection"
                                        className="bg-gray-600 rounded-full absolute inset-0 -z-10 dark:bg-blue-900 shadow-md transition duration-300"
                                    />
                                )}
                            </NextLink>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </motion.header>
    );
}