import { motion } from "framer-motion";

const Path = (props: any) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 100%)"
        strokeLinecap="round"
        {...props}
    />
);

export const MenuToggle = ({ toggle }: any) => (
    <button onClick={toggle} id="menuLines" className="fixed z-20 outline-none border-none cursor-pointer top-[80vh] left-[47.3vw] w-14 h-12 bg-transparent
    md:left-[48.5vw]">
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </button>
);