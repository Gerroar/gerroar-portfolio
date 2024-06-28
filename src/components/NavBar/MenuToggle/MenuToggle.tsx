import { motion} from "framer-motion";
import { firstPath, svgVariants } from "./ToggleVariants";
import { secondPath } from "./ToggleVariants";
import { thirdPath } from "./ToggleVariants";

interface MenuToggleProps {
    toggle: any,
}

export const MenuToggle = ({ toggle }: MenuToggleProps) => {

    /**Variants explanation:
     * Because the parent of this component MobNavBar, has variants with the same label
     * tags ( opened and closed), there is no need to repeat the procces of the parent 
     * in the child, it just needs variants with the same labels ( opened and closed)
     */



    return (
        <button onClick={toggle} id="menuLines" className="fixed z-20 outline-none border-none cursor-pointer top-[80vh] left-[47.3vw] w-14 h-12 bg-transparent
        md:left-[48.5vw]">
            <motion.svg width="23" height="23" viewBox="0 0 23 23"
            variants={svgVariants}
            >
                <motion.path
                    fill="transparent"
                    strokeWidth="3"
                    stroke="hsl(0, 0%, 100%)"
                    strokeLinecap="round"
                    d="M 2 2.5 L 20 2.5"                    
                    variants={firstPath}
                />
                <motion.path
                    fill="transparent"
                    strokeWidth="3"
                    stroke="hsl(0, 0%, 100%)"
                    strokeLinecap="round"
                    d="M 2 9.423 L 20 9.423"
                    variants={secondPath}
                />
                <motion.path
                    fill="transparent"
                    strokeWidth="3"
                    stroke="hsl(0, 0%, 100%)"
                    strokeLinecap="round"
                    d="M 2 16.346 L 20 16.346"
                    variants={thirdPath}
                />
            </motion.svg>
        </button>
    )
};