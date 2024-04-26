/**MobNavBar info
 * 
 * Goal: Using backdrop-filter : blur for the navbar I will blur what is 
 * on the background, when it's mobile and tablet the navbar will cover 
 * the whole screen 
 */

//Missing the navigation part , check https://codesandbox.io/p/sandbox/framer-motion-side-menu-mx2rw?file=%2Fsrc%2FNavigation.tsx%3A19%2C15

import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "../../hooks/useDimensions";
import { MenuToggle } from "./MenuToggle";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

function MobNavBar() {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="absolute top-0 left-0 bottom-0 w-72"
    >
      <motion.div className="absolute top-0 left-0 bottom-0 w-72 bg-white" variants={sidebar} />
       <MenuToggle toggle={() => toggleOpen()}/>
    </motion.nav>
  )
}

export default MobNavBar