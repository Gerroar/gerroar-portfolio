import { LayoutGroup, motion } from "framer-motion";
import LinkedinLogo from "../../assets/svgs/linkedin-letters.svg";
import GithubLogo from "../../assets/svgs/github-logo.svg";
import IntroVideo from "../../features/IntroVideo";

function BentoIntro() {

    /**When develop the desktop part, use parameters to pass the breakpoint value from the app.tsx to this file */
    return (
        <LayoutGroup>
            <motion.div className="bg-firefly bIParent ml-auto mr-auto mt-6 w-[90%] h-[90rem] 
            xxs:mt-10 xxs:ml-5 xxs:w-[20rem] xxs:h-[34rem] 
            xs:ml-4 xs:w-[21.5rem] xs:h-[38rem] 
            s:w-[24rem] s:h-[42rem] s:mr-auto s:ml-auto 
            md:w-[28rem] md:h-[48rem] 
            lg:w-[36rem] lg:mt-24 lg:h-[30rem]
            xl:w-[28rem] xl:h-[36rem]
            3xl:w-[48rem] 3xl:h-[22rem] 3xl:mt-44
            4xl:mt-36 4xl:w-[68rem] 4xl:h-[40rem]
            5xl:float-right 5xl:mr-44" layout>
                <motion.div className="bIVideo flex justify-center items-center rounded-3xl">
                    <motion.div className="video-wrapper w-[95%] h-[95%] rounded-3xl">
                        <IntroVideo />
                    </motion.div>
                </motion.div>
                <motion.div className="rounded-lg bIBio isolate w-full h-full relative">
                    <div className="rounded-lg noise-peach"></div>
                    <div className="rounded-lg overlay-peach w-full h-full"></div>
                </motion.div>
                <motion.div className="rounded-lg bIGmail isolate w-full h-full relative overflow-hidden">
                    <div className="w-full h-full z-logo">
                        <div className="gmail-red absolute"></div>
                        <div className="gmail-blue top-3 h-full w-11 absolute
                        xxs:w-8
                        lg:w-7
                        xl:w-8"></div>
                        <div className="gmail-dark-red absolute -top-[1.8rem] h-16 w-11 skew-y-[45deg] 
                        xxs:-top-[1rem] xxs:h-12 xxs:w-8  md:h-14 md:left-[.01rem]
                        lg:left-0 lg:-top-[.85rem] lg:w-7 lg:h-11
                        xl:-top-[1.1rem] xl:w-8 xl:h-12"></div>
                        <div className="gmail-green top-3 h-full w-11 absolute right-0
                        xxs:w-8
                        lg:w-7
                        xl:w-8"></div>
                        <div className="gmail-yellow absolute right-0 -top-[1.8rem] h-16 w-11 skew-y-[315deg] 
                        xxs:-top-[1rem] xxs:h-12 xxs:w-8 
                        md:h-14
                        lg:-top-[.85rem] lg:w-7 lg:h-11
                        xl:-top-[1.1rem] xl:w-8 xl:h-12"></div>
                    </div>
                    <div className="rounded-lg noise-gmail"></div>
                    <div className="rounded-lg overlay-gmail w-full h-full"></div>
                </motion.div>
                <motion.div className="rounded-lg bIGit isolate w-full h-full flex items-center justify-center relative">
                    <img src={GithubLogo} alt="GitHub Logo" className="z-logo w-24" />
                    <div className="rounded-lg noise-github-gray"></div>
                    <div className="rounded-lg overlay-github w-full h-full"></div>
                </motion.div>
                <motion.div className="rounded-lg bISlogan isolate w-full h-full relative">
                    <div className="rounded-lg noise-banana-green"></div>
                    <div className="rounded-lg overlay-banana w-full h-full"></div>
                </motion.div>
                <motion.div className="rounded-lg bILinkedin isolate w-full h-full flex items-center justify-center relative ">
                    <img src={LinkedinLogo} alt="LinkedIn Letters Logo" className="z-logo w-16" />
                    <div className="rounded-lg noise-linkedin-blue"></div>
                    <div className="rounded-lg overlay-linkedin w-full h-full"></div>
                </motion.div>
            </motion.div>
        </LayoutGroup>
    )
}

export default BentoIntro;