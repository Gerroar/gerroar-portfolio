import intromp4 from '../assets/videos/gerIntro.mp4'
function IntroVideo() {

    /**w-full
            xxs:ml-4 
            s:w-[40rem] 
            md:w-[650px] 
            lg:w-[36rem]
            xl:w-[43rem]
            2xl:w-[48rem]
            4xl:w-[60rem] */
    return (
        <section className='overflow-hidden'>
            <video autoPlay muted playsInline className='absolute left-[5%]
            bottom-0 min-h-full w-[90%] h-auto bg-cover overflow-hidden z-0'>
                <source src={intromp4} />
            </video>
        </section>
    )
}

export default IntroVideo