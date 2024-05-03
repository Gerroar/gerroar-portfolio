import { LayoutGroup, motion } from "framer-motion";


function MobBIntro() {

    return (

        <LayoutGroup>
            <motion.div className="bg-firefly bIMobParent" layout>
                <motion.div className="rounded-lg bIMobBio isolate w-full h-full relative">
                    <div className="rounded-lg noise-peach"></div>
                    <div className="rounded-lg overlay-peach w-full h-full"></div>
                </motion.div>
                <motion.div className="bg-white rounded-lg bIMobGmail"></motion.div>
                <motion.div className="bg-white rounded-lg bIMobGit"></motion.div>
                <motion.div className="rounded-lg bIMobSlogan isolate w-full h-full relative">
                    <div className="rounded-lg noise-banana-green"></div>
                    <div className="rounded-lg overlay-banana w-full h-full"></div>
                </motion.div>
                <motion.div className="bg-white rounded-lg bIMobLinkedin"></motion.div>
            </motion.div>
        </LayoutGroup>
    )
}

export default MobBIntro;