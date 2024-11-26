import { useActiveSectionContext } from "@/container/active-section";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./type";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        const handleSetActiveSection = () => {
            if (inView && Date.now() - timeOfLastClick > 1000) {
                setActiveSection(sectionName);
            }
        };

        handleSetActiveSection();

        // Optional: You can return a cleanup function if needed
        return () => {
            // Cleanup logic if necessary
        };
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref,
    };
}