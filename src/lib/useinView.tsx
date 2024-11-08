
import { useActiveSectionContext } from "@/container/active-section";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./type";

export function useSectionInView(sectionName: SectionName, threshold= 0.75) {
    const { ref, inView } = useInView({
        threshold,
    });
    const { setActiveSection, timeOfLastCLick } = useActiveSectionContext();

    useEffect(()=> {
        if (inView && Date.now() - timeOfLastCLick > 1000) {
            setActiveSection(sectionName)
        }
    }, [inView, setActiveSection, timeOfLastCLick, sectionName])

    return{
        ref,
    }
}