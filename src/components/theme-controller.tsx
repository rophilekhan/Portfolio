
"use client";

import { useTheme } from "./theme-context";
import React from "react";
import Switch from "./switch";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <div className="fixed bottom-5 right-5 z-[999]">
            <Switch
                // Active button: Light theme mein white sun, Dark theme mein dark moon
                activeButton={theme === "light" ? 
                    <Sun size={20} className="text-white" /> : 
                    <Moon size={20} className="text-gray-950" />
                }
                // Hidden button: Light theme mein dark moon, Dark theme mein yellow sun
                hiddenButton={theme === "light" ? 
                    <Moon size={20} className="text-gray-950" /> : 
                    <Sun size={20} className="text-yellow-400" />
                }
                setActiveButton={toggleTheme}
            />
        </div>
    );
}