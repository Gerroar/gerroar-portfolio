/**MobNavBar info
 * 
 * Goal: Using backdrop-filter : blur for the navbar I will blur what is 
 * on the background, when it's mobile and tablet the navbar will cover 
 * the whole screen 
 */

//Missing the navigation part , check https://codesandbox.io/p/sandbox/framer-motion-side-menu-mx2rw?file=%2Fsrc%2FNavigation.tsx%3A19%2C15


import { AnimationControls, LayoutGroup, motion, MotionValue, useAnimation, useCycle, useMotionValue, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MenuToggle } from "../MenuToggle/MenuToggle";
import { sidebarVariants } from "./MnbVariants";

function MobNavBar() {
  //Variable to acces HTML tag
  var root:HTMLElement = document.documentElement;
  //Function to use more precise framer animation controls
  const sidebarControls:AnimationControls = useAnimation();
  //State for the toggling between the open and close menu
  const [isOpen, toggleOpen] = useCycle(false, true);
  /**State for handling the need of doing double click into the 
   * button to trigger the animation, for the moment it's the 
   * only solution
   */
  const [firstTime, setFirstTime] = useState(true);
  //State for store the window height
  const [height, setHeight] = useState(window.innerHeight);
  let { scrollY } = useScroll();
  let scrollYOnDirectionChange:React.MutableRefObject<number> = useRef(scrollY.get());
  let lastPixelsScrolled:React.MutableRefObject<number|undefined> = useRef();
  let lastScrollDirection:React.MutableRefObject<string|undefined> = useRef();
  let pixelsScrolled:MotionValue<number> = useMotionValue(0);

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
    return () => {
      window.removeEventListener("resize", handleResizeHeightWindow);
      scrollY.on("change", latest => {
        let scrollYPrevious = scrollY.getPrevious();
        if (latest < 0) return;
        if (scrollYPrevious === undefined) return;
        let isScrollingDown = scrollYPrevious - latest < 0;
        let scrollDirection = isScrollingDown ? "down" : "up";
        let currentPixelsScrolled = pixelsScrolled.get();

        if (lastScrollDirection.current !== scrollDirection && lastPixelsScrolled !== undefined) {
          lastPixelsScrolled.current = currentPixelsScrolled;
          scrollYOnDirectionChange.current = latest;
        }

        if (isScrollingDown) {
          sidebarControls.start('hidde');
        } else {
          sidebarControls.start('show');
        }

        lastScrollDirection.current = scrollDirection;
        console.log()
      })
    }
  }, [height, scrollY])

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
        <MenuToggle toggle={() => toggleValues()}/>
      </motion.nav>
    </LayoutGroup>
  )
}

export default MobNavBar