import { LayoutGroup, motion } from "framer-motion";
import LinkedinLogo from "../../assets/svgs/linkedin-letters.svg";
import GithubLogo from "../../assets/svgs/github-logo.svg";

function BentoIntro() {

    /**When develop the desktop part, use parameters to pass the breakpoint value from the app.tsx to this file */
    return (
        <div>
            <LayoutGroup>
                <motion.div className="bg-firefly bIMobParent ml-auto mr-auto mt-52 w-[225px] h-[60rem] 
            xxs:mt-56 xxs:ml-5 xxs:w-[23.5rem] xxs:h-[128vw] 
            xs:ml-4 xs:w-[21.5rem]  
            s:w-[24rem] s:max-h-[35rem] s:mr-auto s:ml-auto 
            md:mt-[27rem] md:ml-40 md:w-[31rem] md:h-[70vw] 
            lg:w-[24rem] lg:mt-24 lg:h-[30rem]
            xl:w-[28rem] xl:h-[36rem]
            3xl:w-[40rem] 3xl:h-[22rem] 3xl:mt-44
            4xl:mt-56
            5xl:float-right 5xl:mr-44" layout>
                    <motion.div className="rounded-lg bIMobBio isolate w-full h-full relative">
                        <div className="rounded-lg noise-peach"></div>
                        <div className="rounded-lg overlay-peach w-full h-full"></div>
                    </motion.div>
                    <motion.div className="rounded-lg bIMobGmail isolate w-full h-full relative overflow-hidden">
                        <div className="w-full h-full z-logo">
                            <div className="gmail-red absolute"></div>
                            <div className="gmail-blue top-3 h-full w-8 absolute
                        lg:w-7
                        xl:w-8"></div>
                            <div className="gmail-dark-red absolute -top-[1rem] h-11 w-8 skew-y-[45deg] 
                        xxs:-top-[.85rem] 
                        xs:-top-[.75rem] 
                        md:h-14 md:left-[.01rem]
                        lg:left-0 lg:-top-[.85rem] lg:w-7 lg:h-11
                        xl:-top-[1.1rem] xl:w-8 xl:h-12"></div>
                            <div className="gmail-green top-3 h-full w-8 absolute right-0
                        lg:w-7
                        xl:w-8"></div>
                            <div className="gmail-yellow absolute right-0 -top-[1rem] h-11 w-8 skew-y-[315deg] 
                        xxs:-top-[.85rem] 
                        xs:-top-[.75rem] 
                        md:h-14 md:-top-[.8rem]
                        lg:-top-[.85rem] lg:w-7 lg:h-11
                        xl:-top-[1.1rem] xl:w-8 xl:h-12"></div>
                        </div>
                        <div className="rounded-lg noise-gmail"></div>
                        <div className="rounded-lg overlay-gmail w-full h-full"></div>
                    </motion.div>
                    <motion.div className="rounded-lg bIMobGit isolate w-full h-full flex items-center justify-center relative">
                        <img src={GithubLogo} alt="GitHub Logo" className="z-logo w-24" />
                        <div className="rounded-lg noise-github-gray"></div>
                        <div className="rounded-lg overlay-github w-full h-full"></div>
                    </motion.div>
                    <motion.div className="rounded-lg bIMobSlogan isolate w-full h-full relative">
                        <div className="rounded-lg noise-banana-green"></div>
                        <div className="rounded-lg overlay-banana w-full h-full"></div>
                    </motion.div>
                    <motion.div className="rounded-lg bIMobLinkedin isolate w-full h-full flex items-center justify-center relative ">
                        <img src={LinkedinLogo} alt="LinkedIn Letters Logo" className="z-logo w-16" />
                        <div className="rounded-lg noise-linkedin-blue"></div>
                        <div className="rounded-lg overlay-linkedin w-full h-full"></div>
                    </motion.div>
                </motion.div>
            </LayoutGroup>
        </div>

    )
}

export default BentoIntro;