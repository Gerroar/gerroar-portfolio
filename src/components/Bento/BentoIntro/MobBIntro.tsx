import { LayoutGroup, motion } from "framer-motion";
import LinkedinLogo from "../../../assets/svgs/linkedin-letters.svg";
import GithubLogo from "../../../assets/svgs/github-logo.svg";

function MobBIntro() {

    return (

        <LayoutGroup>
            <motion.div className="bg-firefly bIMobParent" layout>
                <motion.div className="rounded-lg bIMobBio isolate w-full h-full relative">
                    <div className="rounded-lg noise-peach"></div>
                    <div className="rounded-lg overlay-peach w-full h-full"></div>
                </motion.div>
                <motion.div className="rounded-lg bIMobGmail isolate w-full h-full relative">
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
    )
}

export default MobBIntro;