/**
 * MobNavBar — full-screen mobile navigation with backdrop blur.
 *
 * Purpose:
 *  - Provides a mobile-first navigation that can cover the entire screen when open.
 *  - Uses Framer Motion to animate the opening/closing of the side menu.
 *
 * Behavior:
 *  - Toggled via MenuToggle (hamburger button).
 *  - Blurs the content behind using CSS backdrop-filter.
 *  - May prevent body scroll when open (ensure body overflow handling if needed).
 *
 * Accessibility:
 *  - Manage focus trap when open (focus stays within the menu).
 *  - Expose aria-expanded on the toggle, and close on Esc key.
 *
 * Expected result:
 *  - Smooth open/close animation with no layout shifts, responsive to touch/keyboard.
 *
 * TODO:
 *  - Implement actual navigation list (links/sections).
 *  - Consider closing on route change and on overlay click.
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

  const toggleValues = () => {
    toggleOpen();
    if(isOpen) {
      document.getElementById("root")?.classList.remove('no-scroll')
    }else{
      document.getElementById("root")?.classList.add('no-scroll')
    }
  }
  return (
  {/* Motion nav wrapper
      Classes:
      - absolute top-0 left-0 bottom-0 → anchors nav to viewport
      - animated between "open" and "closed" states
      - custom={height} ensures clipPath scales with container height
  */}
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="absolute top-0 left-0 bottom-0"
    >
      {/* Background panel
        - fixed full-screen overlay
        - backdrop-blur-xl → frosted glass effect
        - border-gradient-full → gradient applied to all edges
        - variants={sidebar} → controls clipPath animation
      */}
      <motion.div className="fixed z-20 top-0 left-0 bottom-0 w-screen backdrop-blur-xl  border-gradient border-gradient-full" variants={sidebar} />
        {/* Menu toggle (hamburger button) */}
       <MenuToggle toggle={() => toggleValues()}/>
    </motion.nav>
  )
}

export default MobNavBar