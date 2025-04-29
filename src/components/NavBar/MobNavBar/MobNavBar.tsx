//Missing the navigation part , check https://codesandbox.io/p/sandbox/framer-motion-side-menu-mx2rw?file=%2Fsrc%2FNavigation.tsx%3A19%2C15

import { AnimatePresence, AnimationControls, LayoutGroup, motion, MotionValue, useAnimation, useCycle, useMotionValue, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MenuToggle } from "../MenuToggle/MenuToggle";
import { sidebarVariants } from "./MnbVariants";

/**Notes
 * Review onUpdate from framer motion for more loyal transition between 
 * unfinished animations
 */

function MobNavBar() {
  //Variable to acces HTML tag
  var root: HTMLElement = document.documentElement;
  //Function to use more precise framer animation controls
  const sidebarControls: AnimationControls = useAnimation();
  //State for the toggling between the open and close menu
  const [isOpen, toggleOpen] = useCycle(false, true);
  /**State for handling the need of doing double click into the 
   * button to trigger the animation, for the moment it's the 
   * only solution
   */
  const [firstTime, setFirstTime] = useState(true);
  const [showed, setShowed] = useState(false);
  var downActive = false;
  var upActive = false;
  const [height, setHeight] = useState(window.innerHeight);
  let { scrollY } = useScroll();
  let scrollYOnDirectionChange: React.MutableRefObject<number> = useRef(scrollY.get());
  let lastPixelsScrolled: React.MutableRefObject<number | undefined> = useRef();
  let lastScrollDirection: React.MutableRefObject<string | undefined> = useRef();
  let pixelsScrolled: MotionValue<number> = useMotionValue(0);

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
    const handleResizeHeightWindow = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResizeHeightWindow);
    if (!showed) {
      sidebarControls.start('firstShow');
      setShowed(true);
    }
    return () => {
      window.removeEventListener("resize", handleResizeHeightWindow);
      scrollY.on("change", latest => {
        let scrollYPrevious = scrollY.getPrevious();

        if (latest < 0) return;
        if (scrollYPrevious === undefined) return;
        //console.log('scrollY'+scrollYPrevious)
        //console.log('latest'+latest)
        let isScrollingDown = scrollYPrevious - latest < 0;
        let scrollDirection = isScrollingDown ? "down" : "up";
        let currentPixelsScrolled = pixelsScrolled.get();
        /**Variables description
         * Every time the user interacts going down/up , the position will be saved 
         * for checking in the conditionals adding for example 400 ints to the saved
         * value , so if for example the user keeps going done it will keep checking 
         * until the current positions matches the stored down value + 400 ints, this 
         * is done in order to make the animation triggers less sensible to down/up 
         * interactions
         * 
         * positionOnDownStart its declared and initialized with 200 because the position
         * when the user enters the page its 0
         * 
         */
        let positionOnDownStart = 400;
        if (lastScrollDirection.current !== scrollDirection && lastPixelsScrolled !== undefined) {
          lastPixelsScrolled.current = currentPixelsScrolled;
          scrollYOnDirectionChange.current = latest;
        }

        if (scrollDirection === "down") {
          upActive = false;
          if (!downActive) {
            if (scrollYPrevious !== 0) {
              if (scrollYPrevious >= positionOnDownStart) {
                sidebarControls.start('hidde');
                downActive = true;
              }
            }
          }
        } else if (scrollDirection === "up") {
          downActive = false;
          if (!upActive) {
            sidebarControls.start('show')
            upActive = true;
          }
        }

        lastScrollDirection.current = scrollDirection;
      })

    }
  }, [height, scrollY])


  return (
    <LayoutGroup>
      <motion.nav
        initial="closed"
        animate={sidebarControls}
      >
        <AnimatePresence>
          <motion.div id="mobCircle" className="fixed z-30 left-0 top-0 bottom-0 w-screen backdrop-blur-xl  border-gradient border-gradient-full"
            key='cricle'
            initial="hidde"
            variants={sidebarVariants}
            animate={sidebarControls}
          />
          <MenuToggle toggle={() => toggleValues()} />
        </AnimatePresence>
      </motion.nav>
    </LayoutGroup>
  )
}

export default MobNavBar