/**MobNavBar info
 * 
 * Goal: Using backdrop-filter : blur for the navbar I will blur what is 
 * on the background, when it's mobile and tablet the navbar will cover 
 * the whole screen 
 */

//Missing the navigation part , check https://codesandbox.io/p/sandbox/framer-motion-side-menu-mx2rw?file=%2Fsrc%2FNavigation.tsx%3A19%2C15


import { LayoutGroup, motion, useAnimation, useCycle } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MenuToggle } from "../MenuToggle";
import { sidebarVariants } from "./MnbVariants";

function MobNavBar() {
  var root = document.documentElement;
  //Function to use more precise framer animation controls
  const sidebarControls = useAnimation();
  //State for the toggling between the open and close menu
  const [isOpen, toggleOpen] = useCycle(false, true);
  //State for store the window height
  const [height, setHeight] = useState(window.innerHeight);
  //State for toggle visible
  const [isVisible, setIsVisible] = useState(false);
  //Variable for storing previous scroll
  const prevScrollPos = useRef(0);
  useEffect(() => {
    sidebarControls.start('show');
    const handleResizeHeightWindow = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResizeHeightWindow);
    /**Toggle visibility , will change when the user scrolls */
    const toggleVisibility = () => {
      const currentScrollPos = window.scrollY;
      // Button is displayed after scrolling for 500 pixels
      console.log(currentScrollPos)
      if (currentScrollPos > 300 && currentScrollPos > prevScrollPos.current) {
        setIsVisible(true);
        sidebarControls.start('hidde');
      } else {
        setIsVisible(false);
        sidebarControls.start('show');
      }
      prevScrollPos.current = currentScrollPos;
    };
    window.addEventListener("scroll", toggleVisibility);
    /**Toggle visibility , will change when the user scrolls */
    return () => {
      window.removeEventListener("resize", handleResizeHeightWindow);
      /**Toggle visibility */
      window.removeEventListener("scroll", toggleVisibility);
      /**Toggle visibility */
    }
  }, [height, isVisible])

  const toggleValues = () => {
    toggleOpen();
    if (isOpen) {
      sidebarControls.start('open');
      root.classList.add('no-scroll');
    } else {
      sidebarControls.start('closed')
      root.classList.remove('no-scroll');
    }
  }


  return (
    <LayoutGroup>
      <motion.nav
        initial="closed"
        animate={sidebarControls}
      >
        <motion.div id="mobCircle" className="fixed z-20 left-0 top-0 bottom-0 w-screen backdrop-blur-xl  border-gradient border-gradient-full"
          variants={sidebarVariants}
          animate={sidebarControls}
        />
        <MenuToggle toggle={() => toggleValues()} />
      </motion.nav>
    </LayoutGroup>
  )
}

export default MobNavBar