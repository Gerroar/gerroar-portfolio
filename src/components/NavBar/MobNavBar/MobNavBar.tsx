/**MobNavBar info
 * 
 * Goal: Using backdrop-filter : blur for the navbar I will blur what is 
 * on the background, when it's mobile and tablet the navbar will cover 
 * the whole screen 
 */

//Missing the navigation part , check https://codesandbox.io/p/sandbox/framer-motion-side-menu-mx2rw?file=%2Fsrc%2FNavigation.tsx%3A19%2C15


import { LayoutGroup, motion, useAnimation, useCycle } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MenuToggle } from "../MenuToggle/MenuToggle";
import { sidebarVariants } from "./MnbVariants";

function MobNavBar() {
  //Variable to acces HTML tag
  var root = document.documentElement;
  //Function to use more precise framer animation controls
  const sidebarControls = useAnimation();
  //State for the toggling between the open and close menu
  const [isOpen, toggleOpen] = useCycle(false, true);
  /**State for handling the need of doing double click into the 
   * button to trigger the animation, for the moment it's the 
   * only solution
   */
  const [firstTime, setFirstTime] = useState(true);
  //State for store the window height
  const [height, setHeight] = useState(window.innerHeight);
  //State for toggle visible
  const [isVisible, setIsVisible] = useState(false);
  //Variable for storing previous scroll
  const prevScrollPos = useRef(0);
  const toggleValues = () => {
    if (firstTime) {
      sidebarControls.start('opened');
      root.classList.add('no-scroll');
      setFirstTime(false);
    } else {
      toggleOpen();
      if (isOpen) {
        sidebarControls.start('opened');
        root.classList.add('no-scroll');
      } else {
        sidebarControls.start('closed')
        root.classList.remove('no-scroll');
      }
    }
  }

  useEffect(() => {
    sidebarControls.start('firstShow');
    const handleResizeHeightWindow = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResizeHeightWindow);
    /**Toggle visibility , will change when the user scrolls */
    const toggleVisibility = () => {
      const currentScrollPos = window.scrollY;
      // Button is displayed after scrolling for 500 pixels
      if (currentScrollPos > 500 && currentScrollPos > prevScrollPos.current) {
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

  return (
    <LayoutGroup>
      <motion.nav
        initial="closed"
        animate={sidebarControls}
      >
        <motion.div id="mobCircle" className="fixed z-20 left-0 top-0 bottom-0 w-screen backdrop-blur-xl  border-gradient border-gradient-full"
          initial="hidde"
          variants={sidebarVariants}
          animate={sidebarControls}
        />
        <MenuToggle toggle={() => toggleValues()} isOpen={isOpen} isVisible={isVisible} />
      </motion.nav>
    </LayoutGroup>
  )
}

export default MobNavBar