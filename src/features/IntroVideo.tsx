import intromp4 from '../assets/videos/gerIntro.mp4'
function IntroVideo() {

    return (
        <section className='absolute -z-10 top-20 left-[14vw] md:left-[12vw] lg:left-[15vw] xl:left-[23vw] 2xl:left-[30vw]'>
            <video autoPlay muted playsInline className=' min-w-[68vw] md:max-w-[80vw] lg:max-w-[75vw] xl:max-w-[55vw] 2xl:max-w-[45vw]'>
                <source src={intromp4} />
            </video>
        </section>
    )
}

export default IntroVideo