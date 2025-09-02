/**
 * BentoIntro — responsive “bento” grid showcasing intro tiles.
 *
 * Purpose:
 *  - Present a set of tiles/cards that adapt across breakpoints.
 *  - Some tiles may span multiple rows/columns for emphasis.
 *
 * Layout:
 *  - Mobile-first grid; increases columns/row spans at larger breakpoints.
 *  - Utility-first styling with Tailwind to keep styles local and explicit.
 *
 * Interactions:
 *  - Optional hover/focus states and entrance animations.
 *  - Respect prefers-reduced-motion when adding motion effects.
 *
 * Expected result:
 *  - A visually balanced grid that remains readable and performant on all screens.
 *
 * Notes:
 *  - Document any “magic numbers” in class names (fixed widths/heights) with rationale.
 */

import { LayoutGroup, motion } from "framer-motion";
import LinkedinLogo from "../../assets/svgs/linkedin-letters.svg";
import GithubLogo from "../../assets/svgs/github-logo.svg";
import IntroVideo from "../../features/IntroVideo";

function BentoIntro() {
  return (
    <LayoutGroup>
            {/* Bento Intro wrapper
              Purpose:
              - Main grid container for intro section
              - Responsive width/height adjustments across custom breakpoints
              - Uses Tailwind + custom screens (xxs, xs, s, etc.)
              Notes:
              - w-[90%] / h-[90rem] → fallback default
              - Adjusted per breakpoint to keep proportions consistent
            */}
            <motion.div
              className="
                bg-firefly bIParent ml-auto mr-auto mt-6 w-[90%] h-[90rem] 
                xxs:mt-10 xxs:ml-5 xxs:w-[20rem] xxs:h-[34rem] 
                xs:ml-4 xs:w-[21.5rem] xs:h-[38rem] 
                s:w-[24rem] s:h-[42rem] s:mr-auto s:ml-auto 
                md:w-[28rem] md:h-[48rem] 
                lg:w-[36rem] lg:mt-24 lg:h-[30rem]
                xl:w-[40rem] xl:h-[36rem]
                3xl:w-[44rem] 3xl:h-[36rem] 3xl:mt-28
                4xl:mt-36 4xl:w-[58rem] 4xl:h-[45rem]
              "
              layout
            >
              {/* Video tile
                Purpose: container for hero video
                - .bIVideo → relative wrapper with drop-shadow
                - Centered flex with rounded corners
              */}
              <motion.div className="bIVideo flex justify-center items-center rounded-3xl">
                <motion.div className="video-wrapper w-[95%] h-[95%] rounded-3xl">
                  <IntroVideo />
                </motion.div>
              </motion.div>
      
              {/* Bio tile
                Purpose: placeholder tile with peach gradient
                - .bIBio isolates layer
                - Uses noise-peach + overlay-peach for brand effect
              */}
              <motion.div className="rounded-lg bIBio isolate w-full h-full relative">
                <div className="rounded-lg noise-peach"></div>
                <div className="rounded-lg overlay-peach w-full h-full"></div>
              </motion.div>
      
              {/* Gmail tile
                Purpose: custom CSS Gmail logo recreation
                - isolate ensures blend modes don’t leak
                - overflow-hidden keeps internal shapes clipped
              */}
              <motion.div className="rounded-lg bIGmail isolate w-full h-full relative overflow-hidden">
                <div className="w-full h-full z-logo">
                  <div className="gmail-red absolute"></div>
                  <div
                    className="
                      gmail-blue top-3 h-full w-11 absolute
                      xxs:w-8
                      lg:w-7
                      xl:w-8
                      3xl:w-11
                      4xl:w-12
                    "
                  ></div>
                  <div
                    className="
                      gmail-dark-red absolute -top-[1.8rem] h-16 w-11 skew-y-[45deg] 
                      xxs:-top-[1rem] xxs:h-12 xxs:w-8  
                      md:h-14 md:left-[.  /* continues... */
                    "
                  ></div>
                </div>
              </motion.div>
        </LayoutGroup>
    )
}

export default BentoIntro;