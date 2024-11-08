
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-context";

interface SwitchProps {
    setActiveButton: () => void;
}

export default function Switch({
    setActiveButton,
}: SwitchProps) {
    const [isHovered, setIsHovered] = useState(false);
    const { theme } = useTheme();

    const switchVariants = {
        visible: { scale: 1, opacity: 1, y: 0 },
        hover: { scale: 1.1 },
        hidden: { scale: 0.8, opacity: 0, y: 10 }
    };

    return (
        <div className="relative">
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        key="hiddenButton"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={switchVariants}
                        transition={{ duration: 0.2 }}
                        className="absolute -top-12 left-1/2 transform -translate-x-1/2"
                    >
                        <div className="bg-white dark:bg-gray-950 rounded-full p-3 shadow-lg">
                            {theme === "light" ? 
                                <Moon size={15} className="text-gray-950" /> :  // Changed to dark color for light theme
                                <Sun size={15} className="text-white" /> // Changed to light color for dark theme
                            }
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={setActiveButton}
                className={`w-[3.5rem] h-[3.5rem] rounded-full drop-shadow-lg backdrop-blur-[0.5rem] 
                border border-gray-800 dark:border-gray-200 flex items-center justify-center 
                ${theme === "light" ? "bg-gray-950 text-white" : "bg-white text-gray-950"}`}
                variants={switchVariants}
                initial="visible"
                whileHover="hover"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {theme === "light" ? 
                    <Sun size={15} className="text-white" /> : 
                    <Moon size={15} className="text-gray-950" />
                }
            </motion.button>
        </div>
    );
}